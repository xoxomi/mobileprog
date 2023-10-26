import React, { useState } from "react"


export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
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

        if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
            alert('Please fill in all fields.');
            return;
        }

        console.log(name, email, password);
        
    }

    const handleCancel = () => {
    }

    return (
        <div className="Container">
            <div className="dd"><h1>Degree Deals</h1></div>
            <hr></hr>
            <form className="RegisterForm" onSubmit={handleSubmit}>
                    <label htmlFor="name">Full Name</label>
                    <input
                    value={name}
                    onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="Enter your Full Name" />
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" id="email" name="email" />
                    <label htmlFor="Password">Password</label>
                    <input value={password} onChange={handlePasswordChange} type="password" placeholder="Enter your password" id="password" name="password" />
                    {password && <div>Password Strength: {passwordStrength}</div>}
                    <div className="button-container">
                        <button type="button" onClick={handleCancel}>Cancel</button>
                        <button type="submit">Sign up</button>
                    </div>
                </form>
                <button onClick={() => props.onFormSwitch('Login')}>Already have an account? Login here.</button>
    </div>
    )
}