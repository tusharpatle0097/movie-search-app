import React, { useState, useContext } from 'react';
import { CallApiSearch } from '../context/CallApi';
import { DarkModeContext } from '../context/DarkModeTheme';

const darkButton = <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" className="text-primary text-2xl mr-2 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"></path></svg>
const lightButton = <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" className="text-primary text-2xl mr-2 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>

const Navbar = () => {

    const { isDarkMode, toggleDarkMode, } = useContext(DarkModeContext);
    const { searchTerm, setSearchTerm } = useContext(CallApiSearch);
    console.log(isDarkMode)
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <div>
            <nav className={`${isDarkMode ? 'bg-slate-700' : 'bg-[#1ffff8]'} flex items-center justify-between flex-wrap bg-teal-500 p-6`}>
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className={`${isDarkMode ? 'text-white' : 'text-black'} font-semibold text-xl tracking-tight`}>Movie Search</span>
                </div>
                <div className="block lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
                    >
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className={`w-full ${isMenuOpen ? '' : 'hidden'} lg:block flex-grow lg:flex lg:items-center lg:w-auto`}>
                    <div className="text-sm lg:flex-grow lg:text-center">
                        <input
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            type="text"
                            alt='Search Movie'
                            placeholder='Search Movie...'
                            className={`${isDarkMode ? 'bg-slate-800 text-white' : 'text-black'
                                } py-2 rounded-lg px-3 w-[14rem] lg:w-[20rem] ${/* default styles */
                                'hidden md:inline-block lg:inline-block' /* conditional visibility */
                                }`}
                        />

                    </div>
                    <div>
                        <button onClick={toggleDarkMode} className='flex lg:mt-0 mt-5'>
                            <span>{isDarkMode ? darkButton : lightButton}</span>
                            <span>{isDarkMode ? 'Enable Light mode' : 'Enable Dark Mode'}</span>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
