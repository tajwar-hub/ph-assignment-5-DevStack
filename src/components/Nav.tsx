import logo from '../assets/logo-text.png'

const Nav = () => {
    return (
        <div className='flex justify-between items-center mt-4 ml-2 mr-2 relative'>


            <button className="md:hidden p-2 text-base-content">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
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