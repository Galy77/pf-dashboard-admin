import { Container, Nav } from 'react-bootstrap';
import style from "./adminBar.module.css";
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHome, faBriefcase,faListAlt   } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
  return (
    <Container fluid>
    <div className={`d-flex flex-column ${style.sidebarContainer}`}>
      <Nav defaultActiveKey="/home" className={style.textContainer}>
        <Nav.Link>
          <Link to="/home" className={style.text}>
          <FontAwesomeIcon icon={faHome} />  Página principal
          </Link>
        </Nav.Link>

        <Nav.Link>
          <Link to="/users" className={style.text}>
          <FontAwesomeIcon icon={faUser} /> Usuarios
          </Link>
        </Nav.Link>

        <Nav.Link>
          <Link to="/products" className={style.text}>
          <FontAwesomeIcon icon={faBriefcase} /> Productos
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/categories" className={style.text}>
          <FontAwesomeIcon icon={faListAlt} /> Categorias
          </Link>
        </Nav.Link>
      </Nav>
    </div>
    </Container>
  );
};

export default Sidebar;