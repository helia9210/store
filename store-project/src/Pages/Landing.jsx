
import {Hero, FeaturedProducts} from '../Component'
import {customFetch} from "../utils/index.js";


const url = '/products?featured=true';



export const loader = async () => {
     const response = await customFetch(url);
     const products = response.data.data;
     return { products };
};

const Landing = () => {
    return (
        <>
            <Hero/>
            <FeaturedProducts/>
        </>
    )
}

export default Landing