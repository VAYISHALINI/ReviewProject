import React,{ Component,} from 'react';
import axios from 'axios';
import '../components/del.css';

class Academies extends Component
{
    state ={
        academy:[]
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8080/getvalues')
        .then(response => {
          this.setState({ academy: response.data });
        })
        .catch(error => {
          console.log(error);
        });
    
    }
    async remove(name)
    {
        await fetch('http://localhost:8080/detail/'+name,
        {
            method: 'DELETE',
            headers:{
                'Content-Type':'application/json'
            },
        })
    
        .then(response => response.json());
    }
    render()
    {

        const {academy} = this.state;
    const rows=
    academy.map(academy =>
        <tr key={academy.academyName}>
            <td className="nam">{academy.academyName}</td>
            <td className="nam">{academy.danceType}</td>
            <td className="nam">{academy.fee}</td>
            <td className="nam">{academy.location}</td>
            <td className="nam">{academy.contact}</td>
            <td><button size="sm" className="butt" onClick={() => this.remove(academy.academyName)} onChange={academy}>Delete</button></td>
        </tr>)


    return(
        <div className="dele">
        <div class="table-title">
        <h1>ACADEMY DETAILS</h1>
        </div>
        <table class="table-fill">
        <thead>
        <tr>
        <th class="na">academyName</th>
        <th class="na">danceType</th>
        <th class="na">fee</th>
        <th class="na">location</th>
        <th class="na">contact</th>
        </tr>
        </thead>
                <tbody>
                   {rows}
                </tbody>
         </table>    
        </div>
    );
}
}
export default Academies;