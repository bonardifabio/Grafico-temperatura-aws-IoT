import React, { useEffect, useState } from 'react';
import {getDataList} from '../api/requests.js'
import {Chart} from './Chart.js'
console.log("entra");
 const DataList = () => {
    const [list, setList] = useState([]);
    useEffect(()=>{
        loadData();
    }, [])

    const loadData = async () => {
        const res = await getDataList();
        setList(res);
    }
   /* return (
        list.length > 0 && list.map((dato,index)=>{
            console.log(dato);
            return(
                <div key={index}>
                    <h3>{dato.name}</h3>
                    <p>{dato.value}</p>
                    <p>{dato.hum}</p>
                </div>
            )
        })
    )*/
    return (
        <Chart obj={list} />
    );
}

export default DataList