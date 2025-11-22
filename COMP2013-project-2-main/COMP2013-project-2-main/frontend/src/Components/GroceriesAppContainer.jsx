import { useState, useEffect } from "react";
import axios from "axios";
import CartContainer from "./CartContainer";
import ProductsContainer from "./ProductsContainer";
import NavBar from "./NavBar";
import ProductForm from "./ProductForm";

export default function GroceriesAppContainer() {
  //States
  const [productQuantity, setProductQuantity] = useState({}); //This should start empty as productsData will not be filled yet
  const [productsData, setProductsData] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [formData, setFormData] = useState({
    productName: "",
    brand: "",
    image: "",
    price: 0,
  })
  const [postResponse,setPostResponse] = useState("");

  //useEffect
  useEffect(() => {
    handleProductsDB();
  }, [postResponse]);


  //Handlers
  const handleProductsDB = async () => {
    try {
      const response = await axios.get("http://localhost:3000/products");
      console.log(response.data);
      setProductsData(response.data);
      setProductQuantity(
        response.data.map((productItem) => ({
          id: productItem.id,
          quantity: 0,
        })) //you need to fill productQuantity after you get the products from the DB
      );
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleAddQuantity = (productId, mode) => {
    if (mode === "cart") {
      const newCartList = cartList.map((product) => {
        if (product.id === productId) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
      setCartList(newCartList);
      return;
    } else if (mode === "product") {
      const newProductQuantity = productQuantity.map((product) => {
        if (product.id === productId) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
      setProductQuantity(newProductQuantity);
      return;
    }
  };

  const handleRemoveQuantity = (productId, mode) => {
    if (mode === "cart") {
      const newCartList = cartList.map((product) => {
        if (product.id === productId && product.quantity > 1) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      });
      setCartList(newCartList);
      return;
    } else if (mode === "product") {
      const newProductQuantity = productQuantity.map((product) => {
        if (product.id === productId && product.quantity > 0) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      });
      setProductQuantity(newProductQuantity);
      return;
    }
  };

  const handleAddToCart = (productId) => {
    const product = productsData.find((product) => product.id === productId);
    const pQuantity = productQuantity.find(
      (product) => product.id === productId
    );
    const newCartList = [...cartList];
    const productInCart = newCartList.find(
      (product) => product.id === productId
    );
    if (productInCart) {
      productInCart.quantity += pQuantity.quantity;
    } else if (pQuantity.quantity === 0) {
      alert(`Please select quantity for ${product.productName}`);
    } else {
      newCartList.push({ ...product, quantity: pQuantity.quantity });
    }
    setCartList(newCartList);
  };

  const handleRemoveFromCart = (productId) => {
    const newCartList = cartList.filter((product) => product.id !== productId);
    setCartList(newCartList);
  };

  const handleClearCart = () => {
    setCartList([]);
  };

  //Handle the submission
  const handleOnSubmit = async () => {
    try{
      await axios.post("hhtp://localhost300/products", formData).then((response) => console.log(response));
    } catch(error) {
      console.log(error.message);
    }
  };

  //Handle the onchange
  const handleOnChange = (evt) => {
    setFormData((prevData) => {
      return {...prevData, [evt.target.name]: evt.target.value}
    })
  };

  //handle on delete
  const handleOnDelete = async (id) => {
    try{
      const response = await axios.delete(`http://localhost:3000/${id}`);
      setPostResponse(response.data.message);
    } catch(error) {
      console.log(error.message)
    }
  }

  //Handle the edition of one contact
  const handleOnEdit = async(id) => {
    try{
      const productToEdit = await axios.get(
        `http://localhost:3000/products/${id}`
      );
      setFormData({
        productName: productToEdit.data.productName,
        brand: productToEdit.data.productName,
        image: productToEdit.data.image,
        price: productToEdit.data.price
      })
    } catch(error){
      console.log(error);
    }
  }

  return (
    <div>
      <NavBar quantity={cartList.length} />
      <div className="GroceriesApp-Container">
        <ProductsContainer
          products={productsData}
          handleAddQuantity={handleAddQuantity}
          handleRemoveQuantity={handleRemoveQuantity}
          handleAddToCart={handleAddToCart}
          productQuantity={productQuantity}
          handleOnDelete={handleOnDelete}
          handleOnChange={handleOnChange}
          handleOnEdit={handleOnEdit}
        />
        <CartContainer
          cartList={cartList}
          handleRemoveFromCart={handleRemoveFromCart}
          handleAddQuantity={handleAddQuantity}
          handleRemoveQuantity={handleRemoveQuantity}
          handleClearCart={handleClearCart}
        />
        <ProductForm productName={formData.productName} brand={formData.brand} 
        image={formData.image} price={formData.price}
        handleOnSubmit={handleOnSubmit}
        handleOnChange={handleOnChange}/>
      </div>
    </div>
  );
}
