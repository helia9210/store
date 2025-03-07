import {useLoaderData} from "react-router-dom";
import {customFetch, generateAmountOptions} from "../utils/index.jsx";
import {Link} from "react-router-dom";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addItem} from "../features/cartSlice.js";

export const loader = async ({params}) => {
    const response = await customFetch(`/products/${params.id}`);
    return {product : response.data.data}
}
const SingleProduct = () => {
    const {product} = useLoaderData();
    const {image, title, price, company, description, colors} = product.attributes;
    const [productColor, setProductColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);

    const handleAmount = (e) => {
        setAmount(parseInt(e.target.value));
    }

    const cartProduct = {
        cartID: product.id + productColor,
        productID: product.id,
        image,
        title,
        price,
        company,
        productColor,
        amount,
    }

    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(addItem({product: cartProduct}))
    }



    return <section>
        <div className='breadcrumbs text-md'>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/products'>Products</Link>
                </li>
            </ul>
        </div>
        {/*product */}
        <div className='mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
            <img
                src={image}
                alt={title}
                className='w-96 h-96 object-cover rounded-lg lg:w-full'
            />
            <div>
                <h1 className='capitalize text-3xl font-bold'>{title}</h1>
                <h4 className='text-lg font-bold text-neutral-content mt-2'>{company}</h4>
                <p className='mt-4 text-xl'>${price/100}</p>
                <p className='mt-8 text-justify leading-8'>{description}</p>
                <div className='mt-8'>
                    <h4 className='font-bold text-lg tracking-wider capitalize'>
                        colors
                    </h4>
                    <div className='mt-2'>
                        {colors.map((color)=>{
                            return <button key={color} type='button' className={`badge w-6 h-6 mr-2 
                            ${color === productColor && 'border-2 border-secondary'}`}
                            style={{backgroundColor: color}}
                            onClick={() => setProductColor(color)}></button>
                        })}
                    </div>
                </div>
                <div className='form-control w-full max-w-xs'>
                    <label className='label' htmlFor='amount'>
                        <h4 className='font-medium text-md tracking-wider capitalize'>
                            amount
                        </h4>
                    </label>
                    <select className='select select-secondary select-bordered select-md'
                            id='amount' value={amount} onChange={handleAmount}>
                        {generateAmountOptions(10)}
                    </select>
                </div>
                <div className='mt-8'>
                    <button className='btn btn-secondary btn-md' onClick={addToCart}>
                        Add to bag
                    </button>
                </div>
            </div>
        </div>

    </section>
}

export default SingleProduct