import { useState } from "react";

const Events1 = ()=>{
    const [login,setLogin] = useState("");
    const [msg,setMsg] = useState("");
    const func_one = ()=>{
        alert("welcome to onClick without arguments");
    } 
    const func_two = (param1,param2)=>{
        param1 == `admin` && param2 == `admin@123` ? setLogin(`Login Success`) : setLogin(`Login Fail`);
    }

    const func_three = ()=>{
        alert("welcome to onDoubleClick without arguments");
    }

    const func_four = (param1,param2)=>{
        param1 == `admin` && param2 == `admin@123` ? setLogin(`Login Success`) : setLogin(`Login Fail`);
    }

    const handleChange = (event)=>{
        setMsg(event.target.value);
    }

    const register = (event)=>{
        event.preventDefault();
        console.log("soon, we will discuss forms");
    }
    return(
        <>
            <form onSubmit={register}>
                <input type="submit" value={"Register"}></input>
            </form>
            <hr></hr>
            <input type="text" name="testname" onChange={handleChange}></input>
            <p>{msg}</p>
            <hr></hr>
            <button onClick={func_one}>Button1</button>
            <button>Button2</button>
            <h1>{login}</h1>

            <button onDoubleClick={func_three}>Button3</button>
            <button onDoubleClick={()=>func_four(`admin`,`admin@123`)}>Button2</button>
        </>
    )
}
export default Events1;