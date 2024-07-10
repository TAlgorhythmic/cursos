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
                <img className='adjust' src='https://cdn.discordapp.com/attachments/1242519476633866313/1258827022361296956/EduWave__3_-removebg-preview.png?ex=66897586&is=66882406&hm=8b878c87be86db09268ee51f2415bd6ef877e8a7ef4e3b578f0ba528c2146624&'/>
              </Link>
              <Link to="/user" className='nav-link'>
              <img className='adjust' src='https://cdn.discordapp.com/attachments/1242519476633866313/1259829253306843208/Green_and_Blue_Playful_Illustrative_Mind_Map__3_-removebg-preview.png?ex=668d1aec&is=668bc96c&hm=ca90e183f9240ecd36efdd5b7631ba73f42f9c44eb1c480e319579781dcbeb48&'/>
              
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