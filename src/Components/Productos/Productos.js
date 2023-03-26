// import FiltroProductos from './FiltroProductos';
// import Producto from './Producto';
import { useEffect, useState } from 'react';
// import Alert from 'react-bootstrap/Alert';
import axios from 'axios';
import ListadoProductos from './ListadoProductos';

function Productos(props) {

    // const [ano, setAno] = useState('');

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        //console.log('Se monta Productos');
        axios.get('https://my-webapp-625d3-default-rtdb.europe-west1.firebasedatabase.app/productos.json')
            .then((response) => {
                //console.log(response.data);
                let arrayProductos = [];
                for (let key in response.data) {
                    arrayProductos.push({
                        id: key,
                        nombre: response.data[key].nombre,
                        precio: response.data[key].precio,
                        fecha: new Date(response.data[key].fecha),
                        descripcion: response.data[key].descripcion,
                        imagen: response.data[key].imagen
                    })
                }
                //console.log(arrayProductos);
                setProductos(arrayProductos);
            }).catch((error)=>{
                alert('Se ha producido un error');
            })
    },[]);

    // 

    // if (productosFiltrados.length > 0) {
    //     contenido = (
    //         <div>
    //            {productos.map((elemento) => {
    //                 return (
    //                     // <Producto key={elemento.id} producto={elemento} borraProducto={props.borraProducto} />
    //                     <ListadoProductos key={elemento.id} producto={elemento} borraProducto={props.borraProducto} />
    //                 )
    //             })}
    //             {/* <h1>-----------------------------------------</h1>
    //             {productosFiltrados.map((elemento) => {
    //                 return (
    //                     <Producto key={elemento.id} producto={elemento} borraProducto={props.borraProducto} />
    //                 )
    //             })} */}
    //         </div>)
    // }
    return (
        <div>
            {productos.map((elemento) => {
                return (
                    <ListadoProductos key={elemento.id} producto={elemento} />
                )
            })}
        </div>
    //     <>
    //     <FiltroProductos updateAno={updateAno} />
    //     {contenido}
    // </>
    )
}

export default Productos;