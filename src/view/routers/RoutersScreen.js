import { Route,Routes, Link} from "react-router-dom";
import Product from "../screen/Product";
import Home from "../screen/Home";
import Login from "../screen/Login";
import Details from "../screen/Details";
import Register from "../screen/Register";
import Addtocart from "../screen/Addtocart";
import Buynow from "../screen/Buynow";


import {Navbar,Container,Nav,Form,Button,NavDropdown }from "react-bootstrap";
import { useState } from "react";
export default function RoutersScreen(){
const[user,setUser]=useState(localStorage.getItem('user'))
console.log(user);


function Profile(){
  console.log("profile");
}

function logout(){
console.log("logout");
}
    return(
    <>  
  <div>
     {/* <Link to="/"style={{padding:10}}>Home</Link>
    <Link to="/product" style={{padding:10}}>Product</Link>
   
    <Link to="/login"style={{padding:10}}>Login</Link>
    <Link to="/set"style={{padding:10}}>Set</Link>
    <Link to="/register"style={{padding:10}}>Register</Link>*/}
    <Navbar expand="lg" className="light">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="product">Product</Nav.Link>
            <Nav.Link href="register">Register</Nav.Link>
            <Nav.Link href="login">Login</Nav.Link>
           {/* <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
    </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
    </Nav.Link>*/}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    <Routes>
    <Route path="/"Component={Home}/>
    <Route path="/product" Component={Product}/>
    <Route path="/login" Component={Login}/>
    <Route path="/details" Component={Details}/>
    <Route path="/register" Component={Register}/>
    <Route path="/Buynow" Component={Buynow}/>
    <Route path="/addtocart" Component={Addtocart}/>

   </Routes>
   
    </>
     )
}
 