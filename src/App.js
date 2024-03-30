import './App.css';
import Navegador_porfolio from './componentes/Navegador-porfolio.js';
import Encabezado_porfolio from './componentes/Encabezado-porfolio.js';
import Experiencia_laboral from './componentes/Experiencia-laboral.js';
import Proyectos from './componentes/Proyectos.js';
import Sobre_mi from './componentes/Sobre-mi.js';
import Footer_porfolio from './componentes/Footer-porfoli.js';


function App() {
  return (
    <div className='App'>
      <Navegador_porfolio />
      <Encabezado_porfolio />
      <Experiencia_laboral />
      <Proyectos />
      <Sobre_mi />
      <Footer_porfolio />
    </div>
  );
}

export default App;
