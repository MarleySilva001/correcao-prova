import './App.css'
import Cabecalho from './components/Cabecalho'
import Evento from './components/Eventos'
import Galeria from './components/Galeria'
import Rodape from './components/Rodape'


function App() {


  return (
    <>
    <Cabecalho />
    <Evento 
    titulo={'Evento do Senai'}
    descricao={'legal'}
    horario={'dia 24 as 12h'}
    local={'sala de aula'}
    />
    <Galeria />
    <Rodape />
    </>
  )
}

export default App