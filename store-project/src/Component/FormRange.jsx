import {useState} from "react";


const FormRange = ({label, name, size, price}) => {
    const step = 1000;
    const maxPrice = 100000;
    const [selectedPrice, setSelectedPrice] = useState(price ||maxPrice);


    return(
        <div className='form-control'>
            <label className='label cursor-pointer' htmlFor={name}>
                <span className='label-text capitalize'>{label}</span>
                <span>${selectedPrice}</span>
            </label>
            <input type='range' name={name} value={selectedPrice} min={0} max={maxPrice} onChange={(e) => setSelectedPrice(e.target.value)} step={step}
                   className={`range range-primary ${size}`}/>
            <div className='w-full flex justify-between text-xs px-2 mt-2'>
                <span className='text-md font-bold'>0</span>
                <span className='text-md font-bold'>Max: ${maxPrice}</span>
            </div>
        </div>
    )
}

export default FormRange