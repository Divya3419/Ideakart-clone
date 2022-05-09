import React from 'react';
import './Contactpage.css';
// import {DB} from './firebase';
import { useNavigate } from "react-router-dom";
const Contactpage = ()=>{
    const navigate = useNavigate();
const handleSubmit = ()=>{
    alert("Your details are captured, we will get back to you shortly")
    navigate("/")
}




        return (
    
            <form className='container2' onSubmit={handleSubmit}>
                <p style={{margin: 'auto'}}>You can contact our team by filling this form -</p>
            
                
                <div className='box'>
                    <div className='line1'>
                        <p>Firstname*</p>
                        <input className='input_box' type='text' 
                        placeholder='Please enter your firstname*'
                       
                         />
                    </div>
                    <div className='line1'>
                        <p>Lastname*</p>
                        <input className='input_box' type='text' 
                        placeholder='Please enter your lastname*' 
                       
                         />
                    </div>
                </div>
                
                <div className='box'>
                    <div className='line2'> 
                        <p>Email*</p>
                        <input className='input_box' type='email' 
                        placeholder='Please enter your email*' 
                       
                        />
                    </div>
                    <div className='line2'>
                        <p>Phone*</p>
                        <input className='input_box' type='Number' 
                        placeholder='Please enter your phone*' 
                      
                        />
                    </div>
                </div>
    
                <div className='msg1'>
                    <p>Message*</p>
                    <textarea className='msg2' type='text'
                  
                    >Message</textarea>
                    <button style={{backgroundColor: 'green', color: 'white', padding: '10px', borderRadius: '5px', marginTop: '10px' }} type='submit'>Send message</button>
                </div>
            
            </form>
        
        );
    }


export default Contactpage