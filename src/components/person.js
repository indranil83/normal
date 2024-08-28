import React,{Component} from "react";
// import Man from "./man";


class Person extends Component {
    constructor(props){
        super(props);
        this.props=props;
    }
     render(){
        return(
            <div>
                <h1>
                <i>Dear {this.props.name},welcome to Elogix</i>
                </h1>
            </div>
        )
     }
}
export default Person;