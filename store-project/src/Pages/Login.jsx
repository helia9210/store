import {FormInput, SubmitBtn} from "../Component";
import {Form,Link, redirect, useNavigate} from "react-router-dom";
import {customFetch} from "../utils/index.jsx";
import {toast} from "react-toastify";
import {loginUser} from "../features/userSlice.js";
import {useDispatch} from "react-redux";

export const action = (store) => async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData)

    try {
        const response = await customFetch.post('https://strapi-store-server.onrender.com/api/auth/local', data)
        store.dispatch(loginUser(response.data))
        toast.success('you are login successfully')
        return redirect('/')
    } catch (error){
        const errorMessage = error?.response?.data?.error?.message || 'please double check'
        toast.error(errorMessage)
        return null;
    }
}

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginAsGuestUser = async () => {
        try {
            const response = await customFetch.post('https://strapi-store-server.onrender.com/api/auth/local', {
                identifier: 'test@test.com',
                password: 'secret',
            })
            dispatch(loginUser(response.data))
            navigate('/')
            toast.success('welcome guest user')
        } catch (error) {
            console.log(error)
            toast.error('something went wrong please try again')

        }
    }
    return <section className='h-screen grid place-items-center'>
        <Form method='post'
              className='card bg-base-100 shadow-xl flex flex-col gap-y-4 w-3/12 p-6'
        >
            <h1 className='font-bold text-center mt-4 text-3xl'>Login</h1>
            <FormInput type='email' label='email' name='identifier'/>
            <FormInput type='password' label='password' name='password'/>
            <div className='mt-5'>
                <SubmitBtn text='login'/>
            </div>
            <button type='button' className='btn btn-secondary btn-block' onClick={loginAsGuestUser}>
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