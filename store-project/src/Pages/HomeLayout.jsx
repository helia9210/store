import {Outlet} from 'react-router-dom'
import {Header, Navbar} from '../Component'

const HomeLayout = () => {
    return (
        <>
            <Header/>
            <Navbar/>
            <section className='align-element py-20'>
                <Outlet/>
            </section>

        </>
    )
}

export default HomeLayout