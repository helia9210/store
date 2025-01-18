
import {NavLink} from "react-router-dom";
import { FaBarsStaggered, FaCartShopping } from "react-icons/fa6";
import { IoSunny, IoMoon } from "react-icons/io5";
import NavLinks from "./NavLinks.jsx";
import {useEffect, useState} from "react";

const themes = {
    winter : 'winter',
    dracula: 'dracula',
}

const getThemeFromLocalStorage = () => {
    return localStorage.getItem('theme') || themes.winter;
}


const Navbar = () => {

    const [theme, setTheme] = useState(getThemeFromLocalStorage());

    const handleTheme = () => {
        const {winter, dracula} = themes;
        const newTheme = theme === winter ? dracula : winter;
        setTheme(newTheme)
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme)
    }, [theme]);
    return(
        <nav className='bg-base-200'>
            <div className='navbar align-element'>
                <div className='navbar-start'>
                    <NavLink to='/' className='hidden lg:flex btn btn-primary text-3xl items-center'>
                        A
                    </NavLink>
                    {/* dropdown */}
                    <div className='dropdown'>
                        <label tabIndex={0} className='btn btn-ghost lg:hidden'>
                            <FaBarsStaggered className='w-8 h-8'/>
                        </label>
                        <ul tabIndex={0} className='menu menu-vertical menu-sm bg-base-200 dropdown-content rounded-box
                        mt-3 w-56 shadow'>
                           <NavLinks />
                        </ul>
                    </div>
                </div>
                <div className='navbar-center hidden lg:flex'>
                        <ul className='menu menu-horizontal'>
                            <NavLinks />
                        </ul>
                </div>
                <div className='navbar-end'>
                    {/*theme setup*/}
                    <label className='swap swap-rotate'>
                        <input type='checkbox' onChange={handleTheme}/>
                        <IoSunny className=' swap-on h-6 w-6' />
                        <IoMoon className='swap-off h-6 w-6' />
                    </label>


                    {/*cart link*/}
                    <NavLink to='/cart' className='btn btn-ghost btn-circle ml-6'>
                        <div className='indicator'>
                            <FaCartShopping className='w-6 h-6'/>
                            <span className='indicator-item badge badge-primary badge-sm'>8</span>
                        </div>
                    </NavLink>

                </div>

            </div>
        </nav>
    )
}

export default Navbar