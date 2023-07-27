import { Container } from 'react-bootstrap';
// import Sidebar from './SideBar';
import style from "./adminBar.module.css";
import Navbar from 'react-bootstrap/Navbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHome, faBriefcase,faListAlt, faPlusCircle, faRightFromBracket  } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function AdminBar ({ setAccess }) {
    const handleLogOut = () => {
        Swal.fire('¡Has cerrado sesión exitosamente!', 'Esperamos verte pronto nuevamente.', 'warning')
        setAccess(false);
    }
    return (
        <Navbar expand="lg" className={`flex-grow-1 ${style.container}`}>
      <Container className="flex-column">

          <Link to="/home" className={style.text}>
          <FontAwesomeIcon icon={faHome} /> Página principal
          </Link>
          
          <Link to="/users" className={style.text}>
          <FontAwesomeIcon icon={faUser} /> Usuarios
          </Link>
          
          <Link to="/products" className={style.text}>
          <FontAwesomeIcon icon={faBriefcase} /> Productos
          </Link>
          
          <Link to="/categories" className={style.text}>
          <FontAwesomeIcon icon={faListAlt} /> Categorias
          </Link>

          <button onClick={handleLogOut} className={style.buttonDeshabilidato}>
            <FontAwesomeIcon icon={faRightFromBracket} /> Logout
          </button>
      </Container>
    </Navbar>
    )
}

export default AdminBar;