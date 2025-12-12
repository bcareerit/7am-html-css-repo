import { useState } from "react";

const State4 = ()=>{
    const [data,setData] = useState(()=>read_data());

    function read_data(){
        return JSON.stringify(localStorage.getItem("data1"));
    }

    return(
        <>
            <h1>{data}</h1>
        </>
    )
}
export default State4;