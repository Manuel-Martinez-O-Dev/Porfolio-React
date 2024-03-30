import '../hojas-de-estilo/Encabezado-porfolio.css';
import foto_perfil from '../imagenes/foto-perfil.jpg';

function Encabezado_porfolio() {
  return (
    <header className='Encabezado_porfolio'>
      <img 
        className='foto_perfil'
        src={foto_perfil}
        alt='Foto de Manuel' />
      <h1 className='h1_Encabezado_p'>
        ¡Hey!, my name is manuel
      </h1>
      <p className='p_Encabezado_p'>
        Apacionado del emprendimiento, estudiante de Ingenieria de Sistemas con amplias habilidades en el mundo del desarrollo Web.
      </p>
      <nav className='nav_Encabezado_p'>
        <a 
          className='a_Encabezado_p' 
          href='#'>
        GitHub
        </a>
        <a 
          className='a_Encabezado_p'
          href='#'>
        LinkedIn
        </a>
      </nav>
    </header>
  );
}

export default Encabezado_porfolio;