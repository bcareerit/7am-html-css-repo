const Events = ()=>{

     const test_func1 = ()=>{
        console.log("Hello, welcome to test_func1")
     }

     const test_func2 = (param1,param2)=>{
        param1 == `admin` && param2 == `admin@123` ? console.log(`Login Success`) : console.log(`Login Fail`);
     }

     const test_func3 = ()=>{
        console.log(`welcome to test_func3`);
     }

     const test_func4 = (param1,param2)=>{
        param1 == `admin` && param2 == `admin@123` ? console.log(`Login Success`) : console.log(`Login Fail`);
     }

    return(
        <>
           <button onClick={test_func1}>Button1</button> 
           <button onClick={()=>test_func2(`admin`,`admin@123`)}>Button2</button>
           <button onDoubleClick={test_func3}>Button3</button>
           <button onDoubleClick={()=>test_func4(`admin`,`admin@123`)}>Button4</button>
        </>
    )
}
export default Events;