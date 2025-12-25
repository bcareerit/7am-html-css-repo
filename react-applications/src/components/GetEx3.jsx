import { useEffect, useState } from "react";
import api from "./api";

const GetEx3 = ()=>{
    const [res,setRes] = useState([]);
    const make_api_call = async ()=>{
        const {data} = await api();
        console.log(data);
        setRes(data);
    }

    useEffect(()=>{
        make_api_call();
    },[]);
    return(
        <>
            <p>{JSON.stringify(res)}</p>
        </>
    )
}
export default GetEx3;