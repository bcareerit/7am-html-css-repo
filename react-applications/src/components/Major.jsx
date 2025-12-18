import {BrowserRouter as CareerIT, Link, Route, Routes} from "react-router-dom";
import Test1 from "./Test1.jsx";
import Test2 from "./Test2.jsx";
import Test3 from "./Test3.jsx";
import Subtest1 from "./Subtest1.jsx"
import Subtest2 from "./Subtest2.jsx"
import Subtest3 from "./Subtest3.jsx"
import Subtest4 from "./Subtest4.jsx"
const Major = ()=>{
    return(
        <>
            <CareerIT>
                <Link to="/test1/111/Laptop/10000" style={{marginRight:300}}>
                        Test1
                </Link>
                <Link to="/test2" style={{marginRight:300}}>
                        Test2
                </Link>
                <Link to="/test3" style={{marginRight:300}}>
                        Test3
                </Link>

                <br></br><br></br>

                <Routes>
                    <Route path="/test1/:pid/:pname/:pcost" element={<Test1></Test1>}>
                        <Route path="test1/subtest1" element={<Subtest1></Subtest1>}></Route>
                        <Route path="test1/subtest2" element={<Subtest2></Subtest2>}></Route>
                    </Route>

                    <Route path="/test2" element={<Test2></Test2>}>
                        <Route path="test2/subtest3" element={<Subtest3></Subtest3>}></Route>
                        <Route path="test2/subtest4" element={<Subtest4></Subtest4>}></Route>
                    </Route>
                    <Route path="/test3" element={<Test3></Test3>}></Route>
                </Routes>
            </CareerIT>
        </>
    )
}
export default Major;