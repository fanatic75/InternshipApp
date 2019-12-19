import React from 'react';
import { Button } from 'reactstrap';


const buttonContainerStyle:React.CSSProperties={
    display:"flex",
    position:"sticky",
    top:"45%",
    flexDirection:"column",
    alignItems:"center"    
}

const commonButtonStyle:React.CSSProperties={

  borderRadius:"23px",backgroundColor:"#f8a22f",
}

const ButtonsColumns: React.FC = () => {
    return (
        <div style={buttonContainerStyle}>
            <Button className="adjust"  style={{...commonButtonStyle}}  color="primary">Add to cart {`>>`}</Button>
        <Button className="adjust" disabled={true} style={{marginTop:"60px",...commonButtonStyle}}  color="primary">{`<<`} Remove from Cart</Button>
            
        </div>
        
    );
}


export default ButtonsColumns;