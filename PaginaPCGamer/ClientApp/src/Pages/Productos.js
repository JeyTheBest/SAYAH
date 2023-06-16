import "bootstrap/dist/css/bootstrap.min.css"
import imagen from '../assets/logo.png';


const Productos = () => {


    return (
        <div>
            <nav className="navbar">
                <ul>
                    <li>
                        <img src={imagen} width="50px" height="50px" />
                    </li>

                    <li>
                        <a href="/" className="btn btn-danger" id="boton">
                            <i className="bi bi-award-fill"></i>Inicio
                        </a>
                    </li>
                    <li>
                        <a href="/productos" className="btn btn-danger" id="boton">
                            <i className="bi bi-box-fill"></i> Productos
                        </a>
                    </li>

                    <li>
                        <a href="/Ubicacion" className="btn btn-danger" id="boton">
                            <i className="bi bi-geo-alt-fill"></i> Ubicacion
                        </a>
                    </li>
                </ul>
            </nav>

           


        </div>






    )
}

export default Productos;


