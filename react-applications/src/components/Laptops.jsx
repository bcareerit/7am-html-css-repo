import { Link,Outlet } from "react-router-dom";
const Laptops = ()=>{
    return(
        <>
            <Link to="laptops/dell" style={{marginRight:300}}>
                Dell
            </Link>
            <Link to="laptops/hp">Hp</Link>
            <br></br>
            <Outlet></Outlet>
        </>
    )
}
export default Laptops;