
import React from 'react'
import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/HomePage'
import About from './components/pages/About'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import './App.css'

export default function App() {
    
    const [ user, setLoginUser] = useState({})
      
    return (
        <Router>
            
            <div>
            
                <Routes>
           
          
                   
                    <Route exact path="/" element={ <LandingPage  />}  />
                    <Route path="/login" element={ <LoginPage  />}/>
                    
                    <Route path="/register"element={ <RegisterPage/> } />
                    <Route path="/forget-password" elementt={ <ForgetPasswordPage/> } />
                    <Route path="/home" element={ <HomePage/> }  />
                    <Route path="/About" element={ <About/> }/>
                    
                </Routes>
                
                
            </div>
        </Router>
    )
}




