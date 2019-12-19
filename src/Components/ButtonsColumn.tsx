import React from 'react';
import { Button } from 'reactstrap';
import { Product } from '../types/types';


const buttonContainerStyle: React.CSSProperties = {
    display: "flex",
    position: "sticky",
    top: "45%",
    flexDirection: "column",
    alignItems: "center"
}


const commonButtonStyle: React.CSSProperties = {

    borderRadius: "23px", backgroundColor: "#f8a22f",
}

const ButtonsColumns: React.FC = (props: any) => {

    const addToCart = (e: any) => {
        let isMessage = true;
        const temp = props.selectedProducts.slice();
        props.products.map((product: any) => {

            if (product.selected && props.selectedProducts.some((item:any)=>item.name===product.name)) {
              
                isMessage = false;
                alert("Product Already Added in the Cart");
               return;


            } else if(product.selected) {
                const { name,price,image }:Product=product;
                temp.push({id:Date.now(),selected:false,name,price, image});
                isMessage = false;
                console.log(temp);
                props.setSelectedProducts(temp);
            }



        });
        const tempArr = props.products.slice();
        tempArr.map((product: any) => {
            if (product.selected) {
                product.selected = false;
            }
            return product;
        });
        props.setProducts(tempArr);
        if (isMessage) {
            alert("No Products Selected")
        }
    }

    const removeFromCart = (e: any) => {
        let tempArr = [];
        if(props.selectedProducts.length===1){
            props.setSelectedProducts([]);
            return;
        }
         tempArr=props.selectedProducts.map((product:any)=>{
            
            console.log(product);
           
                if(!product.selected){
                    return product;
                }
          
            
        });
        
        tempArr = tempArr.filter(( element :any)=> {
    return element !== undefined;
 });
 props.setSelectedProducts(tempArr);
    }



    return (
        <div style={buttonContainerStyle}>
            <Button className="adjust" onClick={e => addToCart(e)} style={{ ...commonButtonStyle }} color="primary">Add to cart {`>>`}</Button>
            <Button className="adjust" onClick={e => removeFromCart(e)} disabled={props.disabled} style={{ marginTop: "60px", ...commonButtonStyle }} color="primary">{`<<`} Remove from Cart</Button>

        </div>

    );
}


export default ButtonsColumns;