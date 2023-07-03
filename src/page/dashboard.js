import Menu from "../component/menu"
import UserContext from "../context/userContet"

const Dashboard = () => {
    const key = '0000d45fd51fd25f45d'

    return(
        <UserContext.Provider value={key} >
            <div>
                <Menu/>
            </div>
        </UserContext.Provider>
    ) 
}
export default Dashboard