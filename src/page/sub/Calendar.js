import axios from "axios"
import OnRun from "../../config/OnRun"
import { getCookie } from "../../function/cookie"
import { useEffect, useState } from "react"
import { IoMdAddCircleOutline } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import DatePicker ,{DateObject}from "react-multi-date-picker"

import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"

const Calendar = () =>{
    const [date, setDate] = useState(new DateObject)
    const [dateback, setdateback] = useState([])

    const key = getCookie('uph')

    const GetCalender = () =>{
        axios.post(OnRun+'/management/getcalendar',{key:key})
            .then(response=>{
                if (response.data.reply){
                    setdateback(response.data.df)
                }
                else{

                }
            })
    }

    const SetCalender = () =>{

        axios.post(OnRun+'/management/setcalendar',{key:key,date:date})
            .then(response=>{
                if (response.data.reply){
                    GetCalender()


                } 
                else{
                    alert(response.data.msg)
                }
            })
    }

    const DelCalender = (dt) =>{
        axios.post(OnRun+'/management/delcalendar',{key:key,date:dt})
            .then(response=>{
                if(response.data.reply){
                    GetCalender()
                }else{
                    alert(response.data.msg)
                }
            })
    }

    useEffect(GetCalender,[])

    return(
        <div className="sub">
            <div className="tools">
                <div className="calenderAdd">
                    <span onClick={SetCalender}  className="add"><IoMdAddCircleOutline/></span>
                    <DatePicker  calendar={persian} locale={persian_fa} value={date} onChange={(e)=>setDate(e)}/>
                </div>
            </div>
            <div className="result">
                {
                dateback.map((i)=>{
                        return(
                        <div className="date" key={i}>
                            <p>
                                {i}
                            </p>
                            <span onClick={()=>DelCalender(i)}><AiOutlineDelete/></span>
                        </div>
                        )                
                }) 
                }
            </div>


        </div>
    )
}


export default Calendar