import axios from "axios"
import { useState } from "react"
import OnRun from "../config/OnRun"
import { useNavigate } from "react-router-dom"
import { setCookie, getCookie } from "../function/cookie"
import { useEffect } from "react"

const Login = () => {
    const [input, setinput] = useState({username:'', password:''})
    const navigate = useNavigate()
    const key = getCookie('uph')

    const checkuser = () =>{
        axios.post(OnRun+'/management/atuh', {key:key}).then(Response=>{
            if (Response.data.reply){
                navigate('/dashboard')
            }
        })
    }

    useEffect(checkuser, [])
    

    
    const apply = () =>{
        axios.post(OnRun+'/management/login', input).then(response=>{
            if (response.data.reply == true){
                setCookie('uph', response.data.uph, 10)
                navigate('/dashboard')

            }
            else{
                alert('نام کاربری یا رمز عبور اشتباه است')
            }
        })
    }

    return(
        <div className="sup-login">
            <div className="login">            
                <input placeholder="نام کاربری" value={input.username} 
                onChange={(e)=>{setinput({...input,username:e.target.value})}}></input> 


                <input placeholder="رمز عبور" value={input.password} 
                onChange={(e)=>{setinput({...input,password:e.target.value})}}></input>


                <button onClick={apply}>ورود</button>
            </div>
        </div>
      
    )
}

export default Login