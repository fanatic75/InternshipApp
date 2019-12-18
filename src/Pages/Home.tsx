import React from "react";
import {Navbar, Nav , NavItem, NavLink,Container, Row,Col} from "reactstrap";

const Home : React.FC = () => {
    return (
      <> 
        <Navbar style={{}} expand = "md">
            
                <Nav className="mr-auto" navbar>
                    
                <NavItem>
              <NavLink href="/">Custom Internship Application</NavLink>
            </NavItem>
                    
                    </Nav>    

        </Navbar>

        <main>
            <Container >
            <Row >
        <Col xs="2">.col-3</Col>
        <Col xs="auto">.col-auto - variable width content</Col>
        <Col xs="2">.col-3</Col>
      </Row>


            </Container>
            </main>
    </>
    );
}

export default Home;