// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homedata from './components/Homedata';
import Productdetail from './components/Productdetail';

function App() {
  return (
    <div className="App">
     {/* <Homedata/> */}

     <Routes>
       <Route path="/" element={<Homedata/>}>
       
       </Route>
       <Route path="/:id" element={<Productdetail/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
