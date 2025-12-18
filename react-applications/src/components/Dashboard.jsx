import { useLocation } from "react-router-dom";

const Dashboard = ()=>{
    const location = useLocation();
    const obj = location.state;
    console.log(obj);
    return(
        <>
            <h1>Dashboard Soon...!</h1>
        </>
    )
}
export default Dashboard;