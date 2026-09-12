import React from 'react';
import logo from '../assets/logo-text.png'

const Nav = () => {
    return (
        <div className='flex justify-between items-center mt-2 ml-2 mr-2'>
            <img src={logo} alt="logo" />

            <ul className='flex justify-center items-center gap-4'>
                <li>Home</li>
                <li>Technologies</li>
                <li>Projects</li>
                <li>Contacts</li>
                <li>About</li>
            </ul>

            <div className='flex justify-between items-center gap-4'>

                <p> Sign In </p>
                <button className="btn border-none rounded-full bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 text-white px-8 hover:opacity-90">
                    Sign Up
                </button>

            </div>


        </div>
    );
};

export default Nav;