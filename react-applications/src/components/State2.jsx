import { useState } from "react";
const Name = ()=>{
    return <h1>Hello</h1>
}
const State2 = ()=>{
    const [count,setCount] = useState(0);
    return(
        <>
            {Name()}
            <h1>{count}</h1>
            <hr></hr>
            <button onClick={()=>setCount(count+1)}>Increament</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
            
            
        </>
    )
}
export default State2;