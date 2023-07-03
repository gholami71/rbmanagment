import { useNavigate } from "react-router-dom"

<<<<<<< HEAD
        <div className="Menu">
            <p>مدیریت تقویم</p>
            <p>مدیریت کاربران</p>
            <p>مدیریت تیکت ها</p>
=======
const Menu = () => {
    const navigate = useNavigate()
    const menuList = [{name:'مدیریت تقویم',url:'calendar'},{name:'مدیریت کاربران',url:'users'},{name:'مدیریت تیکت ها',url:'ticket'}]

    return(
        <div>
            {
                menuList.map(i=>{
                    return(
                        <p onClick={()=>navigate(i.url)}>{i.name}</p>
                    )
                })
            }
>>>>>>> 3961cb5b9ae6de9e31dcf3ba2c0d985fc6df0223
        </div>

    )
}
export default Menu