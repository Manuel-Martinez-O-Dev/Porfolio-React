import '../hojas-de-estilo/Experiencia-laboral.css';

function Experiencia_laboral() {
  return (
    <section className='Experiencia_laboral'>
      <header className='header_experiencia_section'>
        <h2>
          Experiencia laboral
        </h2>
      </header>
      <article className='article_experiencia'>
        <header>
          <h3>
            Estudiante de Ingenieria de Sistemas
          </h3>
          <h4>
            U.A.T.F
          </h4>
        </header>
        <p>Actualmente...</p>
        <p className='descripcion_experiencia'>
          Estudio el desarrollo de sistemas complejos, analisis, diceño, implementacion, mantenimiento y pruebas de todo tipo de sistemas.
        </p>
        <footer className='footer_experiencia'>
          Saber mas...
        </footer>
      </article>
    </section>
  );
}
export default Experiencia_laboral;