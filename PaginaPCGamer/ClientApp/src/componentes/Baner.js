import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import imagen from '../assets/baner.jpeg';
import amd from '../assets/amd.PNG';
import intel from '../assets/intel.PNG';
import '../Estilos/Navbar.css';




const baner = () => {

    return (

       

            <div className="baner" id="baner" >

                <img className="responsive-img" src={amd} width="200px" height="500px" />
                <img className="responsive-img" src={imagen} width="1200px" height="500px" />
                <img className="responsive-img" src={intel} width="200px" height="500px" />

            </div>

        
    
    );

}

export default baner;

