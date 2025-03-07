import ProductsGrid from "./ProductsGrid.jsx";
import ProductsList from "./ProductsList.jsx";
import {useLoaderData} from "react-router-dom";
import {useState} from "react";
import { IoGrid } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";


const ProductsContainer = () => {

    const {meta} = useLoaderData();
    const totalProducts = meta.pagination.total;

    const [layout, setLayout] = useState('grid');

    const setActiveStyles = (pattern) => {
        return `text-xl btn btn-circle btn-sm ${
            pattern === layout ? ' btn-primary text-primary-content'
                : 'btn-ghost text-based-content'
        }`;
    }
    return(
        <>
            <div className='flex justify-between items-center mt-8 border-b border-base-300 pb-5'>
                <h4 className='font-medium text-md'>
                    {totalProducts} product{totalProducts > 1 && 's'}
                </h4>
                <div className='flex gap-x-4'>
                    <button type='button' onClick={() => setLayout('grid')} className={setActiveStyles('grid')}>
                        <IoGrid/>
                    </button>
                    <button type='button' onClick={() => setLayout('list')} className={setActiveStyles('list')}>
                        <FaListUl />
                    </button>
                </div>
            </div>
            <div>
                {totalProducts === 0 ? (
                    <h5 className='text-2xl mt-8'>
                        Sorry, no products matched your search...
                    </h5>
                ): layout === 'grid' ? (
                    <ProductsGrid/>
                )  :  (
                    <ProductsList/>
                )
                }
            </div>
        </>
    )

}

export default ProductsContainer