import React,{Component} from "react";
import bha from '../images/bharatham.jpg';
import kuchi from '../images/kuchi3.jfif';
import semi from '../images/semi2.jfif';
import kathak from '../images/kathak2.jfif';
import {Link,Outlet} from 'react-router-dom';
import '../components/main1.css';


class Mainpage extends Component{
  
    render(){
      return (
        <div className="main1">
          
          <div className="dan">  
          <section className="main1">
           <pre className="h11">CELEBRATE THE PASSION FOR{"\n"}{"                    "}DANCE</pre>  
            <pre className="bb">{"  "}Dance is an art {"\n"}{"        "}that imprints on the soul.{"\n"}{"\n"}{"            "}It is with you every moment, {"\n"}{"              "}it expresses itself {"\n"}{"                    "}in everything you do.</pre>
            </section>
            <section className="body1">
              <h1 style={{textAlign: 'center', marginTop: '70px', color: 'black'}}>ACADEMIES</h1>
              <div className="acad" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '100px', width: '100%'}}>
                <div className="kuch" style={{width: '20%', padding: '5px 10px', float: 'left', textAlign: 'center', borderRadius: '16px', boxShadow: '0 1px 2px rgba(0,0,0,0.15)', marginLeft: '20px'}}>
                  <img src={kuchi} id="ku" alt="" />
                  <div>     
                    <h2>Kuchipudi</h2>
                    <h3>
                      Kuchipudi is one of the eight major classical dance forms originated 
                      in Andhra Pradesh. We have trained dance teachers who themselves have 
                      mastered this dance form. We provide classes for all age group.
                    </h3>
                  </div>
                </div>
                <div className="kathak" style={{width: '20%', padding: '5px 10px', float: 'left', textAlign: 'center', borderRadius: '16px', boxShadow: '0 1px 2px rgba(0,0,0,0.15)', marginLeft: '20px'}}>
                  <img src={kathak} alt="" />
                  <div>
                    <h2>kathak</h2>
                    <h3>
                      Kathak is characterized by intricate footwork and precise 
                      rhythmic patterns that the dancer articulates by controlling about 100 ankle bells. 
                    </h3>
                  </div>
                </div>
                <div className="bha" style={{width: '20%', padding: '5px 10px', float: 'left', textAlign: 'center', borderRadius: '16px', boxShadow: '0 1px 2px rgba(0,0,0,0.15)', marginLeft: '20px'}}>
                 <Link to="/tab" className="bh">
                  <img src={bha} id="bh" alt=" " />
                  <div>
                    <h2>Bharathanatyam</h2>
                    <h3>
                      Bharatnatyam is a known South Indian classical dance 
                      form originated from Tamil Nadu. Our teachers 
                      while teaching this dance make sure that the students 
                      end up mastering each aspect of this dance form.
                    </h3>
                  </div>
                </Link>
                </div>
                <div className="semi" style={{width: '20%', padding: '5px 10px', float: 'left', textAlign: 'center', borderRadius: '16px', boxShadow: '0 1px 2px rgba(0,0,0,0.15)', marginLeft: '20px'}}>
                  <img src={semi} alt="" />
                  <div>
                    <h2>Semi Classical Dance</h2>
                    <h3>
                      Semi-classical dance is an art form that features extensive movements of 
                      your body while maintaining grace along with expressions and speed. 
                      Interestingly, this dance form breaks what is called a stylized structure in the classical dance. 
                    </h3>
                  </div>
                </div>
                
                <Link to="/for"><button className="new">New Academy Details</button></Link>
                <br/><br/>
                <Link to="/up"><button className="up">Update academy Details</button></Link>
                <Link to="/del"><button className="del">Delete academy Details</button></Link>

              </div>
            </section></div>
            
              <Outlet/>
        </div>
      );
    }
    }


  export default Mainpage;