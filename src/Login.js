import React, { useState } from "react"

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordStrength, setPasswordStrength] = useState('');

    const evaluatePasswordStrength = (password) => {
        if (password.length >= 8 && /[a-z]/.test(password) && /[A-Z]/.test(password) && /\d/.test(password) && /[!@#$%^&*]/.test(password)) {
            return 'Strong';
        } else {
            return 'Weak';
        }
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        const strength = evaluatePasswordStrength(newPassword);
        setPasswordStrength(strength);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);

        if (email.trim() === '' || password.trim() === '') {
            alert('Please fill in both email and password fields.');
            return;
        }
        
        console.log(email);
    }

        const handleForgotPassword = () => {
            alert('Forgot Password functionality goes here.');
         }

    
    
    return (
    <div className="Container">
        <div className="dd"><h1>Degree Deals</h1></div>
        <hr></hr>
        <form className="LoginForm" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" id="email" name="email" />
                <label htmlFor="Password">Password</label>
                <input value={password} onChange={handlePasswordChange} type="password" placeholder="Enter your password" id="password" name="password" />
                {password && <div>Password Strength: {passwordStrength}</div>}
                <div className="button-container">
                    <button onClick={handleForgotPassword}>Forgot Password?</button>
                    <button type="submit">Login</button>
                </div>
            </form>
            <button onClick={() => props.onFormSwitch('Register')}>Don't have an account? Register here</button>
    </div>
    )
} 

