import Imagem from "./Imagem";
import Titulo from "./Titulo";

export default function Galeria2(){
    return(
        <div className="galeria2">
            <Titulo titulo={"Kid Cudi's Albuns"} />
            <div className="itensGaleria">
                <Imagem imagem={"https://i.scdn.co/image/ab67616d0000b27359e842b6a3566a141f27f815"} alt={"x"} />
                {/* shift + alt + baixo */}
                <img src="https://upload.wikimedia.org/wikipedia/pt/2/26/ManonTheMoonTheEndofDay.jpg" alt="" />
                <img src="https://m.media-amazon.com/images/I/A1AfooJVwWL._UF1000,1000_QL80_.jpg" alt="" />
                <img src="https://cdns-images.dzcdn.net/images/cover/8150dc4efeec07b0addc3de492029cf8/500x500.jpg" alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/en/a/a6/Kid_Cudi_%E2%80%93_Passion%2C_Pain_%26_Demon_Slayin%27.png" alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/pt/7/73/Kids_See_Ghosts_I.jpg" alt="" />
            </div>
        </div>
    )
}