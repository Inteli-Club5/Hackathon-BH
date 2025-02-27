import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import CriarConta from './Criar-Conta';
import Conta from './Conta';
import Escolha from './Escolha';
import Quiz from './Quiz';
import Lessons from './Teorico';
import Assinatura from './Assinatura';

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Routes>
                        <Route path="/" element={<Login/>}/>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/criar-conta" element={<CriarConta/>}/>
                        <Route path="/escolha" element={<Escolha/>}/>
                        <Route path="/conta" element={<Conta/>}/>
                        <Route path="/quiz" element={<Quiz/>}/>
                        <Route path="/licoes" element={<Lessons/>}/>
                        <Route path="/assinatura" element={<Assinatura/>}/>

                    </Routes>
                </div>
            </div>
        );
    }
}

export default App;