import "./External.css";
import logo from "../assets/logo.png"

const laptops = [{"pic":"https://excelr-sb-images.s3.eu-north-1.amazonaws.com/laptop1.jpeg","brand":"DELL","cost":50000},
                 {"pic":"https://excelr-sb-images.s3.eu-north-1.amazonaws.com/laptop2.jpeg","brand":"HP","cost":40000},
                 {"pic":"https://excelr-sb-images.s3.eu-north-1.amazonaws.com/laptop3.jpeg","brand":"MAC","cost":30000},
                 {"pic":"https://excelr-sb-images.s3.eu-north-1.amazonaws.com/laptop4.jpeg","brand":"LENOVO","cost":20000},
                 {"pic":"https://excelr-sb-images.s3.eu-north-1.amazonaws.com/laptop1.jpeg","brand":"ACER","cost":10000}];

const External = ()=>{
    return(
        <>
            <div className="parent">
                
                <div className="header">
                    <img src={logo} alt="CareerIT" className="logo"></img>
                    
                    <div className="menu">
                        <a href="#"><i className="fa fa-home"></i> Home</a>
                        <a href="#"><i className="fa fa-about"></i> About</a>
                        <a href="#"><i className="fa fa-info"></i> Contact</a>
                        <a href="#"><i className="fa fa-sign-in"></i> Login</a>
                    </div>
                </div>
                
                <div className="main">
                    {
                        laptops.map((element,index)=>{
                            return(<div className="laptop" key={index}>
                                <img src={element.pic} alt="DELL"></img>
                                <h1>{element.brand}</h1>
                                <h2><i className="fa fa-inr"></i> {element.cost}</h2>
                            </div>)
                        })
                    }
                </div>
                
                
                <div className="footer">
                    <p>copyright@careerit.co.in</p>
                </div>
            </div>
        </>
    )
}
export default External;
