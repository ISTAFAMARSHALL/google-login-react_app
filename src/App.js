import { useEffect } from "react";
import './App.css';

function App() {

  function handleResponse(respsonse) {
    
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "",
      callback: handleResponse
    })
  }, []);

  return (
    <div className="App">
      <h1>Google Login React App</h1>
    </div>
  );
}

export default App;
