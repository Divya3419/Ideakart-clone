import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homedata from './components/Homedata';
import Productdetail from './components/Productdetail';
import Navbar from "./components/Navbar";
import SignUp from "./pages/sign_up/SignUp";
import Login from "./pages/log_in/Login";
import LoggedIn from "./pages/logged-in/LoggedIn";
// import Home from "./pages/home/Home";
//PrivacyPolicy
import {PrivacyPolicy} from './components/PrivacyPolicy';
import {RefundPolicy} from './components/RefundPolicy';
import {Search} from './components/Search';
import {MoneyOnline} from './components/MoneyOnline';

//RefundPolicy
//MoneyOnline

import Contactpage from "./pages/Contact/Contactpage"
import About from "./pages/about/About"
import {AccountInfo} from "./pages/AccountInfo/AccountInfo"
import Drop from "./pages/drop/Drop"
import Error from "./pages/error/Error";
import Final from './components/Final';
import {Footer} from './components/Footer'
import Notification from "./pages/notifications/Notification";

// import { Control } from './components/Styled';
// import Dashboard from './components/Dashboard';
import Home from './pages/Home'
import NewProduct from './pages/NewProduct'
import Products from './pages/Products'
import Credits from './pages/Credits'



//divya

// import Dashboard from './components/Dashboard';
// import MainRoute from './Routes/MainRoute';
// import { Control } from './components/Styled';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/final*" element={<Final />} />
            
      {/* <Control>
      <Dashboard/>
      <MainRoute/>
      </Control> */}
    
    {/* <Control> */}
    {/* <Control> */}
    {/* <Routes> */}
    {/* <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/dashboard/home" element={<Home/>}/>
    <Route path="/dashboard/newproduct" element ={<NewProduct/>}/>
    <Route path="/dashboard/products" element={<Products/>}/>
    <Route path="/dashboard/credits" element={<Credits/>}/> */}
    {/* </Control>  */}
    {/* </Routes> */}
    {/* </Control> */}
{/* 
    </Routes>



<Route path="/dashboard/home" element={<Home/>}/>
    <Route path="/dashboard/newproduct" element ={<NewProduct/>}/>
    <Route path="/dashboard/products" element={<Products/>}/>
    <Route path="/dashboard/credits" element={<Credits/>}/>



    <Routes> */}


      {/* <Route path="/" element={<Homedata/>}/> */}
      <Route path="/dashboard/home" element={<Home/>}/>
    <Route path="/dashboard/newproduct" element ={<NewProduct/>}/>
    <Route path="/dashboard/products" element={<Products/>}/>
    <Route path="/dashboard/credits" element={<Credits/>}/>
     <Route path="/:id" element={<Productdetail/>}/> 






          <Route path="/" element={<Homedata />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contactpage" element={<Contactpage />} />
          <Route path="/accountinfo" element={<AccountInfo />} />
          <Route path="/Notification" element={<Notification />} />






          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/RefundPolicy" element={<RefundPolicy />} />
          <Route path="/Search" element={<Search/>} />
          <Route path="/MoneyOnline" element={<MoneyOnline />} />
          









         
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logged-in" element={<LoggedIn />} />
          <Route path="/drop" element={<Drop/>} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
