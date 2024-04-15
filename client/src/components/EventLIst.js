import React from 'react';

function EventLIst() {

    const toBase64 = file => new Promise((resolve,reject) => {
        const reader = new FileReader();
       reader.readAsDataURL(file);
       reader.onload = () => resolve(reader.result);
       reader.onerror = error => reject(error);
     });

 
   
    const convertPlease =() =>{
        const pickedBase64 = document.getElementById("pickedBase64");
        const pickedImage = document.getElementById("pickedImage");
        document.getElementById('pickedImage').innerHTML = "";
        let uploadedFile = document.querySelector('#fileUpload').files[0];
        toBase64(uploadedFile)
        .then(res => {pickedBase64.innerHTML = res; function getBase64Img() {return res; } var base64img = getBase64Img();
            function Base64ToImage(base6img, callback) {
                var img = new Image();
                img.onload = function() {
                  callback(img);
                };
                img.src = base64img;
                img.style.maxHeight= "100%";
                img.style.maxWidth= "100%";
              }
              Base64ToImage(base64img, function(img) {
                document.getElementById('pickedImage').appendChild(img);
                // document.getElementById("first").style.display = "none";
                uploadedFile = "";
              
               
            //     var log = 'w=' + img.width + ' h=' + img.height;
       
            //  });
        });})
        .catch(error => {console.log(error);
        });
    };
           
 
  return (
    <div className="purple">
       <p>Select file to upload and convert into base64 string</p>
    <hr></hr>
    <br></br>
    <div id="first">
    <label  htmlFor="fileUpload"></label>
    <input  type="file" id="fileUpload" name="fileUpload"/>
    </div>
   
   
    <br></br>
    <button  onClick={convertPlease}>Click me to upload file and convert into base64</button>
    </div>
  )
}

export default EventLIst
