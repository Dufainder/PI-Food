import './App.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import LandingPage from './components/landingPage';
import Home from './components/Home';
import Form from './components/Form';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/create" element={<Form/>}/>
      </Routes>

    </BrowserRouter>

  );
}

export default App;
