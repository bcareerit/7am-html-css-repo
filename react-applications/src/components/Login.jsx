import { useRef } from "react";
import { useNavigate } from "react-router-dom"
const Login = ()=>{
    const email = useRef("");
    const pass = useRef("");
    const navigate = useNavigate();
    const login_fn = ()=>{
        email.current.value == "hr@careerit.ac.in" && pass.current.value == "CareerIT@123" ? navigate("/dashboard", {"state":{"email":email.current.value}}) : navigate("/error");
    }
    return(
        <>
            <fieldset>
                <legend>LOGIN</legend>
                <input type="email" ref={email} placeholder="enter email"></input>
                <br></br><br></br>
                <input type="password" ref={pass} placeholder="enter password"></input>
                <br></br><br></br>
                <button onClick={login_fn}>Login</button>
            </fieldset>   
        </>
    )
}
export default Login;