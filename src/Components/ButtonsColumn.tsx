import React from 'react';
import { Button } from 'reactstrap';
import { Product } from '../types/types';


const buttonContainerStyle: React.CSSProperties = {
    display: "flex",
    position: "relative",
    top: "250px",
    flexDirection: "column",
    alignItems: "center"
}


const commonButtonStyle: React.CSSProperties = {

    borderRadius: "23px", backgroundColor: "#f8a22f",
}

const ButtonsColumns: React.FC = (props: any) => {

     function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      }
      
    const addToCart = (e: any) => {
        let isMessage = true;
        const temp = props.selectedProducts.slice();
        props.products.map((product: any) => {

          if(product.selected) {
                const { name,price,image }:Product=product;
                temp.push({id:uuidv4(),selected:false,name,price, image});
                isMessage = false;
                console.log(temp);
                props.setSelectedProducts(temp);
            }



        });

        //set all products back to unselected
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
            if(props.selectedProducts[0]['selected'])
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