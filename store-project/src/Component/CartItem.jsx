import {removeItem, editItem} from "../features/cartSlice.js";
import {useDispatch} from "react-redux";
import {generateAmountOptions} from "../utils/index.jsx";

const CartItem = ({cartItem}) => {

    const dispatch = useDispatch();

    const removeItemsFromTheCart = () => {
        dispatch(removeItem({cartID}))
    }

    const handleAmount = (e) => {
        dispatch(editItem({cartID, amount:parseInt(e.target.value)}));
    }

    const {cartID, title, price, image, amount, company, productColor} = cartItem;
    return(
        <article key={cartID} className='mb-12 flex flex-col gap-y-4 sm:flex-row
        flex-wrap border-b border-base-300 pb-6 last:border-b-0' >
            <img src={image} alt={title} className='h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover'/>
            <div className='sm:ml-4 sm:w-48'>
                {/*TITLE*/}
                <h3 className='capitalize font-medium'>{title}</h3>
                {/*COMPANY*/}
                <h4 className='capitalize text-sm text-neutral-content mt-2'>{company}</h4>
                {/*COLOR*/}
                <p className='mt-4 text-sm capitalize flex items-center gap-x-2'>
                    color:
                    <span className='badge badge-sm'
                          style={{backgroundColor:productColor}}>
                    </span>
                </p>
            </div>
                <div>
                    {/*AMOUNT*/}
                    <div className='form-control max-w-xs'>
                        <label htmlFor='amount' className='label p-0'>
                            <span className='label-text'>Amount</span>
                        </label>
                        <select name='amount'
                                id='amount'
                                className='mt-2 select select-bordered select-base select-xs'
                                value={amount}
                                onChange={handleAmount}
                        >
                            {generateAmountOptions(amount + 5)}
                        </select>
                    </div>
                    {/*REMOVE*/}
                    <button
                        className='mt-2 link link-primary link-hover text-sm'
                        onClick={removeItemsFromTheCart}
                    >
                        remove
                    </button>
                </div>

                {/*PRICE*/}
                <p className='font-medium sm:ml-auto'>$ {price/100}</p>
        </article>
    )
}

export default CartItem;