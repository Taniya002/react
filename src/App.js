/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with me
        </a>
      </header>
    </div>
  );
}

export default App;*/
import RoutersScreen from "./view/routers/RoutersScreen";
import { BrowserRouter } from'react-router-dom';
import "./view/style/Style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App()
  {
    return(
    <>
    <BrowserRouter>
    <RoutersScreen/>
    </BrowserRouter>
    </>
     )
}
/*import Home from "./view/screen/Home";
export default function App(){
  return(
    <>
    <Home/>
    </>
  )
  }*/
