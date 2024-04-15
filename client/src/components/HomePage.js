import React from 'react';
import logo from '../fxVE.gif';
import  EventList from "./EventLIst";

function  HomePage() {

    return (
        
        <div className="App">
          <div className="App-header">
          <h1 className="sitename">CoolCat</h1>
          <div >
            <span className="flex">
            <div id="pickedImage" className="athird1"></div>
            <img src={logo} className="App-logo" alt="logo" />
            <div id="pickedBase64" className="athird"></div>
            </span>
            <span className="flex centertext">
                <div className="onethird">Image</div>
                <div className="onethird"></div>
                <div className="onethird">Base64 Encoded</div>
            </span>
            <div className="left"><EventList/></div>


            <p className="mt20">
              Where you get smaller and smaller while you get larger and larger
            </p>
          
            
          </div>
        
        </div>
         </div>
        
      );
}

export default HomePage;
