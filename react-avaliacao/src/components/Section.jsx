import React from "react";
import Event from "./Event";
import Imagem from "./Imagens";
import TextBig from "./TextBig";



export default function Section(){
    return(
        <div className="section container">
            <div className="duas-colunas content">
                <TextBig label={"Dia da familia"}/>
                <hr />
                <Event Descricao={"É com grande alegria que convidamos vocês para se juntarem a nós em um dia repleto de diversão, aprendizado e união. Nosso objetivo é fortalecer os laços entre a escola, os estudantes e suas famílias, promovendo momentos memoráveis de interação e compartilhamento."} Data={"20/04/2024"} Hora={"8:00"} Local={"Escola Sesi - São José"} />
            </div>
            <div className="duas-colunas">
            <Imagem imagem={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVeXGkNCYZ73XtEuV2CsDZ08qDf7dBwjoUxA&s"} alt={""}/>
            </div>
        </div>
        
    )
}