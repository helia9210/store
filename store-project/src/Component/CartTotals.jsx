import {useSelector} from "react-redux";

const CartTotals = () => {

    const {cartTotal, shipping, tax, orderTotal} = useSelector((state) => state.cartState);

    return(
        <div className='card bg-base-200'>
            <div className='card-body'>
                {/*SUBTOTAL*/}
                <p className='flex justify-between text-sm border-b border-base-300 pb-2'>
                    <span>Subtotal</span>
                    <span className='font-medium'>${cartTotal/100}</span>
                </p>
                {/*SHIPPING*/}
                <p className='flex justify-between text-sm border-b border-base-300 pb-2'>
                    <span>Shipping</span>
                    <span className='font-medium'>${shipping/100}</span>
                </p>
                {/*TAX*/}
                <p className='flex justify-between text-sm border-b border-base-300 pb-2'>
                    <span>Tax</span>
                    <span className='font-medium'>${tax/100}</span>
                </p>
                {/*ORDERTOTAL*/}
                <p className='flex justify-between text-md mt-4'>
                    <span>Order total</span>
                    <span className='font-medium'>${orderTotal/100}</span>
                </p>
            </div>
        </div>
    )
}

export default CartTotals;