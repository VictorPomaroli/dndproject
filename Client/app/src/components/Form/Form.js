import "./Form.css"
import React, { useState } from 'react';
import { login } from '../services/authService.js'   

export default function Form() {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await login(name, password);
        if (!success) {
            setError('Invalid user or password');
        } else {
            // Redirecionar ou atualizar o estado conforme necessário
        }
    };

    return (
        <form className="box" onSubmit={handleSubmit}>
            <h1>Form Test</h1>
            <div className="campo">
                <label>Usuário</label>
                <input type="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="campo">
                <label>Senha</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit">Login</button>
        </form>
    )
}