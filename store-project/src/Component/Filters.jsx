import {Form, Link, useLoaderData} from "react-router-dom";
import FormInput from "./FormInput.jsx";
import FormSelect from "./FormSelect.jsx";
import FormRange from "./FormRange.jsx";
import FormCheckbox from "./FormCheckbox.jsx";

const Filters = () => {

    const {meta, params} = useLoaderData()
    const {search, company, category, shipping, order, price} = params

    return(
        <Form className='bg-base-200 rounded-lg px-6 py-8 grid gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 items-center'>
            <FormInput type='search' label='search product' name='search' size='input-sm' defaultValue={search}/>
            {/*categories*/}
            <FormSelect label='select category' name='category' list={meta.categories} size='select-sm' defaultValue={category}></FormSelect>
            {/*companies*/}
            <FormSelect label='select company' name='company' list={meta.companies} size='select-sm' defaultValue={company}/>
            {/*order*/}
            <FormSelect label='sort by' name='order' list={['a-z', 'z-a', 'high', 'low']} size='select-sm' defaultValue={order}/>
            <FormRange label='select price' name='price' size='range-sm' price={price}/>
            <FormCheckbox label='free shipping' name='shipping' size='checkbox-sm' defaultValue={shipping} />
            <button type='submit' className='btn btn-sm btn-primary'>
                search
            </button>
            <Link to='/products' className='btn btn-sm btn-accent'>reset</Link>
        </Form>
    )
}
export default Filters