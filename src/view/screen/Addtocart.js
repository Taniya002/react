import { useState } from "react";
import { Container,Row,Col } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom"

export default function Addtocart(){
  const loc = useLocation()
  const nav = useNavigate()
  const [qty,setUpdateQty] = useState(1)
  const [product,setProduct] = useState(loc.state)
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
        <Col  lg={8} className="">
          <h5>my cart</h5>
          
         <Col>
          <Row>
            <Col lg={6}>
              <h6> 2 Item in your cart</h6>
              <div className="addtocart-item">
               
                <div ><img src={"https://m.media-amazon.com/images/I/61vfSiIaCpL._SX679_.jpg"} alt="" className="addtocart-img"/></div>
                <div>
                  <p className="addtocart-text-name">Samsung Galaxy Book2 360 Intel 12th Gen i5 EvoTM 33.78cm (13.3) AMOLED 2 in 1 touch screen Laptop </p>
                  <p className="addtocart-text-rate">Rs.{"1,12,862/-"}<del><span>{"1,41,678/-"}
                    </span></del></p>
                </div>
              </div>
             
            </Col>
            <Col lg={3}>
            <h6>Oty</h6> 
                    <input type="button" className="detail-card2-btnadd" value="-" onClick={subqty}/>
                 <p className="qtynum">{qty}</p>
                <input type="button"className="detail-card2-btnadd" value="+"  onClick={addqty}/>
                   
            </Col>
            <Col lg={3}><h6>price</h6>
            <div>
              <p className="addtocart-text-rate">Rs.{"1,12,862/-"}<del><span>{"1,41,678/-"}
                    </span></del></p>
              </div>
            </Col>

            </Row>

            <Row>
            <Col lg={6}>
              <p></p>
              <div className="addtocart-item">
               
                <div ><img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgC2YMUA4-899eZt0uGpkkVNUHCvt5_Gr_ctcuaFC_a-nv6UQnO_wvoSP6HZaZjMOS6rc&usqp=CAU"} alt="" className="addtocart-img"/></div>
                <div>
                  <p className="addtocart-text-name">Samsung Galaxy Z Flip3 5G (Cream, 8GB RAM, 128GB Storage) </p>
                  <p className="addtocart-text-rate">Rs.{"46,695/-"}<del><span>Rs.{"95,999/-"}
                    </span></del></p>
                </div>
              </div>
             
            </Col>
            <Col lg={3}>
            <p></p> 
                    <input type="button" className="detail-card2-btnadd" value="-" onClick={subqty}/>
                 <p className="qtynum">{qty}</p>
                <input type="button"className="detail-card2-btnadd" value="+"  onClick={addqty}/>
                   
            </Col>
            <Col lg={3}>
            <div>
              <p className="addtocart-text-rate">Rs.{"45,695/-"}<del><span>{"95,999/-"}
                    </span></del></p>
              </div>
            </Col>
            </Row>
            </Col>
          <Col>Sign In </Col>

          </Col>
        <Col lg={4} className="bg-light">
          <h5>Payment Summery</h5>
          <p>Total Amount</p>
          <p>Total GST</p>
          <p>Total shipping</p>
          <p>Total Coupon Discount</p>
          <h5>Amount Payable</h5>
          <button>Sign In To Cheackout</button>
        </Col>

       </Row>
      </Container>

      
   )
  }
  
 