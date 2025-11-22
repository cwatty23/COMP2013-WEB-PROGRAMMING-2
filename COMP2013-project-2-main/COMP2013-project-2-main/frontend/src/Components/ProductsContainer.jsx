import ProductCard from "./ProductCard";

export default function ProductsContainer({
  products = [],
  handleAddQuantity,
  handleRemoveQuantity,
  handleAddToCart,
  productQuantity,
  handleOnDelete,
  handleOnEdit,
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
          handleOnDelete={handleOnDelete}
          handleOnEdit={handleOnEdit}
        />
      ))}
    </div>
  );
}
