
import {useRouteError, Link} from "react-router-dom";

const Error = () => {

    const error = useRouteError();
    console.log(error);

    if (error.status === 404){
        return (
            <main className='grid min-h-[100vh] place-items-center px-8 bg-violet-950' >
                <div className='text-center'>
                    <p className='text-9xl font-semibold text-violet-500'>404</p>
                    <h1 className='text-4xl font-bold tracking-tight mt-10 sm:text-5xl text-white'>page not found</h1>
                    <p className='text-lg leading-7 mt-6 text-white  '>
                        Sorry, we could not find the page you are looking for.
                    </p>
                    <div className='mt-12'>
                        <Link to='/' className='btn btn-secondary'>
                            Go back home
                        </Link>

                    </div>
                </div>
            </main>
        )
    }
    return (
        <main className='grid min-h-[100vh] place-items-center px-8'>
            <h4 className='text-center font-bold text-4xl'>there was an error...</h4>
        </main>
    )
}

export default Error