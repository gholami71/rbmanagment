import { useNavigate } from "react-router-dom"


const Menu = () => {
    const navigate = useNavigate()
    const menuList = [{name:'مدیریت تقویم',url:'calendar'},{name:'مدیریت کاربران',url:'users'},{name:'مدیریت تیکت ها',url:'ticket'}]

    return(
        <div className="Menu">
            {
                menuList.map(i=>{
                    return(
                        <p key={i.url} onClick={()=>navigate(i.url)}>{i.name}</p>
                    )
                })
            }

        </div>

    )
}
export default Menu