import { useNavigate } from "react-router-dom"


const Menu = () => {
    const navigate = useNavigate()
    const menuList = [{name:'تقویم',url:'calendar'},{name:'کاربران',url:'users'},{name:'تیکت ها',url:'ticket'},{name:'کد تخفیف',url:'discount'},{name:'نمادهای سیاه',url:'blacksymbol'}]

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