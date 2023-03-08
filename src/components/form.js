import axios from "axios";
import '../components/form1.css'
import React, { Component } from "react";

class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            academyName:" ",
            danceType:" ",
            fee:"",
            location:" ",
            contact:"",
        }
        this.msg=this.msg.bind(this);
        


    }
handleacadChange = (event) => {
    this.setState({ academyName:event.target.value});
}

msg(){
    alert("New academy has been added!!")
  }



handledanceChange = (event) => {
    this.setState({ danceType:event.target.value});
}
handlefeeChange = (event) => {
    this.setState({ fee:event.target.value});
}
handlelocationChange = (event) => {
    this.setState({ location:event.target.value});
}
handlecontactChange = (event) => {
    this.setState({ contact:event.target.value});
}

handleSubmit = (event) =>{
    event.preventDefault();
    const data = {
        academyName : this.state.academyName,
        danceType : this.state.danceType,
        fee : this.state.fee,
        location: this.state.location,
        contact : this.state.contact       
    }
    axios.post('http://127.0.0.1:8080/post',data)
};
render(){
    return ( 
        <div align="center" className="for1">
            <h1>NEW ACADEMY DETAILS</h1>
        <form onSubmit={this.handleSubmit} className="login-form" >
            <label className="login-label" style={{color:'black'}}>Academy</label>
            <br/>
            <input
                className="login-input" 
                type="text" 
                value={this.state.academyName}
                onChange ={this.handleacadChange}
            />
            <br/>
            <label className="login-label" style={{color:'black'}}>DanceType</label>
            <br/>
            <input
                className="login-input" 
                type="text" 
                value={this.state.danceType}
                onChange ={this.handledanceChange}
            />
            <br/>
            <label className="login-label" style={{color:'black'}}>Fee</label>
            <br/>
            <input
                className="login-input" 
                type="text" 
                value={this.state.fee}
                onChange ={this.handlefeeChange}
            />
           <br/>
            <label className="login-label" style={{color:'black'}}>Location</label>
            <br/>
            <input
                className="login-input" 
                type="text" 
                value={this.state.location}
                onChange ={this.handlelocationChange}
            />
            <br/>
            <label className="login-label" style={{color:'black'}}>Contact</label>
            <br/>
            <input
                className="login-input" 
                type="text" 
                value={this.state.contact}
                onChange ={this.handlecontactChange}
            />
            <button className="login-button" type="submit" onClick={this.msg}> Submit </button>

            
        </form>
        </div>
    );
  }
}

export default Form;