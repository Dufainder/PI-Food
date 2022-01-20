
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import LandingPage from './components/landingPage';
import Home from './components/Home';
import Form from './components/Form';
import Detail from './components/Detail';
import GlobalStyle from "./IndexStyled.jsx";


function App() {
  return (
    <BrowserRouter>
    <GlobalStyle/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/create" element={<Form/>}/>
        <Route path="/detail" element={<Detail/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
