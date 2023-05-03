import React from 'react';
import pikachuImg from './../../img/pikachu.png';
import './home.css'

const Home = () => {
    return (
        <div className="home">
            <h1 className="title"><big><strong>¡</strong></big>Bienvenido maestro Pokemon<big><strong>!</strong></big></h1>
            <img className="pikachu" src={pikachuImg} alt="Pikachu" />
        </div>
    );
};

export default Home;
