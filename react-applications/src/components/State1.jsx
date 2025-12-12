import { useState } from "react";
import Comp1 from "./Comp1.jsx"
import Comp3 from "./Comp3.jsx"
const State1 = ()=>{
    const [msg,setMsg] = useState("CareerIT");
    const [num1,setNum1] = useState(200);
    const [num2,setNum2] = useState(100);
    const [bool,setBool] = useState(true);
    const [list1,setList1] = useState([10,20,30,40,50]);
    const [obj1,setObj1] = useState({"frontend":"ReactJS","backend":"NodeJS"});
    const {frontend,backend} = obj1;
    const [emps,setEmps] = useState( [{"eid":111,"ename":"Emp1","esal":10000,"eimage":"https://reqres.in/img/faces/1-image.jpg"},
                                      {"eid":222,"ename":"Emp2","esal":20000,"eimage":"https://reqres.in/img/faces/2-image.jpg"},
                                      {"eid":333,"ename":"Emp3","esal":30000,"eimage":"https://reqres.in/img/faces/3-image.jpg"},
                                      {"eid":444,"ename":"Emp4","esal":40000,"eimage":"https://reqres.in/img/faces/4-image.jpg"},
                                      {"eid":555,"ename":"Emp5","esal":50000,"eimage":"https://reqres.in/img/faces/5-image.jpg"}] );
    return(
        <>
            <h1>{msg}</h1>
            <hr></hr>

            <h1>Addition. {num1+num2}</h1>
            <h1>Square Root. {Math.sqrt(num1)}</h1>
            <h1>Power {Math.pow(num1,num2)}</h1>
            <hr></hr>
            
            {
               bool ? <h1>{num1}</h1> : <h1>{num2}</h1> 
            }
            {
               !bool ? <h1>{num1}</h1> : <h1>{num2}</h1> 
            }
            {
               bool ? <Comp1></Comp1> : <Comp3></Comp3> 
            }
            {
               !bool ? <Comp1></Comp1> : <Comp3></Comp3> 
            }
            <hr></hr>

            {
                list1.map((element,index)=>{
                    return(<h1 key={index}>{element}</h1>)
                })
            }

            <hr />

            <h1>{obj1.frontend}....{obj1.backend}</h1>
            <h1>{frontend}....{backend}</h1>

            <hr />

            <table border={1} 
                   align="center"
                   cellPadding={10}
                   cellSpacing={10}>
                <thead>
                    <tr>
                        <th>eid</th>
                        <th>ename</th>
                        <th>esal</th>
                        <th>bonus</th>
                        <th>eimage</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        emps.map((element,index)=>{
                            return(<tr key={index}>
                                <td>{element.eid}</td>
                                <td>{element.ename}</td>
                                <td><i className="fa fa-dollar"></i> {element.esal}</td>
                                <td>{element.esal * 0.1}</td>
                                <td>
                                    <img src={element.eimage} width={100} alt="Emp"></img>
                                </td>
                            </tr>)
                        })
                    }
                </tbody>
                <tfoot></tfoot>
            </table>
        </>
    )
}
export default State1;