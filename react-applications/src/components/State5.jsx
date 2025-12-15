import { useState } from "react";

const State5 = ()=>{
    const [list,setList] = useState( [10,20,30,40,50] );
    const [obj,setObj] = useState({name:"Emp",sal:10000});
    const [emps,setEmps] = useState( [{"eid":111,"ename":"Emp1","esal":10000,"eimage":"https://reqres.in/img/faces/1-image.jpg"}] );
    return(
        <>
            <table>
                <thead></thead>
                <tbody>
                    {
                        emps.map((element,index)=>{
                            return(<tr key={index}>
                                <td>{element.eid}</td>
                                <td>{element.ename}</td>
                                <td>{element.esal}</td>
                                <td>
                                    <img src={element.eimage} width={50}></img>
                                </td>
                            </tr>)
                        })
                    }
                </tbody>
                <tfoot></tfoot>
            </table>
            <button onClick={()=>setEmps(prev=>[...prev,{"eid":(prev[prev.length-1].eid)+111,
                                                         "ename":`Emp${[prev.length+1]}`,
                                                         "esal":(prev[prev.length-1].esal)+10000,
                                                         "eimage":`https://reqres.in/img/faces/${prev.length+1}-image.jpg`
            }])}>
                Add Emp
            </button>
            
            <hr></hr>
            <p>{obj.sal}</p>
            <button onClick={()=>setObj(prev=>({...prev,sal:prev.sal*1.1}))}>
                Increment Sal
            </button>
            <hr></hr>
            {
                list.map((element,index)=>{
                    return(<p key={index}>{element}</p>)
                })
            }
            <button onClick={()=>setList(prev=>[...prev,prev[prev.length-1]+10])}>Add Number</button>
            <hr></hr>
        </>
    )
}
export default State5;