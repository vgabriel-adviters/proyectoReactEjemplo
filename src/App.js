import logo from './logo.svg';
import './App.css';
import Card from './components/card/Card';

let nombre = "Ezequiel"
function App() {
  return (
    <div className="App">

      <Card name={nombre}/>

    </div>
  );
}

export default App;
