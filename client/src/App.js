import './App.css';
import LoginPublisher from './components/LoginPublisher';
import LoginAuthor from './components/LoginAuthor';
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Register from './components/Register';
import AllProcess from './components/AllProcess';



function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <LoginPublisher/>
      <LoginAuthor/> */}
 
      <Routes>
      <Route path='/' element={<AllProcess/>}/>
      <Route path='/loginp' element={<LoginPublisher/>}/>
      <Route path='/logina' element={<LoginAuthor/>}/>
      <Route path='/loginr' element={<Register/>}/>
    </Routes>
    </div>
  );
}

export default App;
