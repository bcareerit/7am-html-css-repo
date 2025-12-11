const InternalStyles = {
    "color" : "red",
    "backgroundColor" : "yellow"
};
const Internal = ()=>{
    return(
        <>
            <h2 style={InternalStyles}>Hello,Internal Styles</h2>

            <h1 style={{color:"red",backgroundColor:"green"}}>
                Hello,Internal Styles
            </h1>
        </>
    )   
}
export default Internal;