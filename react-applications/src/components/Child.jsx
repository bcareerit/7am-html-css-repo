import Subchild from "./Subchild";

const Child = (props)=>{
   
    return(
        <>
            <Subchild {...props}></Subchild>
            
        </>
    )
}
export default Child;