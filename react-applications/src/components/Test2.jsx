import {Link,Outlet} from "react-router-dom";
const Test2 = ()=>{
    return(
        <>
            <h1>Test2....!</h1>

            <Link to="test2/subtest3" style={{marginRight:300}}>Subtest3</Link>
            <Link to="test2/subtest4">Subtest3</Link>
            <br></br><br></br>
            <Outlet></Outlet>
        </>
    )
}
export default Test2;