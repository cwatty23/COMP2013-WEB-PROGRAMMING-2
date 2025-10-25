import QuantityCounter from "./QuantityCounter";

export default function CartCard({
    id,
    image,
    productName,
    price,
    handleCartIncrementation,
    handleCartSubtratraction, 
    quantity,
    handleRemoveItem,
    handleProductTotal,
}){

    return  (
        <div className="CartCard">
        <img src={image} alt="" />
        <h2>{productName}</h2>
         <div className="ProductQuantityDiv">
            <div>
                <button onClick={() => handleCartIncrementation(id)}>+</button>
            </div>
            <p>{quantity}</p>
            <div>
                <button onClick={() => handleCartSubtratraction(id)}>-</button>
            </div>
        </div>
        <p>Total: ${handleProductTotal}</p>
        <button className="RemoveButton" type="button" onClick={() => {handleRemoveItem({productName, quantity, price, id})}}>Remove</button>
    </div>
    )
}