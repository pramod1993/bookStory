import React, { Component } from 'react'
import {Nav, Container, Navbar} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  } from "react-router-dom";
  import Home from './Home';
  import About from './About';
  import Product from './Product';
  import Shop from './Shop';
  import Blog from './Blog';
  import Faq from './Faq';
  import Contact from './Contact';
  import Register from './Register';
  import logo from '../img/multimedia-logo.svg'



export default class NavbarNav extends Component {
  render() {
    return (
        <>
        <Router>
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand to="/" style={{width:'13%',}}><img src={logo}  style={{width:'100%',}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav>
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/about'>About Us</Nav.Link>
            <Nav.Link as={Link} to='/product'>Product Author</Nav.Link>
            <Nav.Link as={Link} to='/shop'>Shop</Nav.Link>
            <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
            <Nav.Link as={Link} to='/faq'>Faq</Nav.Link>
            <Nav.Link as={Link} to='/contact'>Contact Us</Nav.Link>
            <Nav.Link as={Link} to='/register' style={{background:'#1f427c', color: '#fff',}}>Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
    </Router>
      </>
    )
  }
}
