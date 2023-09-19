import { useEffect, useState } from "react";
import './App.css';
import jwtDecode from "jwt-decode";

function App() {

  const [user, setUser] = useState([])

  function handleResponse(response) {
    console.log("JWT ID token" + response.credential);
    let Token = jwtDecode(response.credential)
    console.log(Token)
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "403940930490-9p5upakgv7g8brgiignanr4frs6r3rsv.apps.googleusercontent.com",
      callback: handleResponse
    })

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: "outline", size: "large"}
    );
  }, []);

  return (
    <div className="App">
      <h1>Google Login React App</h1>

      <div id="signInDiv" ></div>
    </div>
  );
}

export default App;
