import axios from "axios"
import Menu from "../component/menu"
import UserContext from "../function/cookie"
import { Outlet, useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"
import OnRun from "../config/OnRun"
import { useEffect } from "react"
import { getCookie, setCookie } from "../function/cookie"

const Dashboard = () => {

    const navigate = useNavigate()
    const key = getCookie('uph')
    
    const checkuser = () =>{
        axios.post(OnRun+'/management/atuh', {key:key}).then(Response=>{
            if (!Response.data.reply){
                setCookie('uph', '', 0)
                navigate('/')
            }
        })
    }

    useEffect(checkuser, [])
    
    return(    
            <div className="dashboard">
                <Menu/>
                <Outlet/>
            </div>
    ) 
}
export default Dashboard