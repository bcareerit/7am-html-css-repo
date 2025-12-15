const Subchild = ({flag,list,...props})=>{
     const {num} = props;
    return(
        <>
            {
                list.map((element,index)=>{
                    return(<p key={index}>{element}</p>)
                })
            }
            {
                flag ?  <h1>{num}</h1> : <h1>{props.msg}</h1>
            }
            <h1>{num}</h1>
            <h1>{props.msg}</h1>
        </>
    )
}
export default Subchild;