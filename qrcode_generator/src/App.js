import "./App.css";
import { useState } from "react";
var QRCode = require("qrcode");

function App() {
  const [Url, setUrl] = useState("");
  const [qrcode, setQrcode] = useState("");
  const [hostname, setHostname] = useState("");
  function GenerateQR() {
    QRCode.toDataURL(
      Url,
      {
        width: 800,
        margin: 0.5,
        quality: 1,
        color: {
          dark: "#2892D7",
          light: "#000000",
        },
      },
      function (err, url) {
        if (err) {
          console.error(err);
        } else {
          var url3 = Url;

          var j = url3.indexOf("://");

          var host = "";

          for (var i = j + 3; i < url3.length; i++) {
            if (url3.charAt(i) != "/") {
              host = host + "" + url3.charAt(i);
            } else {
              break;
            }
          }
          setHostname(host);
          setQrcode(url);
        }
      }
    );
  }
  return (
    <div className="app">
      <h1>Generate your Qr code here!!!</h1>
      <div>
        <input
          type="text"
          placeholder="eg. https://github.com/"
          value={Url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button onClick={GenerateQR}>Generate</button>
      </div>
      {qrcode ? (
        <>
          <img src={qrcode} alt="" />
          <a href={qrcode} download={`${hostname}.png`}>
            <button>Download here</button>
          </a>
        </>
      ) : (
        <h3>Enter a valid url first</h3>
      )}
    </div>
  );
}

export default App;
