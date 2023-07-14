import axios from "axios"
import OnRun from "../../config/OnRun"
import { useEffect, useState } from "react"
import { getCookie } from "../../function/cookie"



const Ticket = () =>{
    const key = getCookie('uph')
    const [df, setDf] = useState([])


    const getTikets = () =>{
        axios.post(OnRun+'/managment/gettickets',{key:key})
        .then(response=>{
            if (response.data.reply) {
                setDf(response.data.df)
            }else{
                alert(response.data.msg)
            }
        })
    }

    useEffect(getTikets,[])
    return(
        <div className="sub">
            Ticket

        </div>
    )
}


export default Ticket