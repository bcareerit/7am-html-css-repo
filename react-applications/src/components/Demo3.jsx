import { Component } from "react"
import Demo4 from "./Demo4.jsx"
class Demo3 extends Component{
    constructor(){
        super();
        this.state = {
            num : 1
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                num : 1
            })
        },1000)   
    }
    render(){
        console.log("parent");
        return(
            <>
                <Demo4 key1={this.state.num}></Demo4>
            </>
        )
    }
}
export default Demo3;