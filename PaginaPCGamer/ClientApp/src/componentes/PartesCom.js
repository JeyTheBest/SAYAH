import '../Estilos/Navbar.css';
import "bootstrap/dist/css/bootstrap.min.css"

const PartesCom = (props) => {
    return (
        <div className="computador" id="computador">
            <a href={props.enlace} style={{ textDecoration: 'none' }}>
                <div className="card text-center bg-white mt-5">
                    <h5 style={{ fontSize: '20px', color: '#ff9c00', fontFamily: 'Arial', fontWeight: 'bold' }}>{props.titulo}</h5>
                    <div className="text">
                        <p style={{ fontSize: '16px', color: 'black', fontFamily: 'Arial', textAlign: 'justify', margin: '10px' }}>{props.parrafo}</p>
                        <img src={props.imagen} className="mx-auto" alt="CPU" width="60px" height="60px" />
                    </div>
                </div>
            </a>
        </div>
    );
}

export default PartesCom;
