import './Producto.css';
// import FechaProducto from './FechaProducto';
import { useState, useContext } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import ProductosContext from '../../Store/ProductosContext';
// import { Link } from 'react-router-dom';
// import axios from 'axios';


function ListadoProductos(props) {

    // const [nombre, setNombre] = useState(props.producto.nombre);
    //const contextProductos = useContext(ProductosContext);

    let nombre = props.producto.nombre;
    // const fecha = props.producto.fecha;
    const precio = props.producto.precio;
    const descripcion = props.producto.descripcion;

    // const clickHandler = () => {
    //     setNombre('Nuevo nombre');
    // }

    // const borraHandler = () => {
    //     props.borraProducto(props.producto.id);
    //     axios.delete('https://my-webapp-625d3-default-rtdb.europe-west1.firebasedatabase.app/productos/' + props.producto.id + '.json')
    //         .then((response) => {
    //             alert('Producto borrado');
    //         })
    // }


    // const borraHandlerContext = () => {
    //     contextProductos.borraProducto(props.producto.id)
    // }

    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    return (
        <div className='producto'>
            {/* <FechaProducto fecha={props.producto.fecha} /> */}
            <div className='producto__descripcion'>
                <h2>Producto: {nombre} <img style={{ width: '100px' }} alt='' src={props.producto.imagen} />
                    {/* <button className="btn btn-sm btn-outline-primary" >+</button>
                    <button className="btn btn-sm btn-outline-primary" >-</button> */}
                    <p>Precio: {precio} € </p><p>Descripción: {descripcion}</p> </h2>
                {/* <Button variant="outline-warning"><Link to={`/product/${props.producto.id}?format=extended`}>Ver detalles</Link></Button></h2> */}
                {/* <div className='producto__precio'>{precio}</div> */}

                <div className='producto__precio'>Añade o elimina producto: <div><button className="btn btn-sm btn-outline-primary" >+</button>
                    <button className="btn btn-sm btn-outline-primary" >-</button></div></div>
            </div>
            {/* <Button onClick={clickHandler}>Cambia nombre</Button>
            <Button variant="warning" onClick={handleShow}>
                Ver detalles
            </Button> */}
            {/* <Button variant="danger" onClick={borraHandler} >BORRAR</Button> */}
            {/* <Button variant="danger" onClick={borraHandlerContext} >BORRAR2</Button> */}

            {/* <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{nombre}</Modal.Title>
                </Modal.Header>
                <Modal.Body>DETALLES DE MI PRODUCTO: {nombre} Precio: {precio}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal> */}
        </div>
    )
}

export default ListadoProductos;