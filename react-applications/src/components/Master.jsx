import Laptops from "./Laptops.jsx"
import Mobiles from "./Mobiles.jsx"
import Watches from "./Watches.jsx"
import Dell from "./Dell.jsx"
import Hp from "./Hp.jsx"
import {Link,Route,Routes,BrowserRouter} from "react-router-dom"
const Master = ()=>{
    return(
        <>
            <BrowserRouter>
                <Link to={"/laptops"} style={{marginRight:300}}>
                    Laptops
                </Link>
                <Link to={"/mobiles"} style={{marginRight:300}}>
                    Mobiles
                </Link>
                <Link to="/watches">
                    Watches
                </Link>
                <br></br><br></br>
                <Routes>
                    <Route path="/laptops" element={<Laptops></Laptops>}>
                        <Route path="laptops/dell" element={<Dell></Dell>}></Route>
                        <Route path="laptops/hp" element={<Hp></Hp>}></Route>
                    </Route>
                    <Route path="/mobiles" element={<Mobiles></Mobiles>}></Route>
                    <Route path="/watches" element={<Watches></Watches>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Master;