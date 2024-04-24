import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Banner from '../components/Banner';
import Galeria from '../components/Galeria';
import Galeria2 from '../components/Galeria2';
import Header from '../components/Header';
import Sobre from '../components/Sobre';
import Texto from '../components/Texto'


function Home() {


    const irPara= useNavigate();
    const handleClick = () => {
        irPara('/sobre');
    }

  return (
    <div>
      <Header />
      <Banner />
      <Sobre />
      <button onClick={handleClick}>saber mais</button>
      <Galeria />
      <Galeria2 />
      <Texto nome={"Marley"} idade={"17"} escola={"Senai"}  />
      <Texto nome={"Ian"} idade={"17"} escola={"Senai"}  />
    </div>
  )
}

export default Home;