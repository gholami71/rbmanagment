import axios from "axios"
import OnRun from "../../config/OnRun"
import { useEffect, useState } from "react"
import { getCookie } from "../../function/cookie"

import {TabulatorFull as Tabulator} from 'tabulator-tables';

const Users = () => {
    const key = getCookie('uph')
    const [df, setDf] = useState([])


    var table = new Tabulator("#table", {
        height:205, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
        data:df, //assign data to table
        layout:"fitColumns", //fit columns to width of table (optional)
        columns:[ //Define Table Columns
            {title:"شماره", field:"phone",},
            {title:"ثبت نام", field:"dateregister",},
            {title:"اعتبار", field:"datecredit"},
            {title:"نوع حساب", field:"label", },
            {title:"اخرین بازدید", field:"lastlogin", },
        ],
   });


    const getDataAllUsers = () => {
        axios.post(OnRun + '/management/getdataallusers', { key: key })
        .then(response=>{
            console.log(response.data)
            if (response.data.reply) {
                setDf(response.data.df)
            }else{
                alert(response.data.msg)
            }
        })
    }

    useEffect(getDataAllUsers,[])

    return (
        <div className="sub">
            <div id="table"></div>

        </div>
    )
}


export default Users