import React, { useState } from "react";
import { Row, Col  } from "reactstrap";
import ButtonsColumns from "../Components/ButtonsColumn";
import Inventory from "../Components/Inventory";
import { productsData } from "../data/products";
import Cart from "../Components/Cart";
import {ReactComponent as Instagram} from "../data/instagram.svg";
import {ReactComponent as Twitter} from "../data/twitter.svg";
import {ReactComponent as Wavy} from "../data/wavy.svg";


import {ReactComponent as Scroll} from "../data/scroll.svg";
const Home: React.FC = () => { 

  const backgroundStyle = {
    minHeight: "100vh",
    maxWidth: "100vw"
  }
  const [products, setProducts] = useState(productsData);
  const [selectedProducts, setSelectedProducts] = useState([]);



  return (
    <>
     
      <main style={backgroundStyle}>
        <div style={{height:"95.8vh"}} >
    
        <section className="wavy">
      
    
            <Wavy  />
          </section>
          <header className="header-container">
              <div><a style={{color:'black',}} href="#"><h3>FOOD. <span style={{color:"#f8a22f"}}>LOGO</span></h3></a></div>
              <nav style={{width:"60%"}}>
                <ul className="nav-list-container" >
                  <li className="decoration navItem"><a >ABOUT</a></li>
                  <li className="decoration navItem"><a >OUR FOOOD</a></li>
                  <li className="decoration navItem"><a >PLANS</a></li>
                  <li className="customNav navItem" ><a style={{color:"white"}}>Contact US</a></li>
                </ul>
              </nav>

          </header>
         
          <div className="content-container">
              <h1>Have no time</h1>
              <h1>to prepare <span style={{color:"#f8a22f"}}>food</span>? </h1>
              <p style={{color:"grey"}}>Choose one of our plans,entire delivery time<br/> and enjoy delicious food without leaving your home!</p>
              <div className="customNav">Order Food</div>
              <div className="social-media-logo-container">
                <Twitter />
                <Instagram />
                <Instagram />
              </div>
          </div>
          <div className="scroll-container">
              <Scroll />
          </div>
        </div>
        <Row style={{ 
    backgroundColor: "#1a173e",padding: "1%", marginLeft: "0px", marginRight: "0px" }} >
          <Col >

            {
              //@ts-ignore

              <Inventory products={products} setSelectedProduct={setSelectedProducts} setProducts={setProducts} selectedProducts={selectedProducts} cardTitle="Available Options" />
            }
          </Col>

          <Col xs="2">
            {
              //@ts-ignore

              <ButtonsColumns products={products} setSelectedProducts={setSelectedProducts} setProducts={setProducts} selectedProducts={selectedProducts} disabled={selectedProducts.length ? false : true} />

            } </Col>


          {
            //@ts-ignore
            <Col><Cart setProducts={setSelectedProducts} selectedProducts={selectedProducts} /></Col>
          }
        </Row>
      </main>
    </>
  );
}

export default Home;