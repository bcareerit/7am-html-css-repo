import {Link,Outlet, useParams} from "react-router-dom";
const Test1 = ()=>{
    const {pid,pname,pcost} = useParams();
    return(
        <>
            <h1>{pid}....{pname}...{pcost}</h1>
            
            <Link to="test1/subtest1" style={{marginRight:300}}>Subtest1</Link>
            <Link to="test1/subtest2">Subtest2</Link>
            <br></br><br></br>
            <Outlet></Outlet>
        </>
    )
}
export default Test1;