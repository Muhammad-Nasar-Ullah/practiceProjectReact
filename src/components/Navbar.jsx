import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ mode, toggleMode }) => {

    const [dropdown, setDropdown] = useState(false)

    return (
        <div className={`px-5 py-5 flex justify-between items-center sticky top-0 h-[70px] transition-all duration-500 ${mode === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}>
            <h2 className={`text-2xl font-bold ${mode === 'dark' ? 'text-white' : 'text-black'}`}>Logo</h2>

            <button onClick={() => setDropdown(!dropdown)} className={`px-4 py-2 rounded-md md:hidden ${mode === 'light' ? 'bg-black text-white' : 'bg-white text-black'}`} style={{ cursor: 'pointer' }}>menu</button>

            {dropdown && (
                <div className={`flex flex-col gap-5 absolute right-4 top-20 w-56 p-5 rounded-2xl shadow-lg border ${mode === 'dark' ? 'bg-gray-900 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-800'}`}>
                    {/* Close Button */}
                    <button onClick={() => setDropdown(false)} className={`absolute top-3 right-3 text-sm px-2 py-1 rounded-md transition ${mode === 'dark' ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-black'}`}>
                        ✕
                    </button>

                    {/* Navigation Links */}
                    <ul className="flex flex-col gap-3 mt-4">
                        {[
                            { name: "Home", path: "/" },
                            { name: "About", path: "/about" },
                            { name: "Contact", path: "/contact" },
                        ].map((item, index) => (
                            <li key={index}>
                                <Link to={item.path} className={`block px-3 py-2 rounded-lg transition duration-200 ${mode === 'dark' ? 'hover:bg-gray-800 hover:text-white' : 'hover:bg-gray-100 hover:text-black'}`}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Divider */}
                    <div className={`${mode === 'dark' ? 'border-gray-700' : 'border-gray-200'} border-t`}></div>

                    {/* Theme Toggle */}
                    <button onClick={toggleMode} className={`w-full py-2 rounded-lg font-medium transition duration-200 ${mode === 'dark' ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}>
                        {mode === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}
                    </button>
                </div>
            )}

            <ul className='flex gap-4 hidden md:flex'>
                <li className={`${mode === 'dark' ? 'text-white' : 'text-black'}`}><Link to='/'>Home</Link></li>
                <li className={`${mode === 'dark' ? 'text-white' : 'text-black'}`}><Link to='/about'>About</Link></li>
                <li className={`${mode === 'dark' ? 'text-white' : 'text-black'}`}><Link to='/contact'>Contact</Link></li>
            </ul>
            <button onClick={toggleMode} className={`px-4 py-2 rounded-md hidden md:block ${mode === 'light' ? 'bg-black text-white' : 'bg-white text-black'}`} style={{ cursor: 'pointer' }}>{mode === 'light' ? 'Enable DarkMode' : 'Enable LightMode'}</button>
        </div>
    )
}

export default Navbar