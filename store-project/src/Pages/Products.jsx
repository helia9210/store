
import {ProductsContainer, Filters, PaginationContainer} from "../Component";
import {customFetch} from "../utils";

const url = '/products';


export const loader = async ({ request }) => {
    const response = await customFetch(url);
    const products = response.data.date;
    const meta = response.data.meta;
    return{products, meta}
}

const Products = () => {
    return (
        <>
            <Filters/>
            <ProductsContainer/>
            <PaginationContainer/>
        </>
    )
}

export default Products