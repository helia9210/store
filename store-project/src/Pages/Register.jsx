
import {FormInput, SubmitBtn} from "../Component";
import {Form, Link, redirect} from "react-router-dom";
import {customFetch} from "../utils/index.jsx";
import {toast} from "react-toastify";

export const action = async ({request}) => {

    const formData = await request.formData();
    const data = Object.fromEntries(formData)

    try {
        await customFetch.post('https://strapi-store-server.onrender.com/api/auth/local/register', data)
        toast.success('account created successfully')
        return redirect('/login')
    } catch (error){
        const errorMessage = error?.response?.data?.error?.message || 'please double check'
        toast.error(errorMessage)
        return null;
    }

}

const Register = () => {
    return <section className='h-screen grid place-items-center'>
        <Form method='post'
              className='card bg-base-100 shadow-xl flex flex-col gap-y-4 w-3/12 p-6'
        >
            <h1 className='font-bold text-center mt-4 text-3xl'>Register</h1>
            <FormInput
                type='username'
                label='username'
                name='username'
            />
            <FormInput
                type='email'
                label='email'
                name='email'
            />
            <FormInput
                type='password'
                label='password'
                name='password'
            />
            <div className='mt-5'>
                <SubmitBtn text='Register'/>
            </div>
            <p className='text-center mt-2'>
                Already a member?
                <Link to='/login' className='ml-2 link link-hover link-primary capitalize'>
                    Login
                </Link>
            </p>


        </Form>
    </section>
}

export default Register