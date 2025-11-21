import ProductCard from "./ProductCard";

export default function ProductsContainer({
  products = [],
  handleAddQuantity,
  handleRemoveQuantity,
  handleAddToCart,
  productQuantity,
}) {
  return (
    <div className="ProductsContainer">
      {products.map((productItem) => (
        <ProductCard
          key={productItem.id}
          {...productItem}
          handleAddQuantity={handleAddQuantity}
          handleRemoveQuantity={handleRemoveQuantity}
          handleAddToCart={handleAddToCart}
          productQuantity={
            productQuantity.find((p) => p.id === productItem.id).quantity
          }
        />
      ))}
    </div>
  );
}
