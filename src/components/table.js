import axios from "axios";
import '../components/tab.css';
import React,{Component} from "react";
class Table extends Component{
    state={
        data:[]
    }
    componentDidMount()
    {
        axios.get('http://127.0.0.1:8080/getallusers/Bharathanatiyam').then(response=>{
            this.setState({data:response.data});
        })
        .catch(error=>{
            console.log(error);
        });
    }
    render()
      {
        return(
            <div className="ta">
            <table border={1}>
                <thead>
                    <tr>
                        <th>academyName</th>
                        <th>danceType</th>
                        <th>fee</th>
                        <th>location</th>
                        <th>contact</th>

                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map(user=>(
                        <tr>
                            <td>{user.academyName}</td>
                            <td>{user.danceType}</td>
                            <td>{user.fee}</td>
                            <td>{user.location}</td>
                            <td>{user.contact}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        )
      }
}
export default Table;