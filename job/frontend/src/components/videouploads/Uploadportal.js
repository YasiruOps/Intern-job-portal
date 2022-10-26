import Footer from "../footer";
import Header from "../header";
import "../videouploads/Uploadportal.css";
import ups from "../../images/uploads.jpg";

function Uploadportal() {

  function guardarArchivo(e) {
    var file = e.target.files[0] //the file
    var reader = new FileReader() //this for convert to Base64 
    reader.readAsDataURL(e.target.files[0]) //start conversion...
    reader.onload = function (e) { //.. once finished..
      var rawLog = reader.result.split(',')[1]; //extract only thee file data part
      var dataSend = { dataReq: { data: rawLog, name: file.name, type: file.type }, fname: "uploadFilesToGoogleDrive" }; //preapre info to send to API
      fetch('https://script.google.com/macros/s/AKfycbyR1qVBn-71RxD_zybRDVUhCQbV8VrAwKh-qAg2_-sgxkCsOF5qzy3wFia4AkvkZKVt/exec', //your AppsScript URL
        { method: "POST", body: JSON.stringify(dataSend) }) //send to Api
        .then(res => res.json()).then((a) => {
          console.log(a)
          alert("Your file has uploaded!")
           //See response
        }).catch(e => console.log(e)) // Or Error in console
    }
  }

  return (
    <div >
      <Header />
        <div className="guide">
          <h3>
            How to upload a video resume ?
          </h3>

          <h5>Please Follow these steps</h5>
                  <ol type="1">
                    <li>
                      Click the Upload Button
                    </li>
                    <li>
                      Select Your Video Resume
                    </li>
                    <li>
                      Submit the Video in the follwing format "NAME_VIDEO_RESUME.MP4"
                    </li>
                    <li>
                    PLEASE ALLOW 30 SECONDS FOR THE VIDEO TO SUBMIT 
                    </li>
                  </ol>
                  <label class="custom-file-upload">
    <input type="file" accept="video/*" id="customFile" onChange={(e) => guardarArchivo(e)} />
        Upload Video Resume
        </label>
          <img src={ups} className="guide2" alt="image" style={{ width: '50rem', marginLeft: '60rem' , marginTop: '-18rem' }}/>


            
     

        </div>
      <Footer />
    </div>
  );
}

export default Uploadportal;