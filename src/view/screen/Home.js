import { Col, Container, Row,Carousel ,Navbar,Nav,NavDropdown} from "react-bootstrap";
import{product,proimage,setProImage,productimage,setProduct}from '../data/Data';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Home(){

  const nav= useNavigate()
  const[product1,setProduct,]=useState(product);
    
    function updateProduct(){
     /* var img=[]
      setProImage(img);*/
     }
     function productshow(){
     /* console.log(product);
      setProImage(proimage.filter(d=>d.name===product))
      setProduct("");*/
     }
  return(
    <Container>
   {/*   <Row>
        <Col lg={3} className='bg-primary'>
        <h1>col1</h1>
        </Col>
        <Col lg={6}>
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        </Col>
        <Col lg={3} className='bg-danger'>
        <h1>col3</h1>
        </Col>
        </Row>
        <Row>
        <Col>
        
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://drscdn.500px.org/photo/87116431/m%3D900/v2?sig=17b221a30d79907936d44a914f4c579abf93d8d739380c0b89481921c250c1b7"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/originals/ae/1b/f2/ae1bf25ee4ec8fc25b0c695fe07486e4.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </Col>
  */}

<Row>
  <Row>
      {
        
        product1&&product1.map(d=>(
          <Col>
          
          <div style={{width:200,height:300,margin:20}} onClick={()=>nav('/details' ,{state:d})}>
          <img
          className="d-block w-100"
          src={d.img}
          alt="Third slide"
        />
        </div>
          </Col>
        ))
      }
     </Row>
     </Row>
      </Container>
      
  )
}