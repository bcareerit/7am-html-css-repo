import { useEffect, useState } from "react";

const GetEx1 = ()=>{
    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((res)=>res.json())
        .then((data)=>{
            setUsers(data);
            setLoading(false);
        })
        .catch((err)=>{
            console.log(err);
            setLoading(false);
        })
    },[]);

    return(
        <>
            {loading && <i className="fa fa-spin fa-spinner"></i>}
            
            <br></br>
            <table border={1}
                   align="center"
                   cellPadding={10}
                   cellSpacing={10}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>username</th>
                        <th>email</th>
                        <th>address</th>
                        <th>phone</th>
                        <th>website</th>
                        <th>company</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((element,index)=>{
                            return(<tr key={index}>
                                <td>{element.id}</td>
                                <td>{element.name}</td>
                                <td>{element.username}</td>
                                <td>{element.email}</td>
                                <td>{JSON.stringify(element.address)}</td>
                                <td>{element.phone}</td>
                                <td>{element.website}</td>
                                <td>{JSON.stringify(element.company)}</td>
                            </tr>)
                        })
                    }
                </tbody>
                <tfoot></tfoot>
            </table>

        </>
    )
}
export default GetEx1;