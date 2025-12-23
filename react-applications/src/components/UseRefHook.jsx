import { useRef, useState } from "react";
const UseRefHook = ()=>{
    const ref1 = useRef("");
    const ref2 = useRef("");
    const [msg,setMsg] = useState("");
    const login = ()=>{
        ref1.current.value == "careerit" && ref2.current.value == "careerit@123" ? setMsg("Login Success") : setMsg("Login Fail");
    }
    return(
        <>
            <fieldset>
                <legend>LOGIN FORM</legend>
                <input type="text" ref={ref1} placeholder="enter user name"></input>
                <br></br><br></br>
                <input type="password" ref={ref2} placeholder="enter password"></input>
                <br></br><br></br>
                <button onClick={login}>Login</button>
                <br></br><br></br>
                {msg}
            </fieldset>
        </>
    )
}
export default UseRefHook;