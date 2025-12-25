import { useEffect, useState } from "react";
import axios from "axios";
const GetEx2 = ()=>{
    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(true);

    const make_api_call = async ()=>{
        try{
            const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users`);
            setUsers(data);
            setLoading(false);
        }catch(err){
            console.log(err);
            setLoading(false);
        }
    }
    useEffect(()=>{
        make_api_call();
    },[]);



    // useEffect(()=>{
    //     axios.get(`https://jsonplaceholder.typicode.com/users`)
    //     .then((result)=>{
    //         const {data} = result;
    //         setUsers(data);
    //         setLoading(false);
    //     }).catch((err)=>{
    //         console.log(err);
    //         setLoading(false);
    //     }).finally(()=>{
    //         console.log("API Call done");
    //     })
    // },[]);

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
export default GetEx2;