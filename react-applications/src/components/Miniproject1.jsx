import { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./Login.jsx";
import Spineer from "./Spineer.jsx";
//const Login = lazy(()=>import("./Login.jsx"));

//import Dashboard from "./Dashboard.jsx"
const Dashboard = lazy(()=>import("./Dashboard.jsx"));

//import Error from "./Error.jsx"
const Error = lazy(()=>import("./Error.jsx"));

const Miniproject1 = ()=>{
    return(
        <>
            <BrowserRouter>
                {/* <Suspense fallback={<div>Loading....</div>}> */}
                    <Routes>
                        <Route path="/" element={<Login></Login>}></Route>
                        <Route path="/dashboard" 
                               element={<Suspense fallback={<Spineer></Spineer>}><Dashboard></Dashboard></Suspense>}></Route>
                        <Route path="/error" element={<Error></Error>}></Route>
                    </Routes>
                {/* </Suspense> */}
            </BrowserRouter>
        </>
    )
}
export default Miniproject1;