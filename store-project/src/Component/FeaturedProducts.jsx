import SectionTitle from "./SectionTitle.jsx";
import ProductsGrid from "./ProductsGrid.jsx";

const FeaturedProducts = () => {
    return (
        <div className='mt-28'>
           <SectionTitle text='featured products'/>
           <ProductsGrid/>
        </div>
    )
}

export default FeaturedProducts