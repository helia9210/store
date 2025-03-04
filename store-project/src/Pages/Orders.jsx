import {redirect, useLoaderData} from "react-router-dom";
import {toast} from "react-toastify";
import {customFetch} from "../utils/index.jsx";
import {OrdersList, PaginationContainer, SectionTitle} from "../Component/index.js";

export const loader = (store) => async ({request}) => {

    const user = store.getState().userState.user;

    if (!user){
        toast.warn(' You need to login to view this page');
        return redirect('/login');
    }

    const params = Object.fromEntries([
        ...new URL(request.url).searchParams.entries()
    ]);
    try {
        const response = await customFetch('https://strapi-store-server.onrender.com/api/orders', {
            params, headers:{
                Authorization: `Bearer ${user.token}`,
            },

        })
        return {orders: response.data.data, meta: response.data.meta}
    } catch (error){
        const errorMessage = error?.response?.data?.error?.message || 'there was an error placing your order';
        toast.error(errorMessage);
        if (error.response.status === 400 || 403) return redirect('/login');
        return null

    }
}

const Orders = () => {

    const {meta} = useLoaderData();
    if (meta.pagination.total < 1){
        return <SectionTitle text='please make an order'/>
    }
    return <>
        <SectionTitle text='Your Orders'/>
        <OrdersList/>
        <PaginationContainer/>
    </>
}

export default Orders