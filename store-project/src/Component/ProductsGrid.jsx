import {Link, useLoaderData} from "react-router-dom";



const ProductsGrid = ({title, image, price}) => {

    const {products} = useLoaderData();
    console.log(products);

    return (
        <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>Products grid</div>
    )
}

export default ProductsGrid