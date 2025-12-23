import { Component } from "react";
class Demo2 extends Component{
    constructor(){
        super();
        this.state = {
            "msg" : "CareerIT",
            "num" : 100,
            "flag" : true
        }
        this.test_func = this.test_func.bind(this);
    }
    test_func(){
       this.setState({
        "num" : this.state.num + 100,
        "flag" : !(this.state.flag),
        "msg" : "FS_CareerIT"
       })
    }
    render(){
        return(
            <>
                {
                    this.state.flag ? <h1>{this.state.msg}</h1> : <h1>{this.state.num}</h1>
                }
                <h1>{this.state.num}</h1>
                <h1>{this.state.msg}</h1>
                <button onClick={this.test_func}>ClickMe</button>
            </>
        )
    }
}
export default Demo2;