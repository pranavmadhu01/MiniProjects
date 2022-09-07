import "./App.css";
import { useState } from "react";
var QRCode = require("qrcode");

function App() {
  const [Url, setUrl] = useState("");
  const [qrcode, setQrcode] = useState("");
  function GenerateQR() {
    QRCode.toDataURL("I am a pony!", function (err, url) {
      if(err){
        console.error(err)
      }
      else{
        setQrcode(url)
      }
    });
  }
  return (
    <div className="app">
      <h1>Generate your Qr code for free</h1>
      <div>
        <input
          type="text"
          placeholder="Generate your Qr code for free"
          value={Url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button onClick={GenerateQR}>Generate</button>
        <img src={qrcode} alt="" />
      </div>
    </div>
  );
}

export default App;
