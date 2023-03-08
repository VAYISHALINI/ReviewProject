import axios from "axios";
import '../components/update1.css'
import React, { Component } from "react";

class Update extends Component {
    constructor(props){
        super(props);
        this.state={
            academyName:" ",
            danceType:" ",
            fee:"",
            location:" ",
            contact:"",
        }

        this.msg1=this.msg1.bind(this);


    }
handleacadChange = (event) => {
    this.setState({ academyName:event.target.value});
}



msg1(){
    alert("Updated successfully!!")
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
    axios.put('http://127.0.0.1:8080/detail',data)
};
render(){
    return ( 
        <div align="center" className="for2">
            <h1>UPDATE ACADEMY DETAILS</h1>
        <form onSubmit={this.handleSubmit} className="form">
            <label className="label" style={{color:'black'}}>Academy</label>
            <br/>
            <input
                className="login-input" 
                type="text" 
                value={this.state.academyName}
                onChange ={this.handleacadChange}
            />
             <br/>
            <label className="label" style={{color:'black'}}>DanceType</label>
            <br/>
            <input
                className="login-input" 
                type="text" 
                value={this.state.danceType}
                onChange ={this.handledanceChange}
            />
             <br/>
            <label className="label" style={{color:'black'}}>Fee</label>
            <br/>
            <input
                className="login-input" 
                type="text" 
                value={this.state.fee}
                onChange ={this.handlefeeChange}
            />
           <br/>
            <label className="label" style={{color:'black'}}>Location</label>
            <br/>
            <input
                className="login-input" 
                type="text" 
                value={this.state.location}
                onChange ={this.handlelocationChange}
            />
             <br/>
            <label className="label" style={{color:'black'}}>Contact</label>
            <br/>
            <input
                className="login-input" 
                type="text" 
                value={this.state.contact}
                onChange ={this.handlecontactChange}
            />
             <br/>

            <button className="update" onClick={this.msg1} type="submit">Update</button>
        </form>
        </div>
    );
  }
}
export default Update;
