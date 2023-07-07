import React, { useState } from 'react';

import {  DropdownButton, Modal, Button, Form } from 'react-bootstrap';
import '../Estilos/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import imagen from '../assets/logo.png';
import { Outlet, Link } from "react-router-dom";


//import Carrusel from '../componentes/carrusel.js';


import Baner from '../componentes/Baner.js';
import PartesCom from '../componentes/PartesCom.js';
import procesador from '../assets/cpu.PNG';
import disco from '../assets/disco.PNG';
import fuente from '../assets/fuente.PNG';
import ram from '../assets/ram.PNG';
import mainboard from '../assets/mainbard.PNG';
import pantalla from '../assets/pantalla.PNG';
import tarjeta from '../assets/tarjeta.PNG';
import setup from '../assets/setup.jpeg';
import teclado from '../assets/teclado.PNG';
import logo from '../assets/logo.png';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'

const Navbar = () => {


    const [showSubMenu, setShowSubMenu] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [registerUsername, setRegisterUsername] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [dropdownProductos, setDropdownProductos] = useState(false);
    const [dropdownInicioSesion, setDropdownInicioSesion] = useState(false);
    const [dropdown, setDropdown] = useState(false);


    const AbrirCerrarDropdow = () => {
        setDropdown(!dropdown);
    };

    const handleSubMenuClick = () => {
        setShowSubMenu(!showSubMenu);
    };

   

    
    //const handleSubMenuToggle = () => {
    //    setShowSubMenu(!showSubMenu);
    //};

    const handleLogin = async () => {
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: loginUsername,
                    password: loginPassword,
                }),
            });
            const data = await response.json();

            // Aquí puedes manejar la respuesta de la base de datos y tomar acciones en consecuencia
            if (response.ok) {
                // El inicio de sesión fue exitoso
                console.log('Inicio de sesión exitoso');
            } else {
                // El inicio de sesión falló
                console.log('Error al iniciar sesión:', data.message);
            }
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
        }

        // Cerrar el modal de inicio de sesión
        setShowLoginModal(false);
    };

    const handleRegister = async () => {
        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: registerUsername,
                    email: registerEmail,
                    password: registerPassword,
                }),
            });
            const data = await response.json();

            // Aquí puedes manejar la respuesta de la base de datos y tomar acciones en consecuencia
            if (response.ok) {
                // El registro fue exitoso
                console.log('Registro exitoso');
            } else {
                // El registro falló
                console.log('Error al registrar usuario:', data.message);
            }
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
        }

        // Cerrar el modal de registro de usuario
        setShowRegisterModal(false);
    };

    

    return (
        <div> 
        
           
            <nav bg="light" expand="lg" className="navbar">     
            <ul>
                <li>
                   <img src={imagen} width="50px" height="50px" alt="logo"  />
                </li>

                <li> 
                    <a href="/" className="btn btn-danger" id="boton"><i className="bi bi-award-fill"></i>Inicio</a>
                </li>

                
                    <Dropdown isOpen={dropdownProductos} toggle={() => setDropdownProductos(!dropdownProductos)}>
                        <DropdownToggle caret id="boton">

                            <a ><i className="bi bi-box-fill"></i> Productos</a>
                            {/*Productos*/}

                        </DropdownToggle>

                        <DropdownMenu className="custom-dropdown-menu">
                            <div className="container">
                                <div className="row">
                                    <DropdownItem header className="custom-header">&#191;Que necesitas?</DropdownItem>
                                    <DropdownItem divider className="custom-divider" />
                                    <div className="col-4">
                                        
                                        <DropdownItem className="custom-item">ASUS</DropdownItem>
                                        <DropdownItem className="custom-item">ASUS</DropdownItem>
                                        <DropdownItem className="custom-item">ASUS</DropdownItem>
                                        <DropdownItem className="custom-item">ASUS</DropdownItem>
                                        <DropdownItem className="custom-item">ASUS</DropdownItem>
                                        <DropdownItem className="custom-item">ASUS</DropdownItem>
                                    </div>
                                    <div className="col-4">
                                        <DropdownItem className="custom-item">AMD</DropdownItem>
                                        <DropdownItem className="custom-item">INTEL</DropdownItem>
                                        <DropdownItem className="custom-item">AMD</DropdownItem>
                                        <DropdownItem className="custom-item">INTEL</DropdownItem>
                                        <DropdownItem className="custom-item">AMD</DropdownItem>
                                        <DropdownItem className="custom-item">INTEL</DropdownItem>
                                    </div>
                                    <div className="col-4">
                                        <DropdownItem className="custom-item">PHP</DropdownItem>
                                        <DropdownItem className="custom-item">PHP</DropdownItem>
                                        <DropdownItem className="custom-item">PHP</DropdownItem>
                                        <DropdownItem className="custom-item">PHP</DropdownItem>
                                        <DropdownItem className="custom-item">PHP</DropdownItem>
                                        <DropdownItem className="custom-item">PHP</DropdownItem>
                                    </div>
                                </div>
                                </div>

                        </DropdownMenu>


                    </Dropdown>
                
                    
                    
               
               
                <li>
                  <a href="/Ubicacion" className="btn btn-danger" id="boton"><i className="bi bi-geo-alt-fill"></i> Ubicacion</a>
                </li>

                
                    <Dropdown isOpen={dropdownInicioSesion} toggle={() => setDropdownInicioSesion(!dropdownInicioSesion)}>
                        <DropdownToggle caret id="boton">

                            <a ><i className="bi bi-person-lines-fill "></i> Inicio de sesion</a>
                           

                        </DropdownToggle>

                        <DropdownMenu className="custom-dropdown-menu-login">
                            <div className="container">
                                <div className="row">
                                    <DropdownItem className="custom-item">Iniciar Sesion</DropdownItem>
                                    <DropdownItem className="custom-item">Registrarse</DropdownItem>
                                    
                                </div>
                            </div>

                        </DropdownMenu>


                    </Dropdown>
                  
                </ul>





            {/*<DropdownButton*/}
            {/*        id="login-dropdown"*/}
            {/*        title={<><i className="bi bi-person-lines-fill ">  </i></>}*/}
            {/*        onClick={handleSubMenuClick}*/}
            {/*        show={showSubMenu}*/}
            {/*    >*/}

            {/*        <Dropdown.Item onClick={() => setShowLoginModal(true)}>Iniciar sesión</Dropdown.Item>*/}
            {/*        <Dropdown.Item onClick={() => setShowRegisterModal(true)}>Registrarse</Dropdown.Item>*/}

                
            {/*<Modal show={showLoginModal} onHide={() => setShowLoginModal(false)}>*/}
            {/*    <Modal.Header closeButton>*/}
            {/*        <Modal.Title>Iniciar sesión</Modal.Title>*/}
            {/*    </Modal.Header>*/}
            {/*    <Modal.Body>*/}
            {/*        <Form>*/}
            {/*            <Form.Group controlId="formLoginUsername">*/}
            {/*                <Form.Label>Nombre de usuario</Form.Label>*/}
            {/*                <Form.Control*/}
            {/*                    type="text"*/}
            {/*                    placeholder="Ingrese su nombre de usuario"*/}
            {/*                    value={loginUsername}*/}
            {/*                    onChange={(e) => setLoginUsername(e.target.value)}*/}
            {/*                />*/}
            {/*            </Form.Group>*/}
            {/*            <Form.Group controlId="formLoginPassword">*/}
            {/*                <Form.Label>Contraseña</Form.Label>*/}
            {/*                <Form.Control*/}
            {/*                    type="password"*/}
            {/*                    placeholder="Ingrese su contraseña"*/}
            {/*                    value={loginPassword}*/}
            {/*                    onChange={(e) => setLoginPassword(e.target.value)}*/}
            {/*                />*/}
            {/*            </Form.Group>*/}
            {/*        </Form>*/}
            {/*    </Modal.Body>*/}
            {/*    <Modal.Footer>*/}
            {/*        <Button variant="secondary" onClick={() => setShowLoginModal(false)}>*/}
            {/*            Cerrar*/}
            {/*        </Button>*/}
            {/*        <Button variant="primary" onClick={handleLogin}>*/}
            {/*            Iniciar sesión*/}
            {/*        </Button>*/}
            {/*    </Modal.Footer>*/}
            {/*</Modal>*/}

            {/*<Modal show={showRegisterModal} onHide={() => setShowRegisterModal(false)}>*/}
            {/*    <Modal.Header closeButton>*/}
            {/*        <Modal.Title>Registrarse</Modal.Title>*/}
            {/*    </Modal.Header>*/}
            {/*    <Modal.Body>*/}
            {/*        <Form>*/}
            {/*            <Form.Group controlId="formRegisterUsername">*/}
            {/*                <Form.Label>Nombre de usuario</Form.Label>*/}
            {/*                <Form.Control*/}
            {/*                    type="text"*/}
            {/*                    placeholder="Ingrese un nombre de usuario"*/}
            {/*                    value={registerUsername}*/}
            {/*                    onChange={(e) => setRegisterUsername(e.target.value)}*/}
            {/*                />*/}
            {/*            </Form.Group>*/}
            {/*            <Form.Group controlId="formRegisterEmail">*/}
            {/*                <Form.Label>Email</Form.Label>*/}
            {/*                <Form.Control*/}
            {/*                    type="email"*/}
            {/*                    placeholder="Ingrese su correo electrónico"*/}
            {/*                    value={registerEmail}*/}
            {/*                    onChange={(e) => setRegisterEmail(e.target.value)}*/}
            {/*                />*/}
            {/*            </Form.Group>*/}
            {/*            <Form.Group controlId="formRegisterPassword">*/}
            {/*                <Form.Label>Contraseña</Form.Label>*/}
            {/*                <Form.Control*/}
            {/*                    type="password"*/}
            {/*                    placeholder="Ingrese una contraseña"*/}
            {/*                    value={registerPassword}*/}
            {/*                    onChange={(e) => setRegisterPassword(e.target.value)}*/}
            {/*                />*/}
            {/*            </Form.Group>*/}
            {/*        </Form>*/}
            {/*    </Modal.Body>*/}
            {/*    <Modal.Footer>*/}
            {/*        <Button variant="secondary" onClick={() => setShowRegisterModal(false)}>*/}
            {/*            Cerrar*/}
            {/*        </Button>*/}
            {/*        <Button variant="primary" onClick={handleRegister}>*/}
            {/*            Registrarse*/}
            {/*        </Button>*/}
            {/*    </Modal.Footer>*/}
            {/*        </Modal>*/}

            {/* </DropdownButton>*/}
           
            </nav>



            <Baner />

            

           

            <hr />
            <div className="row justify-content-center " id="pc">
                <div className="col-sm-6">

                    <br />
                    <br />
                    <div id="titulo">
                        <h1 className="row justify-content-center" >&#191;Qu&#233; partes necesitas?</h1>
                    </div>
                    <div className="row">

                        <div className="col-sm-3">

                            <PartesCom
                                titulo="Procesador"
                                parrafo="Es el cerebro de la computadora"
                                imagen={procesador}
                                enlace="#seccion-destino1"
                            />

                        </div>

                        <div className="col-sm-3">

                            <PartesCom
                                titulo="Mainboard"
                                parrafo="Es la que conecta los componentes "
                                imagen={mainboard}
                                enlace="#seccion-destino2"
                            />

                        </div>
                        <div className="col-sm-3">

                            <PartesCom
                                titulo="Memoria RAM"
                                parrafo="Es la velocidad de la computadora"
                                imagen={ram}
                                enlace="#seccion-destino3"
                            />

                        </div>
                        <div className="col-sm-3">

                            <PartesCom
                                titulo="Tarjeta de video"
                                parrafo="Mejora los graficos de la computadora"
                                imagen={tarjeta}
                                enlace="#seccion-destino4"
                            />

                        </div>
                        <div className="col-sm-3">

                            <PartesCom
                                titulo="Unidad SSD"
                                parrafo="Es la memoria principal."
                                imagen={disco}
                                enlace="#seccion-destino5"
                            />

                        </div>

                        <div className="col-sm-3">

                            <PartesCom
                                titulo="Fuente de poder"
                                parrafo="Proporciona energ&#237;a de toda tu PC."
                                imagen={fuente}
                                enlace="#seccion-destino6"
                            />

                        </div>

                        <div className="col-sm-3">

                            <PartesCom
                                titulo="Perifericos"
                                parrafo="Los controladores de tu nueva PC"
                                imagen={teclado}
                                enlace="#seccion-destino7"
                            />

                        </div>

                        <div className="col-sm-3">

                            <PartesCom
                                titulo="Pantalla"
                                parrafo="Para poder visualizar mejores calidades"
                                imagen={pantalla}
                                enlace="#seccion-destino8"
                            />

                        </div>

                    </div>



                </div>
                <div className="col-sm-4">

                    {/*<div className="card text-center bg-white mt-5"> */}
                    <div className=" text-center bg-white mt-5">
                        <h5 style={{ fontSize: '25px', color: '#ff9c00', fontFamily: 'Arial', fontWeight: 'bold' }} >&#33;Qu&#233; esperas para armar tu PC!</h5>
                        <img className="imagen" src={setup} width="500px" height="300px" />
                        <p style={{ fontSize: '18px', color: 'black', fontFamily: 'Arial', textAlign: 'justify' }}>En nuestra tienda encontrar&#225;s todo lo necesario para armar tu nueva computadora, ya sea para gaming, uso profesional o dom&#233;stico. Lo importante para nosotros es que tu nueva PC sea exactamente lo que necesitas y nuestros asesores estar&#225;n para acompa&#241;arte gui&#225;ndote para que elijas los mejores componentes.</p>

                    </div>

                </div>
            </div>

            <hr />

            <div id="final" className="justify-content-center" style={{ display: 'flex', alignItems: 'center' }}>
                <img src={logo} width="400px" height="400px" />
                <div style={{ marginLeft: '20px' }}>
                    <p style={{ fontSize: '20px', color: 'white', fontFamily: 'Arial', textAlign: 'justify', marginRight: '100px' }}>
                        En nuestra empresa nos dedicamos apasionadamente a brindarte todo lo necesario para armar la PC
                        perfecta seg&#250;n tus necesidades y preferencias. Ya sea que est&#233;s buscando una m&#225;quina potente para
                        disfrutar de los &#250;ltimos juegos, un sistema robusto para tus tareas profesionales o una computadora
                        confiable para uso dom&#233;stico, estamos aqu&#237; para ayudarte. </p>
                    <p style={{ fontSize: '20px', color: 'white', fontFamily: 'Arial', textAlign: 'justify', marginRight: '100px' }}>
                        En nuestra tienda encontrar&#225;s una amplia variedad de componentes de alta calidad, desde potentes
                        procesadores y tarjetas gr&#225;ficas de &#250;ltima generaci&#243;n hasta placas base confiables, memoria r&#225;pida
                        y unidades de almacenamiento de alto rendimiento. Trabajamos con los principales fabricantes y
                        marcas de renombre para ofrecerte una selecci&#243;n diversa y actualizada de productos. </p>

                </div>

            </div>
            <div id="final1">
                <p className="text-center" style={{ fontSize: '20px', color: 'white', fontFamily: 'Arial' }}>
                    Buscanos en nuestras redes sociales <br />
                    <i className="bi bi-whatsapp"></i> | <i className="bi bi-facebook"></i> | <i className="bi bi-instagram"></i> | <i className="bi bi-twitter"></i> | <i className="bi bi-twitch"></i> | <i className="bi bi-discord"></i><br /><br />
                    <h5 style={{ fontSize: '12px' }}>&#169; 2023 SAYAH &ndash; Tienda PC Gamer. Todos los derechos reservados </h5>
                </p>
                <br />
            </div>
            <br />

         <Outlet/>
        </div>

    );
};

export default Navbar;
