import React from 'react';
import logo from '../fxVE.gif';
import  EventList from "./EventLIst";

function  HomePage() {

    return (
        
        <div className="App">
          <div className="App-header">
          <h1 className="sitename">CoolCat</h1>
          <div >
            <div>
           
            <img src={logo} className="App-logo z1" alt="logo" />
          </div>  
            <div className="left"><EventList/></div>
            <div id="pickedImage" className="athird1"></div>
            <div className="onethird">Image</div>
            <div id="pickedBase64" className="athird"></div>
            <div className="onethird">Base64 Encoded</div>
            </div>
            <span className="flex centertext">
                
             
             
               
            </span>

            <p className="mt20">
              Where you get smaller and smaller while you get larger and larger
            </p>
          
            
          </div>
        
        </div>
         
        
      );
}

export default HomePage;
