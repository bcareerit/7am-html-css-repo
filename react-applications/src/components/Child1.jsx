const Child1 = ({test_func,msg})=>{
    return(
        <>
            {msg}
            <button onClick={
                ()=>test_func(`Hello`,[10,20,30,40,50])} >Transfer</button>
        </>
    )
}
export default Child1;