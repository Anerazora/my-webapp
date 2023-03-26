import './App.css';
import Productos from './Components/Productos/Productos';
import Header from './Components/UI/Header';
import Footer from './Components/UI/Footer';
import NuevoProducto from './Components/NuevoProducto/NuevoProducto';
import { useState } from 'react';
import AutContext from './Store/AutContext';
import ProductosContext from './Store/ProductosContext';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Carrito from './Pages/Carrito';
import Contact from './Pages/Contact';
import ErrorPage from './Pages/ErrorPage';
import DetalleProducto from './Components/Productos/DetalleProducto';
import EditarProducto from './Components/EditarProducto/EditarProducto';
import GestorProductos from './Components/Productos/GestorProductos';

function App() {

  const [login, setLogin] = useState(false);
  const [language, setLanguage] = useState('en-EN');

  const [productos, setProductos] = useState(
    [
      {
        id: Math.random().toString(),
        nombre: 'Ratón óptico 1',
        precio: 15.50,
        // fecha: new Date(2023, 2, 2)
      },
      {
        id: Math.random().toString(),
        nombre: 'Ratón óptico 2',
        precio: 25.50,
        // fecha: new Date(2023, 2, 2)
      },
      {
        id: Math.random().toString(),
        nombre: 'Ratón óptico 3',
        precio: 9.50,
        // fecha: new Date(2024, 2, 2)
      },
      {
        id: Math.random().toString(),
        nombre: 'Ratón óptico 4',
        precio: 10.5,
        // fecha: new Date(2024, 2, 5)
      }
    ]
  )

  const addProducto = (producto) => {
    //setProductos(productos.push(producto));
    setProductos((prevProductos) => {
      return [producto, ...prevProductos];
    });
  }

  const borraProducto = (id) => {
    let copiaProductos = [...productos];
    copiaProductos = copiaProductos.filter((elemento) => {
      return elemento.id !== id;
    })
    setProductos(copiaProductos);
  }

//Añado esto para la pagina principal
  const listProductos = <>
    <ProductosContext.Provider value={{ borraProducto: borraProducto }}>
      <Productos productos={productos} borraProducto={borraProducto} />
    </ProductosContext.Provider>
  </>
  const contenidoProductos = <>
    <ProductosContext.Provider value={{ borraProducto: borraProducto }}>
      <GestorProductos productos={productos} borraProducto={borraProducto} />
    </ProductosContext.Provider>
  </>

return (
  <div>
     <AutContext.Provider value={{ login: login, language: language }}>
        <Header />
        <Routes>
          <Route path='/' element={listProductos} />
          <Route path='/carrito' element={<Carrito/>} />
          <Route path='/products' element={contenidoProductos} />
          <Route path='/product/:id' element={<DetalleProducto/>} />
          <Route path='/product/edit/:id' element={<EditarProducto/>} />
          <Route path='/new-product' element={<NuevoProducto addProducto={addProducto} />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<ErrorPage/>} />
        </Routes>
        <Footer />
      </AutContext.Provider>
  </div>
);
}

export default App;