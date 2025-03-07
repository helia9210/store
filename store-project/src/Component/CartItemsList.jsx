import {useSelector} from "react-redux";
import CartItem from "./CartItem.jsx";

const CartItemsList = () => {

    const {cartItems} = useSelector((state) => state.cartState);

    return(
        <>
            {cartItems.map((item) => {
                return <CartItem key={item.cartID} cartItem={item}/>
            })}
        </>
    )
}

export default CartItemsList;