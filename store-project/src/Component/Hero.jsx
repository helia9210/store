import hero1 from '../assets/hero1.webp';
import hero2 from '../assets/hero2.webp';
import hero3 from '../assets/hero3.webp';
import hero4 from '../assets/hero4.webp';
import {Link} from "react-router-dom";



const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
    return(
        <div className='grid lg:grid-cols-2 gap-20 items-center'>
            <div>
                <h1 className='max-w-2xl text-4xl font-bold tracking-tight'>
                    we are changing the way
                </h1>
                <span className='text-6xl font-bold text-primary'>Shop</span>
                <p className='text-lg tracking-normal mt-9 leading-9 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris rhoncus
                    aenean vel elit scelerisque In egestas erat imperdiet sed euismod nisi porta lorem mollis Morbi tristique
                    senectus et netus Mattis pellentesque id nibh tortor id aliquet lectus proin</p>
                <Link to='/products' className='btn btn-primary mt-10 tracking-wider text-lg shadow capitalize'>
                    our products
                </Link>
            </div>
            <div className='hidden h-[30rem] lg:carousel carousel-center bg-neutral rounded-box p-4 space-x-4'>
                {carouselImages.map((image) => {
                    return <div key={image} className='carousel-item'>
                                <img
                                src={image}
                                className='rounded-box h-full w-80 object-cover'
                                />
                          </div>
                })}
            </div>

        </div>
    )
}

export default Hero