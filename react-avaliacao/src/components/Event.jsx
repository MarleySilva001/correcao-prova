import React from "react";

export default function Event ({Descricao,Data,Hora,Local}){
    return(
        <div>
            <p>
                {Descricao}  <br />
                <strong>Data:</strong>{Data} <strong>Hora:</strong>{Hora} <br />
                <strong>Local:</strong>{Local}
            </p>
        </div>
    )
}