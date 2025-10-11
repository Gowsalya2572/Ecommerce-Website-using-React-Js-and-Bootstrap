import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function Home() {
   const navigate = useNavigate();
  return (
     <div> 
     <section id="home" className="py-5 " style={{backgroundColor:'#d5f7e6ff',width:'100%',height:'100%'}}> 
     <Container fluid> 
      <Row className="align-items-center"> 
        <Col md={6}> 
        <h1 className="fw-bold display-5"> Discover <span style={{color:'#014224'}}>Handmade</span> Treasures </h1> 
        <p className="lead mt-3"> Connect with talented artisans and explore unique handcrafted products 
          that tell a story. Every purchase supports independent creators and traditional craftsmanship. </p> 
          <div className="mt-4"> 
            <Button style={{backgroundColor:"#014224"}}  onClick={() => navigate("/products")} className="me-3"> Explore Products → </Button> 
            <Button style={{borderColor:'#014224',backgroundColor:'#d5f7e6ff',color:'#014224'}}>Become an Artisan ❤</Button> 
            </div> 
            </Col> 
            <Col md={6}> 
            <img src={require('../assets/handmade.jpg')} alt="Handmade" className="img-fluid rounded shadow" /> 
            </Col> 
            </Row> 
            </Container> 
            </section> 
            
            {/* Stats Section */} 
            <section className="py-5 text-center "> 
            <Container> 
              <Row> 
                <Col md={3}> 
                <h2 className="fw-bold" style={{color:"#014224"}}>500+</h2> 
                <p>Verified Artisans</p> </Col> <Col md={3}> 
                <h2 className="fw-bold " style={{color:"#014224"}}>2,500+</h2>
                 <p>Unique Products</p> </Col> <Col md={3}> 
                 <h2 className="fw-bold " style={{color:"#014224"}}>4.9</h2>
                  <p>Average Rating</p> </Col> <Col md={3}> 
                  <h2 className="fw-bold " style={{color:"#014224"}}>100%</h2>
                   <p>Secure Payments</p>
                    </Col>
                     </Row> 
                     </Container> 
              </section>
                     
                 {/* Categories Section */} 
                 <section className="py-5 "> 
                 <Container> 
                  <h2 className="text-center fw-bold mb-5">Explore Categories</h2> 
                  <Row> 
                    <Col md={3}> 
                    <Card className="shadow-sm border-0"> 
                      <Card.Img variant="top" src="https://images.unsplash.com/photo-1589739904080-8d58a42cc3b2?auto=format&fit=crop&w=800&q=80" /> 
                      <Card.Body className="text-center"> 
                        <Card.Title>Home Decor</Card.Title>
                         </Card.Body>
                          </Card> 
                          </Col> 
                          <Col md={3}>
                           <Card className="shadow-sm border-0"> 
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1606813902772-9a5a9f1eec61?auto=format&fit=crop&w=800&q=80" /> 
                            <Card.Body className="text-center"> 
                              <Card.Title>Fashion</Card.Title> 
                              </Card.Body> 
                              </Card> 
                              </Col> 
                              <Col md={3}>
                     <Card className="shadow-sm border-0"> 
                      <Card.Img variant="top" src="https://images.unsplash.com/photo-1607083206119-64d74d10b582?auto=format&fit=crop&w=800&q=80" /> 
                      <Card.Body className="text-center">
                         <Card.Title>Kids</Card.Title> 
                         </Card.Body> 
                         </Card> 
                         </Col>
                         <Col md={3}>
                          <Card className="shadow-sm border-0"> 
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1607083189269-bb3e9b4e1f27?auto=format&fit=crop&w=800&q=80" /> 
                            <Card.Body className="text-center"> 
                              <Card.Title>Art</Card.Title>
                               </Card.Body> 
                               </Card> </Col> 
                               </Row> 
                               </Container> 
                               </section>
                                </div>
  )
}
  
export default Home;