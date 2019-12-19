import React from "react";
import { CardImg } from "reactstrap";
import  Icecream from  "./icecream.webp";
const Product : React.FC = (props) => {

    const productContainerStyle : React.CSSProperties={
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        flexWrap:"wrap"

    }


    return ( 
        <div style={productContainerStyle}>

            <CardImg style={{ maxWidth:"30%"}} src={Icecream} alt="Ice cream"/>
            <p style={{marginRight:"20%"}}>Icecream</p>
            <h3>$3.33</h3>
        </div>

    )
}

export default Product;
