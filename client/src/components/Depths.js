import React from 'react';
// var createHash = require('create-hash')

function Depths() {

    const random = {};
         random.x = Math.floor(Math.random() * 128) + 1;
         random.y = Math.floor(Math.random() * 128) + 1;
         random.z = Math.floor(Math.random() * 128) + 1;
        const VirtAddTop = `${random.x},${random.y},${random.z}`;
        let totalAdd = {x0:random.x,y0:random.y,z0:random.z};
console.log(createHashAddress(totalAdd));
        function setVirtAddTop() {
    document.getElementById("virtaddtop").innerText = VirtAddTop;
        }

        function setDepths() {
            let depthAmt = document.getElementById("numberOfDepths").value;
            document.getElementById("numberOfDepths").style.display = "none";
            let depthAddresses = "";
            for (let j = 0;j < depthAmt;j++) {
                const randomAdd = {};
         randomAdd.x = Math.floor(Math.random() * 128) + 1;
         randomAdd.y = Math.floor(Math.random() * 128) + 1;
         randomAdd.z = Math.floor(Math.random() * 128) + 1;
        let newRandomAdd=  `\n${randomAdd.x},${randomAdd.y},${randomAdd.z}`;
         depthAddresses=depthAddresses+newRandomAdd;
            }
            document.getElementById("setdepths").style.display = "none";
            document.getElementById("virtaddtop").innerText = VirtAddTop+depthAddresses;
        }
function createHashAddress(totalAdd) {
        // string to be hashed
const str = totalAdd;

// secret or salt to be hashed with
const secret = "This is a company secret 🤫";

// create a sha-256 hasher
// var hash = createHash('sha256')
// const sha256Hasher = hash.digest(totalAdd);
// return sha256Hasher;
}
    




  return (
    <div>
        <p className="purple" >Part 2: Select Depth level for CoolCat location</p>
        <button onClick={setVirtAddTop}>click to set top level</button>
        <span className= "flex">Virt Add Top:<div id="virtaddtop"></div></span>
       <input type="number" id="numberOfDepths" name="numberOfDepths"/>
       <button id="setdepths" onClick={setDepths}>click to set Depths</button>
       <div id="virtadddepths"></div>
    </div>
  )
}

export default Depths


