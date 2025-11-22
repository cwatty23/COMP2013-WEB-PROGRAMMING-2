export default function ContactForm({
    productName,
    brand,
    price,
    image,
    handleOnSubmit,
    handleOnChange,
}) {
return (
    <div className="ProductForm">
        <form onSubmit={handleOnSubmit}>
            <label htmlFor="productName">Add a Product: </label>
            <input type="text" name="productName" id="productName" value={productName} onChange={handleOnChange} placeholder="Product Name"/>
            <br />
            <label htmlFor="brand"> </label>
            <input type="brand" name="brand" id="brand" value={brand} onChange={handleOnChange} placeholder="Brand"/>
            <br />
            <label htmlFor="image"> </label>
            <input type="text" name="image" id="image" value={image} onChange={handleOnChange} placeholder="Image URL" />
            <br />
            <label htmlFor="price"> </label>
            <input type="number" name="price" id="price" value={price} onChange={handleOnChange} placeholder="Price" />
            <br />
            <button>Submit</button>
        </form>
    </div>
)
}