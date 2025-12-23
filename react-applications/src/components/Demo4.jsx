import { Component, PureComponent } from "react";

class Demo4 extends PureComponent{
    constructor(){
        super();
    }
    render(){
        console.log("child");
        return(
            <>
                <h1>{this.props.key1}</h1>
            </>
        )
    }
}
export default Demo4;