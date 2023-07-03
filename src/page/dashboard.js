import Menu from "../component/menu"
import UserContext from "../context/userContet"
import { Outlet } from "react-router-dom"

const Dashboard = () => {
    const key = '0000d45fd51fd25f45d'

    return(
        <UserContext.Provider value={key} >
            <div>
                <Menu/>
                <Outlet/>
            </div>
        </UserContext.Provider>
    ) 
}
export default Dashboard