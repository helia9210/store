
import {FormInput, SubmitBtn} from "../Component";
import {Form,Link} from "react-router-dom";

const Login = () => {
    return <section className='h-screen grid place-items-center'>
        <Form method='post'
              className='card bg-base-100 shadow-xl flex flex-col gap-y-4 w-3/12 p-6'
        >
            <h1 className='font-bold text-center mt-4 text-3xl'>Login</h1>
            <FormInput type='email' label='email' name='identifier' defaultValue='test@test.com'/>
            <FormInput type='password' label='password' name='password' defaultValue='secret'/>
            <div className='mt-5'>
                <SubmitBtn text='login'/>
            </div>
            <button type='button' className='btn btn-secondary btn-block'>
                guest user
            </button>
            <p className='text-center mt-2'>
                Not a member yet?
                <Link to='/register' className='ml-2 link link-hover link-primary capitalize'>
                    register
                </Link>
            </p>


        </Form>
    </section>
}

export default Login