import axios from "axios"
import OnRun from "../../config/OnRun"
import { useEffect, useState } from "react"
import { getCookie } from "../../function/cookie"
import {TabulatorFull as Tabulator} from 'tabulator-tables';



const Ticket = () =>{
    const key = getCookie('uph')
    const [df, setDf] = useState([])
    const [ansewr, setAnsewr] = useState(null)



    var table = new Tabulator("#table", {
        data:df,
        layout:"fitColumns", //fit columns to width of table (optional)
        columns:[ //Define Table Columns
            {title:"شماره", field:"user"},
            {title:"عنوان تیکت", field:"title",},
            {title:"پیام", field:"content"},
            {title:"تاریخ", field:"dateJalali", },
            {title:"ساعت", field:"time", },
            {title:"حذف توسط کاربر", field:"del", },
            {title:"پاسخ", field:"reply",
                cellClick:(e, cell)=>{
                    let row = cell.getRow();
                    let data = row.getData();
                    setAnsewr(data)
                },
            },
        ],
   });

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

    const setReplyTicket = () =>{
        if (ansewr.reply=='') {alert('پاسخ صحیح نیست')
        }else{
            axios.post(OnRun+'/managment/setreplyticket',{ansewr:ansewr,key:key})
            .then(response=>{
                if (response.data.reply) {
                    alert('ثبت شد')
                }else{
                    alert(response.data.msg)
                }
            })
        }
    }

    useEffect(getTikets,[])
    return(
        <div className="sub">
            <div id="table"></div>
            {
                ansewr==null?null:
                <div className="popup">
                    <p>پاسخ به: {ansewr.user}</p>
                    <textarea value={ansewr.reply} onChange={(e)=>setAnsewr({...ansewr,reply:e.target.value})}></textarea>
                    <button onClick={setReplyTicket}>ثبت</button>
                    <button onClick={()=>setAnsewr(null)}>لغو</button>
                </div>
            }
        </div>
    )
}


export default Ticket