import { Navbar, Nav, Container } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";
import './App.css'

function App() {


  return (
    <>
       <Navbar className='navigator' bg="light" expand="lg">
        <Container>
          <Link to="/" className="navbar-brand">
            <img className='adjust' src='https://cdn.discordapp.com/attachments/1242519476633866313/1258832686311542794/EduWave_4.png?ex=66897acc&is=6688294c&hm=f6315a2cf9d93720005df5d108b344ff44feea08eab877f65a41082993ede732&'/>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/create" className='nav-link'>
                <img className='adjust' src='https://i.imgur.com/kcZP3p5.png'/>
              </Link>
              <Link to="/user" className='nav-link'>
              <img className='adjust' src='https://i.imgur.com/pSQOxmw.png'/>
              
              </Link>
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