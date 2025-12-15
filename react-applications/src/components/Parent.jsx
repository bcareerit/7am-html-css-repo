import { useState } from "react";
import Child from "./Child.jsx"
const Parent = ()=>{
    const [num,setNum] = useState(100);
    return(
        <>
            <Child msg={"Hello,CareerIT"}
                   num={num}
                   flag={false}
                   list={[10,20,30,40,50]}></Child>
        </>
    )
}
export default Parent;