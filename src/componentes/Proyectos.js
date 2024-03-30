import '../hojas-de-estilo/Proyectos.css';
import foto_proyecto from '../imagenes/foto-proyecto.png';

function Proyectos() {
  return (
    <section className='Proyectos'>
        <header>
            <h2>
                Proyectos
            </h2>
        </header>
        <article className='article_proyectos'>
            <div>
                <header>
                    <h3>
                        Barra de busqueda
                    </h3>
                    <p>tegnologias</p>
                </header>
                <p>Descripcion...</p>
                <footer>
                    Enlaces...
                </footer>
            </div>
            <div>
                <img
                    className='foto_proyecto'
                    src={foto_proyecto}
                    alt='Proyecto...' />
            </div>
        </article>
    </section>
  );
}

export default Proyectos;