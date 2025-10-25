import CartCard from "./CartCard"

export default function CartContainer({cart, handleRemoveAllItems, 
    handleRemoveItem, 
    handleCartIncrementation, 
    handleCartSubtratraction,
    handleProductTotal,
    handleCartTotal,
    }){

    const cartIsEmpty = cart.length === 0;
    if(cartIsEmpty){  
        return (
            <div className="CartContainer">
                 <h3>Cart Items: 0</h3>
                <p>No items in cart.</p>
            </div>
        );
  }
    return (
        <div className="CartContainer">
            <h3>Cart Items: {cart.length}</h3>
            {cart.map((item) => (<CartCard key={item.id} {...item} 
            handleRemoveItem={handleRemoveItem} 
            handleCartIncrementation={handleCartIncrementation}
            handleCartSubtratraction={handleCartSubtratraction}
            handleCartTotal={handleCartTotal}
            />))}
            <button className="RemoveButton" onClick={handleRemoveAllItems}>Empty Cart</button>
            <button id="BuyButton" type="button">Checkout: </button>
        </div>
    )
}