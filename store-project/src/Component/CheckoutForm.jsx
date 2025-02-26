import {Form, redirect} from "react-router-dom";
import FormInput from "./FormInput.jsx";
import SubmitBtn from "./SubmitBtn.jsx";
import {customFetch, formatPrice} from "../utils/index.jsx";
import {toast} from "react-toastify";
import {clearCart} from "../features/cartSlice.js";


export const action = (store) => async ({request}) => {
    const formData = await request.formData();
    const {name, address} = Object.fromEntries(formData);
    const user = store.getState().userState.user;
    const {cartItems, numItemsInCart, orderTotal} = store.getState().cartState;

    const info = {
        name,
        address,
        chargeTotal: orderTotal,
        orderTotal: formatPrice(orderTotal),
        cartItems,
        numItemsInCart,
    };
    try {
        const response = await customFetch.post(
            'https://strapi-store-server.onrender.com/api/orders',
            {data:info},
            {
            headers:{
                Authorization: `Bearer ${user.token}`,
            },
        }
        );
        store.dispatch(clearCart());
        toast.success('Order placed successfully');
        return redirect('/orders');
    }catch (error){
        const errorMessage = error?.response?.data?.error?.message || 'there was an error placing your order';
        toast.error(errorMessage)
    }

    return null;
}

const CheckoutForm = () => {
    return(
        <Form method='POST' className='flex flex-col gap-y-4'>
            <h4 className='font-medium text-xl capitalize'>shipping information</h4>
            <FormInput type='text' label='first name' name='name'/>
            <FormInput type='text' label='address' name='address'/>
            <div className='mt-4'>
                <SubmitBtn text='place your order'/>
            </div>
        </Form>
    )
}
export default CheckoutForm;