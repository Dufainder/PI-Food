import './App.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import LandingPage from './components/landingPage';
import Home from './components/Home';
import Form from './components/Form';
import Detail from './components/Detail';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/create" element={<Form/>}/>
        <Route path="/detail" element={<Detail/>}/>
      </Routes>

    </BrowserRouter>

  );
}

export default App;
