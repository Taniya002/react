
import { useState } from "react";
import{Button, Col,Container,Row,Table} from"react-bootstrap";
import {useLocation, useNavigate}from"react-router-dom";
//import img1 from '/.view/img/download.jpeg';
export default function Product(){
    const loc=useLocation()
    const nav=useNavigate()
    const [qty,setUpdateQty] = useState(1)
    const[product,setProduct]=useState(loc.state)
    console.log(product);
    function addqty(){
    
        if(qty>0){
         var a=qty+1
            setUpdateQty(a)
          }
      }
      
      function subqty(){
    
        if(qty>1){
          var a=qty-1
            setUpdateQty(a)
          }
      }
    return(

        <Container>
            <Row>
                <Col lg={5} >
                <div className="detail-img">
                    <img src={"https://m.media-amazon.com/images/I/61vfSiIaCpL._SX679_.jpg"} alt=""/>
</div>
                <div className="detail-img1">
                <div className="detail-img1-1">
                <img src={"https://m.media-amazon.com/images/I/610oPFpPeYL._SX679_.jpg"} alt={""} />
                    </div>
                    <div className="detail-img1-1">
                    <img src={"https://m.media-amazon.com/images/I/71ef1yicMJL._SX679_.jpg"} alt={""}/>
                    </div>
                    <div className="detail-img1-1">
                    <img src={"https://m.media-amazon.com/images/I/71BmeOvHx1L._SX679_.jpg"} alt={""}/>
                    </div>
                    <div className="detail-img1-1">
                    <img src={"https://m.media-amazon.com/images/I/61SJ91F81WL._SX679_.jpg"}alt={""}/>
                    </div>
                    </div>
                </Col>
                <Col lg={4} >
                <div className="detail-text">
                <div className="detail-text1">
                <h5>{"Samsung Galaxy Book2 360 Intel 12th Gen i5 EvoTM 33.78cm (13.3) AMOLED 2 in 1 touch screen Laptop 16 GB/512 GB SSD/Windows 11/MS Office/Backlit KB/Fingerprint Sensor/Graphite/1.16Kg NP730QED-KA2IN"}</h5>
                    </div>
                    <div className="detail-text2">
                    <p>Rs.{"1,12,862/-"}<del><span>Rs.{"1,41,678/-"}
                    </span></del></p>
                    </div>
                    
                    <div className="detail-text4">
                    <Table striped>
     {/* <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
    </thead>*/}
      <tbody>
        <tr>
          <td>Brand</td>
          <td>samsung</td>
         
        </tr>
        <tr>
          <td>screen size</td>
          <td>13.3 inches</td>
          
        </tr>
         <tr>
          <td>CPU Model</td>
          <td>core i5</td>
          
        </tr>
         <tr>
          <td>color</td>
          <td>Graphite</td>
          
        </tr>
         <tr>
          <td>Operating System</td>
          <td>Windows 11 Home</td>
          
        </tr>
        <tr>
            <td>Hard Disk Size</td>
            <td>256 GB</td>
        </tr>
      
      </tbody>
    </Table>
                    </div>
                    </div>
                   
                </Col>
                <Col lg={3} >
                    <div className="details-cart">
                <div className="detail-cart1">
                <p>Rs.{"1,12,862/-"}<del><span>Rs.{"1,41,678/-"}
                    </span></del></p>
                    </div>
                    <div>
                    <p> update qty:</p> 
                    <input type="button" className="detail-card2-btnadd" value="-" onClick={subqty}/>
                 <p className="qtynum">{qty}</p>
                <input type="button"className="detail-card2-btnadd" value="+"  onClick={addqty}/>
                    </div>
                    <div className="detail-cart3">
                    <Button onClick={()=>nav("/addtocart")}>Add to cart</Button>
                    </div>
                    <div className="detail-cart4">
                    <Button onClick={()=>nav("/buynow")}>Buy now</Button>
                    </div>
                    
                    </div>
                </Col>

            </Row>
        </Container>
            
    )
}
       
   