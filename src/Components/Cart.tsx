import React, { useEffect } from "react";
import { Container, Card, ListGroup } from "react-bootstrap";
import Product from "./Product";
const Cart: React.FC = (props: any) => {

    const inventoryHeaderStyle: React.CSSProperties = {
        marginLeft: "auto",
        marginRight: "auto",
        fontFamily: "sans-serif",
        backgroundColor: "transparent",
        fontSize: "1.5rem",
        padding: "2.0rem 1.25rem",
        borderBottom: "none"
    }
    const calculateCost : ()=>number = () => {
        let orderTotal = 0;
        props.selectedProducts.map((product:any)=>{
            if(product.price){
                orderTotal += product.price;
            }
        });
        return  orderTotal;
    }

   
    return (

        <Container >
            <Card className={props.selectedProducts.length?"":"text-center"} style={{ minHeight:"89vh" }}>
                {
                    props.selectedProducts.length?<Card.Header style={inventoryHeaderStyle}>Your Cart</Card.Header>:null}
                {
                    props.selectedProducts.length ? <ListGroup variant="flush">
                        {
                            props.selectedProducts.map((product: any) => {
                                if (product.selected) {
                                    return <ListGroup.Item  style={{marginTop:"2%"}} key={product.id} active>
                                        {
                                            //@ts-ignore
                                            <Product id={product.id} products={props.selectedProducts} setProducts={props.setProducts} name={product.name} price={product.price} image={product.image}  />

                                        }
                                    </ListGroup.Item>

                                } else {
                                    return <ListGroup.Item   style={{marginTop:"2%"}}  key={product.id} >
                                        {
                                            //@ts-ignore
                                            <Product id={product.id} products={props.selectedProducts} setProducts={props.setProducts} name={product.name} price={product.price} image={product.image} />

                                        }
                                    </ListGroup.Item>
                                }
                            })

                        }


                    </ListGroup>:null
                }
                
                
                
                 {
                    !props.selectedProducts.length && <Card.Body style={{marginTop:'45%'}}>
                    <Card.Title>Your Cart Is Empty</Card.Title>
                    <Card.Text>
                      Select an Item and click "Add to Cart".
                    </Card.Text>
                  </Card.Body>
                }
{            props.selectedProducts.length ?        <Card.Body>

</Card.Body> : null } 
                  {props.selectedProducts.length?   <Card.Footer style={{backgroundColor:"#f8a22f"}}>Total Amount  <p style={{float:"right"}}>${calculateCost()}</p></Card.Footer> : null }
                

            </Card>
        </Container>



    )
}

export default Cart;
