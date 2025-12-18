import { useState } from "react"
import Child1 from "./Child1.jsx"
const Parent1 = ()=>{
    const [msg,setMsg] = useState("");
    const [list,setList] = useState([]);
    const test_func = (param1,param2)=>{
        setMsg(param1);
        setList(param2);
    }

    
    return(
        <>
            <Child1 test_func={test_func} msg={msg}></Child1>
            <h1>{msg}</h1>
            {
                list.map((element,index)=>{
                    return(<p key={index}>{element}</p>)
                })
            }
        </>
    )
}
export default Parent1;