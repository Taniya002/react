/*import{ Row , Col,Container,} from"react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Register(){
    const nav=usenavigate()
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    function registerUser(){
        console.log(name);
        console.log(email);
        console.log(password);
        nav("/login")
    }
    return(

    )
    }*/
    import {Container,Col,Row,Form,Button} from 'react-bootstrap';
    import { useState } from "react";
import { useNavigate } from 'react-router-dom';
  
    export default function Register(){
        const nav = useNavigate()
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
      function  registerUser(){
        console.log(email);
        console.log(password);
        nav("/login")
        }
        return(
            <Container>
                <Row>
                    <Col>
                    <div className="register-div">
                        <h1>register</h1>
                       
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={d=> setEmail(d.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={d=> setPassword(d.target.value)} />
      </Form.Group>
     
      <Button variant="primary" type="button" onClick={registerUser}>
        Submit
      </Button>
    </Form>
                    </div>
                    </Col>
                </Row>
            </Container>
        )
    }