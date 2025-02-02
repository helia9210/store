import {Form, Link, useLoaderData} from "react-router-dom";
import FormInput from "./FormInput.jsx";
import FormSelect from "./FormSelect.jsx";
import FormRange from "./FormRange.jsx";
import FormCheckbox from "./FormCheckbox.jsx";

const Filters = () => {

    const {meta} = useLoaderData()
    console.log(meta)
    return(
        <Form className='bg-base-200 rounded-lg px-6 py-8 grid gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 items-center'>
            <FormInput type='search' label='search product' name='search' size='input-sm'/>
            {/*categories*/}
            <FormSelect label='select category' name='category' list={meta.categories} size='select-sm'></FormSelect>
            {/*companies*/}
            <FormSelect label='select company' name='company' list={meta.companies} size='select-sm'/>
            {/*order*/}
            <FormSelect label='sort by' name='order' list={['a-z', 'z-a', 'high', 'low']} size='select-sm'/>
            <FormRange label='select price' name='price' size='range-sm'/>
            <FormCheckbox label='free shipping' name='shipping' size='checkbox-sm' />
            <button type='submit' className='btn btn-sm btn-primary'>
                search
            </button>
            <Link to='/products' className='btn btn-sm btn-accent'>reset</Link>
        </Form>
    )
}
export default Filters