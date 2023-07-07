import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react';
import Navbar from './componentes/Navbar.js';
import { Routes, Route } from 'react-router-dom';
import Ubicacion from "./Pages/Ubicacion";
import Productos from "./Pages/Productos";

const App = () => {
      
    return (
        
        <div className="container-fluid">


            <Routes>
                <Route path="/" element={<Navbar />}>

                </Route>
                <Route path="/Ubicacion" element={<Ubicacion />} />
                <Route path="/Productos" element={<Productos />} />


                
            </Routes>


        </div>

    )
}

export default App;



