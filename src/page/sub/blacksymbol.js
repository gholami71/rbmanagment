import axios from "axios"
import OnRun from "../../config/OnRun"
import { useEffect, useState } from "react"
import { getCookie } from "../../function/cookie"
import { IoMdAddCircleOutline } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";

const BlackSymbol = () => {
    const key = getCookie('uph')
    const [data, setData] = useState({symbol:'',type:'درامدثابت'})
    const [df,setDf] = useState([])


    const adding = () =>{
        if (data.symbol=='') {
            alert('کد خالی بود')
        }else{
            axios.post(OnRun+'/management/setblacksymbol',{key:key,data:data})
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
        axios.post(OnRun+'/management/getblacksymbol',{key:key})
        .then(response=>{
            if (response.data.reply) {
                setDf(response.data.df)
            }else{
                alert(response.data.msg)
            }
        })
    }

    const DelDiscount = (id) =>{
        axios.post(OnRun+'/management/delblacksymbol',{key:key,id:id})
        .then(responose=>{
            if (responose.data.reply) {
                alert('حذف شد')
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
                <input value={data.symbol} onChange={(e)=>setData({...data,symbol:e.target.value})} placeholder="نماد"/>
                <select value={data.type} onChange={(e)=>setData({...data,type:e.target.value})}>
                    <option value={'درامدثابت'}>درامدثابت</option>
                    <option value={'غیرفعال'}>غیرفعال</option>
                </select>

                <span onClick={adding} className="add"><IoMdAddCircleOutline/></span>
            </div>
            <div className="result">
                {
                df.map((i)=>{
                        return(
                        <div className="discount" key={i}>
                            <div>
                                <p>نماد</p>
                                <p>{i.symbol}</p>
                            </div>
                            <div>
                                <p>نوع</p>
                                <p>{i.type}</p>
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


export default BlackSymbol