import { useEffect, useState } from "react";
import './App.css';
import jwtDecode from "jwt-decode";

function App() {

  const [login, setLogin] = useState(true)
  const [user, setUser] = useState()

  function handleResponse(response) {
    console.log("JWT ID token" + response.credential);
    let Token = jwtDecode(response.credential)
    console.log(Token)
    setUser(Token)
    setLogin(false)
    document.getElementById("signInDiv").hidden = true
  }
  function handleSignout(e) {
    setLogin(true)
    document.getElementById("signInDiv").hidden = false
    setUser([])
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

    google.accounts.id.prompt();

  }, [user]);

  return (
    <div className="App">
      <h1>Google Login React App</h1>
      {login && <div id="signInDiv" ></div>}
      {!login &&
        <div>
          <img src={user.picture} alt="user.name"></img>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <br></br>
          <button onClick={ (e)=> handleSignout(e)}>Sign out</button>
        </div>
      }
      
    </div>
  );
}

export default App;
