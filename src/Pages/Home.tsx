import React from "react";
import { Row, Col } from "reactstrap";
import ButtonsColumns from "../Components/ButtonsColumn";
import Inventory from "../Components/Inventory";
const Home: React.FC = () => {

  const backgroundStyle = {
    backgroundColor: "#1a173e",
    minHeight: "100vh"
  }



  return (
    <>



      <main style={backgroundStyle}>





        <Row style={{ padding: "1%", marginLeft: "0px", marginRight: "0px" }} >
          <Col >
    
    {
    //@ts-ignore
    
            <Inventory cardTitle="Available Options" />
    }
          </Col>

          <Col xs="2"><ButtonsColumns /> </Col>
{
         //@ts-ignore
          <Col><Inventory cardTitle="Your Cart" /></Col>
}
        </Row>


      </main>
    </>
  );
}

export default Home;