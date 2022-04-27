import { useSelector } from 'react-redux';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
    const items = useSelector((state) => state.cart.items);

    let cartContent = <p>No items.</p>;

    if (items.length) {
        cartContent = (
            <ul>
                {items.map((item) => (
                    <CartItem
                        key={item.id}
                        item={{
                            id: item.id,
                            title: item.title,
                            quantity: item.quantity,
                            total: item.totalPrice,
                            price: item.price,
                        }}
                    />
                ))}
            </ul>
        );
    }

    return (
        <Card className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            {cartContent}
        </Card>
    );
};

export default Cart;
