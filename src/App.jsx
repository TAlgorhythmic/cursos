import { Navbar, Nav, Container } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";
import './App.css'

function App() {

  return (
    <>
       <Navbar className='navigator' bg="light" expand="lg">
        <Container>
          <Link to="/" className="navbar-brand">Cursos</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/about" className='nav-link'></Link>
              <Link to="/create" className='nav-link'>New curso</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Outlet />
      </Container>
    </>
  )
}

export default App;