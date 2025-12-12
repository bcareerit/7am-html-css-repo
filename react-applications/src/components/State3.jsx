import { useState } from "react";

const State3 = ()=>{
    const [count,setCount] = useState(0);
    const [count1,setCount1] = useState(1);
    return(
        <>
            <h1>{count}</h1>
            <button onClick={()=>setCount1(prev=>prev+2)}>
                Increment
            </button>
            <button onClick={()=>setCount(prev=>prev-1.5)}>
                Decrement
            </button>
        </>
    )
}
export default State3;