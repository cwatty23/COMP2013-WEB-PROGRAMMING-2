import { useState } from "react";
import NavBar from "./NavBar";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";

export default function GroceriesAppContainer({data}){
    const [productQuantity, setProductQuantity] = useState (
       data.map((prod) => {
        return{
            id: prod.id,
            quantity: 0
        };
       })
    );

    const [cart, setCart] = useState([]);

    const handleAddQuantity = (id, mode) => {
        const newProductQuantity = productQuantity.map((prod) => {
            if (prod.id === id){
                return {...prod, quantity: prod.quantity + 1}
            }
            return prod;
        });

        setProductQuantity(newProductQuantity);
        return;
    }
    
        const handleRemoveQuantity = (id, mode) => {
        const newProductQuantity = productQuantity.map((prod) => {
            if (prod.id === id){
                return {...prod, quantity: prod.quantity - 1}
            }
            return prod;
        });

        setProductQuantity(newProductQuantity);
        return;
    }

    const handleAddToCart = (productToAdd) =>{
        const currentProduct = data.find((prod) => prod.id === productToAdd.id)
        const productInCart = cart.find((item) => item.id === productToAdd.id)
        if(productToAdd.quantity === 0){
            alert("Please add a Quantity.")
            return;
        }
        if(!productInCart){
            setCart((prevCart) => {
                return [...prevCart, {...currentProduct, quantity: productToAdd.quantity, price: productToAdd.price}]
            })
        }
        else{
            productInCart.quantity += productToAdd.quantity;

            setCart([...cart]);
        }
    }

    const handleRemoveAllItems = () => {
        setCart([]);
    }

    const handleRemoveItem = (cartItem) => {
        const filteredCart = cart.filter((item) => item.id !== cartItem.id);
        setCart(filteredCart);
    }

    const removeDollarSign = (price) => {
        return parseFloat(price);
    }
    const handleProductTotal = (price, quantity) => {
        const productPrice = parseFloat(price);
        const productQuantity = quantity;
        return productPrice * productQuantity;
    }

    const handleCartTotal = (items) => {
        let cartTotal = 0;
        items.forEach((item) => {
            cartTotal += (parseFloat(item.price) * (item.quantity));
        })
        return cartTotal;
    }

       const handleCartIncrementation = (id) => {
        setCart((prevCart) => {
            return prevCart.map((prod) => {
                if(prod.id === id) {
                    return {...prod, quantity: prod.quantity + 1}
                }
                return prod;
            })
        })
    }
         const handleCartSubtratraction = (id) => {
        setCart((prevCart) => {
            return prevCart.map((prod) => {
                if(prod.id === id) {
                    return {...prod, quantity: prod.quantity - 1}
                }
                return prod;
            })
        })
    }


    return (
        <div>
            <NavBar />
            <div className="GroceriesApp-Container">
            <ProductsContainer products={data} 
            productQuantity={productQuantity}
            handleAddQuantity={handleAddQuantity}
            handleRemoveQuantity={handleRemoveQuantity}
            handleAddToCart={handleAddToCart}
            />
            <CartContainer 
            cart={cart} 
            handleRemoveAllItems={handleRemoveAllItems}
            handleRemoveItem={handleRemoveItem}
            handleCartIncrementation={handleCartIncrementation}
            handleCartSubtratraction={handleCartSubtratraction}
            handleProductTotal={handleProductTotal}
            handleCartTotal={handleCartTotal}
            />
            </div>
        </div>
    );
}