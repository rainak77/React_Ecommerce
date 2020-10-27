
export const addItemToCart = (cartItems, carItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem =>
        (cartItem.id === carItemToAdd.id));

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === carItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }
    return [...cartItems, { ...carItemToAdd, quantity: 1 }];
};