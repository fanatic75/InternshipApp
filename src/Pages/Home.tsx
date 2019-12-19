import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import ButtonsColumns from "../Components/ButtonsColumn";
import Inventory from "../Components/Inventory";
import {productsData} from "../data/products";
import Cart from "../Components/Cart";
const Home: React.FC = () => {

  const backgroundStyle = {
    backgroundColor: "#1a173e",
    minHeight: "100vh"
  }
  const [products,setProducts] = useState(productsData);
  const [selectedProducts,setSelectedProducts]=useState([]);



  return (

      <main style={backgroundStyle}>

        <Row style={{ padding: "1%", marginLeft: "0px", marginRight: "0px" }} >
          <Col >

            {
              //@ts-ignore

              <Inventory products={products} setSelectedProduct={setSelectedProducts} setProducts ={setProducts} selectedProducts={selectedProducts} cardTitle="Available Options" />
            }
          </Col>

          <Col xs="2">
            {
              //@ts-ignore

                <ButtonsColumns products={products} setSelectedProducts={setSelectedProducts} setProducts ={setProducts} selectedProducts={selectedProducts}  disabled={selectedProducts.length?false:true} />
                
                } </Col>
          
            
          {
            //@ts-ignore
            <Col><Cart setProducts={setSelectedProducts} selectedProducts={selectedProducts} /></Col>
          }
        </Row>
      </main>
 
  );
}

export default Home;