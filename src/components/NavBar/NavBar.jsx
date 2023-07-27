import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function NavBar () {
    
    return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
          <img src="/homelogo.png" alt="logo" style={{ width: "150px", height: "50px" }}/>
            
            </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            
          </Navbar.Collapse>
        </Container>
    </Navbar>
  
    )
}

export default NavBar;