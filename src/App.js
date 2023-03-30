import logo from './logo.svg';
import './App.css';
import Card from './components/card/Card';
import Layouts from './components/layouts/Layouts'
import Details from './components/details/Details'
import Groups from './components/groups/Groups';
import Login from './components/login/Login'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

let grupos = [
  {id: "1"},
  {id: "2"},
  {id: "3"}
]

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/'>
      <Routes>
      <Route path="/" element={<Login/>}></Route>
        <Route element={<Layouts/>}>
          <Route path="/groups" element={<Groups data={grupos} />}></Route>
        </Route>
        <Route path="*" element={<h1>Error, ruta no especificada</h1>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
