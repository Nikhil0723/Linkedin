import './App.css';
import { BrowserRouter as Switch,Routes , Route, Router, BrowserRouter } from 'react-router-dom';
import Login from './components/Login'
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/home' element={<>
        <Header/>
        <Home/>
        </>}/>

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
