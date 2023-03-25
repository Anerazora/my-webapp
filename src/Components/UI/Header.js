import './Header.css';
import AutContext from '../../Store/AutContext';
import { useContext } from 'react';

function Header() {

    const contextAut = useContext(AutContext);

    return (
        <div className='header'>
            <h2>LISTADO DE PRODUCTOS</h2>
            <p>Con nombre, imagen, fecha y precio</p>
            {contextAut.login && <p>Hola USUARIO</p>}
        </div>
    )
}

export default Header;