import logo from './logo.svg';
import './App.css';
import Addemp from './components/Addemp';
import Viewemp from './components/Viewemp';
import Deleteemp from './components/Deleteemp';
import Searchemp from './components/Searchemp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Viewemp/>}/>
      <Route path='/Delete' element={<Deleteemp/>}/>
      <Route path='/Add' element={<Addemp/>}/>
      <Route path='/Search' element={<Searchemp/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
