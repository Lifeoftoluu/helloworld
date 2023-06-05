import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Api from './Components/axios';
import Trial from './Components/trial';
import Navbar from './Components/navbar';
import  Hookform  from './Components/hookform';
import Home from './Components/home';
import Contact from './Components/contact';
import About from './Components/about';
import Pricing from './Components/pricing';
import Mode from './Components/event';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
;


   
function App() {
        return (  
          
    <BrowserRouter> 
    <div className="App">
      <div className="container">
      <Navbar />
      
        <Routes>          
          <Route exact path='/home' element={<Home/>} />         
        <Route exact path='/contact' element={<Contact/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/pricing' element={<Pricing/>} />
        <Route exact path='/Api' element={<Api/>} />  
        <Route exact path="/Mode" element={<Mode/>} />
        </Routes>
      
        
       
      </div>
    </div>
    </BrowserRouter>
     
  );
}

export default App;
