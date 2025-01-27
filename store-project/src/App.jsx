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

/*actions */

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
            },
            {
                path:'orders',
                element: <Orders/>,
            },
        ]
    },
    {
        path:'/login',
        element: <Login/>,
        errorElement: <Error/>,
    },
    {
        path:'/register',
        element: <Register/>,
        errorElement: <Error/>,
    },

]);

const App = () => {
    return <RouterProvider router={router}/>
};
export default App;