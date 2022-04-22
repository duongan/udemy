import { useReducer } from 'react';
import CartContext from './cart-context.js';

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedItems = state.items.concat(action.item);
        const newTotalAmount =
            state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: newTotalAmount,
        };
    }
    if (action.type === 'REMOVE') {
    }
    return defaultCartState;
};

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(
        cartReducer,
        defaultCartState
    );

    const addItemCartHandler = (item) => {
        dispatchCartAction({ type: 'ADD', item });
    };

    const removeItemCartHandler = (id) => {
        dispatchCartAction({ type: 'REMOVE', id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemCartHandler,
        removeItem: removeItemCartHandler,
    };
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
