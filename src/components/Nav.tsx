import logo from '../assets/logo-text.png'
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
    return (
        <div className='container mx-auto flex justify-between items-center sticky top-2 bg-amber-50 h-20'>
            <button className="md:hidden p-2">
                <GiHamburgerMenu />
            </button>

            <img src={logo} alt="logo" className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0" />

            <ul className='hidden md:flex justify-center items-center gap-4'>
                <li className="cursor-pointer hover:text-pink-400">Home</li>
                <li className="cursor-pointer hover:text-pink-400">Technologies</li>
                <li className="cursor-pointer hover:text-pink-400">Projects</li>
                <li className="cursor-pointer hover:text-pink-400">Contacts</li>
                <li className="cursor-pointer hover:text-pink-400">About</li>
            </ul>

            <div className='flex justify-between items-center gap-2 md:gap-4'>
                <p className='btn btn-ghost px-2 md:px-4'> Sign In </p>

                <button className="btn border-none rounded-full bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 text-white px-4 md:px-8 hover:opacity-90 shrink-0">
                    Sign Up
                </button>
            </div>
        </div>
    );
};

export default Nav;