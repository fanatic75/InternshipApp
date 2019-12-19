import { Product } from "../types/types";

export const productsData : Product[]=[
    {
        id:1,
        image:{
            url:"download.jpg"
        },
        name:"Pizza",
        price:10,
        selected:false,
    }
,
    {
        id:2,
        image:{
            url:"icecream.webp"
        },
        name:"Icecream",
        price:3,
        selected:false
    }
    ,{
        id:3,
        image:{
            url:"burger.jpg"
        },
        name:"Burger",
        price:8,
        selected:false
    },{
        id:4,
        image:{
            url:"pasta.jpg"
        },
        name:"Pasta",
        price:12,
        selected:false
    }

]