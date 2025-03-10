import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import programacaoImg from './images/programacao.png';
import financasImg from './images/finance.png';

// Variável para armazenar a escolha do usuário
let escolhaUsuario = "";

export const setEscolhaUsuario = (escolha) => {
    escolhaUsuario = escolha;
};

export const getEscolhaUsuario = () => escolhaUsuario;

class Escolha extends Component {
    handleEscolha = (escolha) => {
        setEscolhaUsuario(escolha);
    };

    render() {
        return (
            <div className="escolha-container">
                <h1 className="escolha-title">O que você gostaria de <strong className='gradient'>Aprender</strong>?</h1>
                <div className="cards-container">
                    <div className="card">
                        <div className='meioCard'>
                            <img src={programacaoImg} alt="Programação" className="card-image" />
                        </div>
                        <p className="titulo2">Programação</p>
                        <p className='textT'>Domine blockchain e Web3, aprenda a criar smart contracts, dApps e explorar o universo da descentralização!</p>
                        <Link to="/home" onClick={() => this.handleEscolha("Programação")}>
                            <button className='buttonEscolha'>Seguir</button>
                        </Link>
                    </div>
                    <div className="card">
                        <div className='meioCard meioCard2'>
                            <img src={financasImg} alt="Finanças" className="card-image" />
                        </div>
                        <p className="titulo2">Finanças</p>
                        <p className='textT'>Entenda DeFi, tokens e criptoativos, aprenda a investir com segurança e aproveite as oportunidades da Web3!</p>
                        <Link to="/home" onClick={() => this.handleEscolha("Finanças")}>
                            <button className='buttonEscolha'>Seguir</button>
                        </Link>
                        <br />
                    </div>
                </div>
            </div>
        );
    }
};

export default Escolha;