import {RouterProvider, createBrowserRouter} from "react-router-dom";
import {
    About,
    HomeLayout,
    Landing,
    SingleProduct,
    Products,
    Cart,
    Error,
    Login,
    Register,
    Checkout,
    Orders,
} from "./Pages";

import {ErrorElement} from "./Component";

/* loaders */

import {loader as landingLoader} from './Pages/Landing.jsx';
import {loader as singleProductLoader} from './Pages/SingleProduct.jsx';
import {loader as productsLoader} from './Pages/Products.jsx';
import {loader as checkoutLoader} from './Pages/Checkout.jsx';
import {loader as ordersLoader} from './Pages/Orders.jsx';

/*actions */

import {action as registerAction}  from "./Pages/Register.jsx";
import {action as loginAction}  from "./Pages/Login.jsx";
import {action as checkoutAction}  from "./Component/CheckoutForm.jsx";
import {store} from "./store.js";

const router = createBrowserRouter([
    {
        path:'/',
        element: <HomeLayout/>,
        errorElement: <Error/>,
        children: [
            {
                index: true,
                element: <Landing/>,
                errorElement: <ErrorElement/>,
                loader: landingLoader,
            },
            {
                path:'products',
                element: <Products/>,
                errorElement: <ErrorElement/>,
                loader: productsLoader,
            },
            {
                path:'products/:id',
                element: <SingleProduct/>,
                errorElement: <ErrorElement/>,
                loader: singleProductLoader,
            },
            {
                path:'cart',
                element: <Cart/>,
            },
            {
                path:'about',
                element: <About/>,
            },
            {
                path:'checkout',
                element: <Checkout/>,
                loader: checkoutLoader(store),
                action: checkoutAction(store),
            },
            {
                path:'orders',
                element: <Orders/>,
                loader: ordersLoader(store),
            },
        ]
    },
    {
        path:'/login',
        element: <Login/>,
        errorElement: <Error/>,
        action: loginAction(store),
    },
    {
        path:'/register',
        element: <Register/>,
        errorElement: <Error/>,
        action: registerAction,
    },

]);

const App = () => {
    return <RouterProvider router={router}/>
};
export default App;