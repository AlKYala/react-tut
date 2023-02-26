import logo from './logo.svg';
import './App.css';
import MyFirstComponent from "./myFirstComponent";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import InputKomponente from "./InputKomponente";

//the definition of our component
function App() {
  return (
    <div className="App">
      <p>Vergil status</p>
    <MyFirstComponent/>
        <InputKomponente/>
    </div>
  );
}

//we always export apps (if we want to use them)
export default App;
