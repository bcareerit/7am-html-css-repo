import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login.jsx";
import Dashboard from "./Dashboard.jsx"
import Error from "./Error.jsx"
const Miniproject1 = ()=>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login></Login>}></Route>
                    <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
                    <Route path="/error" element={<Error></Error>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Miniproject1;