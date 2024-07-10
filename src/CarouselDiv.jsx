import { useState } from "react";

export default function CarouselDiv(props) {
    const img = props.img;
    const title = props.title;
    const description = props.description;
    const price = props.price;

    const [total, setTotal] = useState(0);

    function handleCompra(){
        const sumaTotal = price + total;
        setTotal(sumaTotal);
    }
    function addToCart(){
        handleCompra();
    }

    return (
        <div className="full-content">
            <img src={img} className="full-content-image" />
            <div className="flex-column-center2">
                <h2>{title}</h2>
                <p className="margin">{description}</p>
            </div>
          <button onClick={handleCompra}>Add to CART</button>   
        </div>
    )
}