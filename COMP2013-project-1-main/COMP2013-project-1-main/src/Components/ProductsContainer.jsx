import ProductCard from "./ProductCard";

export default function ProductsContainer({
    products,
    productQuantity,
    setProductQuantity,
    handleAddQuantity,
    handleRemoveQuantity,
    handleAddToCart,
}) {
    return (
        <div className="ProductsContainer">
            {products.map((product) => (
                <ProductCard key={product.id}
                {...product}
                productQuantity={productQuantity.find(
                    (prod) => prod.id == product.id
                )}
                setProductQuantity={setProductQuantity}
                handleAddQuantity={handleAddQuantity}
                handleRemoveQuantity={handleRemoveQuantity}
                handleAddToCart={handleAddToCart}
                />
            ))}
        </div>
    );
}