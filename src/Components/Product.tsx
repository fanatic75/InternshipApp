import React, { useRef, useEffect } from "react";
import { CardImg } from "reactstrap";
const Product : React.FC = (props:any) => {

    const productContainerStyle : React.CSSProperties={
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        flexWrap:"wrap"

    }
    const productRef = useRef();
    useEffect(()=>{

        const handleClick=(e:{target:HTMLInputElement}) : void =>{
            const productRefNode : Node|HTMLElement|undefined|null = productRef.current;
            
            if(productRefNode!==undefined && productRefNode !==null){
                //@ts-ignore
               if(productRefNode.contains(e.target)){
                const temp = props.products.slice();
                temp.map((product:any)=>{
                    console.log(e.target.id);
                    if((product.name===props.name && product.price===props.price && typeof product.id==="string" && product.id===e.target.id )|| (typeof product.id==="number" && product.name===props.name && product.price===props.price) ){
                        
                        
                        product.selected = !product.selected;
                        props.setProducts(temp);
                    }
                })
               }
            }
        }
        document.addEventListener('click',handleClick as  ()=>  void);
        return ()=>document.removeEventListener('click',handleClick as ()=>void);
    })

    return ( 
        <div ref={productRef as any} id={props.id} style={productContainerStyle}>

            <CardImg style={{ maxWidth:"30%"}} alt={props.image.title} src={props.image.url} />
                
            <p style={{marginRight:"20%"}}>{props.name}</p>
            <h3>${props.price}</h3>
        </div>

    )
}

export default Product;
