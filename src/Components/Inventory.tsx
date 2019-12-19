import React from "react";
import { Container, Card, ListGroup } from "react-bootstrap";
import Product from "./Product";
const Inventory: React.FC = (props:any) => {

const inventoryHeaderStyle : React.CSSProperties = {
    marginLeft:"auto",
    marginRight:"auto",
    fontFamily:"sans-serif",
    backgroundColor:"transparent",
    fontSize:"1.5rem",
    padding:"2.0rem 1.25rem",
    borderBottom:"none"
}

    return (
        <>
            <Container >
                <Card style={{ width: '100%',minHeight:"80vh" }}>
                    <Card.Header style={inventoryHeaderStyle}>{props.cardTitle}</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item active><Product /></ListGroup.Item>
                        <ListGroup.Item><Product /></ListGroup.Item>
                        <ListGroup.Item><Product /></ListGroup.Item>
                        <ListGroup.Item><Product /></ListGroup.Item>
                       
                    </ListGroup>
                </Card>
            </Container>

        </>

    )
}

export default Inventory;
