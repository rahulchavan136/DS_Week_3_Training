import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import MyNavbar from './Routes/MyNavbar';
import Login from './LoanPayment/Login';
import { Dashboard } from './LoanPayment/Dashboard';
import Footer from './LoanPayment/Footer';
import LoanCalculator from './LoanPayment/LoanCalculator';
import LoanPaymentSystem from './LoanPayment/LoanPaymentSystem';
import { HomeLoan } from './LoanPayment/HomeLoan';
import { TwoWheelerLoan } from './LoanPayment/TwoWheelerLoan';
import ErrorComponent from './LoanPayment/ErrorComponent';
 
const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    useEffect(() => {
         const loggedInUser = localStorage.getItem('isLoggedIn');
        const savedUsername = localStorage.getItem('username');
        if (loggedInUser && savedUsername) {
            setIsLoggedIn(true);
            setUsername(savedUsername);
        }
    }, []);

    const handleLogin = (formData) => {
        setIsLoggedIn(true);
        setUsername(formData.username);
        // Save login state to localStorage
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('username', formData.username);
    };

    const handleLogout = () => {
        // Clear localStorage and reset state
        localStorage.clear();
        setIsLoggedIn(false);
        setUsername('');
    };

    return (
        <div className='App'>
            <BrowserRouter>
                {isLoggedIn && <MyNavbar isLoggedIn={isLoggedIn} username={username} onLogout={handleLogout} />}
                <Routes>
                    {isLoggedIn ? (
                        <>
                            <Route path='/dashboard' element={<Dashboard />} />
                            <Route path='/personalloan' element={<LoanPaymentSystem />} />
                            <Route path='/homeloan' element={<HomeLoan />} />
                            <Route path='/twowheelerloan' element={<TwoWheelerLoan />} />
                            <Route path='/loancalculator' element={<LoanCalculator />} />
                         </>
                    ) : (
                        <>
                             {/* <Route path='*' element={<Navigate to="/" />} /> */}
                            <Route path='/' element={<Login onLogin={handleLogin} />} />
                        </>
                    )}
                    {/* Error route for unauthorized access */}
                    <Route path='*' element={<ErrorComponent />} />
                </Routes>
                {isLoggedIn && <Footer />}
            </BrowserRouter>
        </div>
    );
};

export default App;
