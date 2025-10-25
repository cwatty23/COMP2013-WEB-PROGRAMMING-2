import QuantityCounter from "./QuantityCounter";

export default function ProductCard({
    productName,
    image,
    brand,
    price,
    id,
    mode,
    handleAddQuantity,
    handleRemoveQuantity,
    productQuantity,
    handleAddToCart,
}){

    return (
        <div className="ProductCard">

            <h2>{productName}</h2>

            <img src={image} alt="" height="50px"/>


            <h3>{brand}</h3>

            <QuantityCounter
            id={id}
            productQuantity={productQuantity.quantity}
            handleAddQuantity={handleAddQuantity}
            handleRemoveQuantity={handleRemoveQuantity}
            mode={mode}git
            />

            <p>{price}</p>

            <button onClick={() => handleAddToCart(productQuantity)}>Add To Cart</button>
        </div>
    )

}
    