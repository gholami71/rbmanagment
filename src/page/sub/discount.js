import axios from "axios"
import OnRun from "../../config/OnRun"
import { useEffect, useState } from "react"
import { getCookie } from "../../function/cookie"
import DatePicker ,{DateObject}from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import { IoMdAddCircleOutline } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";

const Discount = () => {
    const key = getCookie('uph')
    const [date, setDate] = useState(new DateObject)
    const [data, setData] = useState({code:'',count:'',value:'',type:'toman'})
    const [df,setDf] = useState([])


    const adding = () =>{
        if (data.code=='') {
            alert('کد خالی بود')
        }else if (data.value=='') {
            alert('مقدار خالی بود')
        }else{
            axios.post(OnRun+'/management/discount',{key:key,date:date,code:data.code,count:data.count,value:data.value,type:data.type})
            .then(responose=>{
                if(responose.data.reply){
                    alert('ثبت شد')
                    get()

                }else{
                    alert(responose.data.msg)
                }
            })
        }
    }

    const get = () =>{
        axios.post(OnRun+'/management/getdiscount',{key:key})
        .then(response=>{
            console.log(response.data.df)
            if (response.data.reply) {
                setDf(response.data.df)
            }else{
                alert(response.data.msg)
            }
        })
    }

    const DelDiscount = (id) =>{
        axios.post(OnRun+'/management/offdiscount',{key:key,id:id})
        .then(responose=>{
            if (responose.data.reply) {
                alert('غیر فعال شد')
                get()
            }else{
                alert(responose.data.msg)
            }
        })

    }


    useEffect(get,[])
    return (
        <div className="sub">
            <div className="tools">
                <input value={data.code} onChange={(e)=>setData({...data,code:e.target.value})} placeholder="کد"/>
                <input value={data.count} onChange={(e)=>setData({...data,count:e.target.value})} placeholder="تعداد مصرف"/>
                <input value={data.value} onChange={(e)=>setData({...data,value:e.target.value})} placeholder="مقدار"/>
                <select value={data.type} onChange={(e)=>setData({...data,type:e.target.value})}>
                    <option value={'toman'}>تومان</option>
                    <option value={'percent'}>درصد</option>
                </select>

                <DatePicker  calendar={persian} locale={persian_fa} value={date} onChange={(e)=>setDate(e)}/>
                <span onClick={adding} className="add"><IoMdAddCircleOutline/></span>
            </div>
            <div className="result">
                {
                df.map((i)=>{
                        return(
                        <div className="discount" key={i.code}>
                            <div>
                                <p>کد</p>
                                <p>{i.code}</p>
                            </div>
                            <div>
                                <p>تعداد</p>
                                <p>{i.count}</p>
                            </div>
                            <div>
                                <p>مصرف</p>
                                <p>{i.use}</p>
                            </div>
                            <div>
                                <p>{i.value}</p>
                                <p>{i.type}</p>
                            </div>
                            <div>
                                <p>معتبر</p>
                                <p>{i.date}</p>
                            </div>
                            <span onClick={()=>DelDiscount(i._id)}><AiOutlineDelete/></span>
                        </div>
                        )                
                }) 
                }
            </div>

        </div>
    )
}


export default Discount