import "bootstrap/dist/css/bootstrap.min.css"
import imagen from '../assets/logo.png';
const Ubicacion = () => {

    
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

            <div className="text-center">
                <br />
                <h5><i className="bi bi-rocket-takeoff-fill"></i> Realizamos entregas a todas partes del mundo</h5>
                <p>
                    ATENCIÓN A VENTAS EN LINEA<br />
                    <i class="bi bi-telephone-fill"></i> Telefonos: +52 826 196 0391<br />
                    <i class="bi bi-envelope-at-fill"></i> Email: store.sayah@gmail.com<br />
                    <i class="bi bi-envelope-at-fill"></i> Soporte técnico y garantías: store.sayah@gmail.com<br />
                    <i class="bi bi-geo-fill"></i> Río Salado 1054, Pueblo Nuevo IV,<br />
                    <i class="bi bi-clock-fill"></i> Horario de atención: Lunes a Viernes: 09:00 - 02:30 y 03:30 - 06:00, Sábados: 10:00am - 01:00pm
                </p>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.2036901817773!2d-100.173324!3d25.7638348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662ebe3aa55cdd9%3A0x620e9a23ebc601cb!2sR%C3%ADo%20Salado%201054%2C%20Pueblo%20Nuevo%20IV%2C%2066646%20Cd%20Apodaca%2C%20N.L.%2C%20M%C3%A9xico!5e0!3m2!1ses!2sec!4v1686778436463!5m2!1ses!2sec"
                    width="600"
                    height="450"
                    style={{ border: '0' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <br /><br />
                <div id="final1">
                    <br />
                    <p className="text-center" style={{ fontSize: '20px', color: 'white', fontFamily: 'Arial' }}>
                        Buscanos en nuestras redes sociales <br />
                        <i className="bi bi-whatsapp"></i> | <i className="bi bi-facebook"></i> | <i className="bi bi-instagram"></i> | <i className="bi bi-twitter"></i> | <i className="bi bi-twitch"></i> | <i className="bi bi-discord"></i><br /><br />
                        <h5 style={{ fontSize: '12px' }}>&#169; 2023 SAYAH &ndash; Tienda PC Gamer. Todos los derechos reservados </h5>
                    </p>
                    <br />
                </div>
                <br />
            </div>

            
        </div>



   


    )
}

export default Ubicacion;



