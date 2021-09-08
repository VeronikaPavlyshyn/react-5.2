import { useEffect, useState } from "react"
import { getComents } from "../../services/Coments.api";
import Coment from "../Coment/Coment";
export default function Coments(){
    let [coments,setComents]=useState([]);
    useEffect(()=>{
getComents().then(value=>setComents([...value]))
    },[])
    return(
        <div>
{
    coments.map(value=><Coment item={value} key={value.id}/>)
}
        </div>
    )
}