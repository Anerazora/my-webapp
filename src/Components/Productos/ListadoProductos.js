import './Producto.css';
// import FechaProducto from './FechaProducto';
import { useState, useContext } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import ProductosContext from '../../Store/ProductosContext';
// import { Link } from 'react-router-dom';
import axios from 'axios';


function ListadoProductos(props) {

    const [cantidad, setCantidad] = useState(props.producto.cantidad);
    //const contextProductos = useContext(ProductosContext);

    let nombre = props.producto.nombre;
    const precio = props.producto.precio;
    const descripcion = props.producto.descripcion;

    const clickHandler = () => {
         setCantidad(cantidad+1);
         axios.post('https://my-webapp-625d3-default-rtdb.europe-west1.firebasedatabase.app/pedidos/' + props.producto.id + '.json')
         .then((response) => {
            alert('Producto añadido');
        })
     }

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
            <div className='producto__descripcion'>
                <h2>Producto: {nombre} <p><img style={{ width: '100px' }} alt='' src={props.producto.imagen} /></p>
                    <p>Precio: {precio} € </p><p>Descripción: {descripcion}</p> </h2>
                <div className='producto__precio'>Añade o elimina producto: <div><button className="btn btn-sm btn-outline-primary" onClick={clickHandler}>+</button>
                    <button className="btn btn-sm btn-outline-primary" >-</button></div></div>
            </div>
        </div>
    )
}

export default ListadoProductos;