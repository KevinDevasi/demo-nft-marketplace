import React from 'react'

const Navlink =[
    "Home", "Market", "Explore", "Exhibition", "Artistist & Colletion"
]

const Navbar = () => {
  return (
    <nav className='p-4 bg-slate-900 text-white'>
        <div className='container mx-auto max-w-screen-xl relative'></div>
        {/* flex containr*/}
        <div className='flex justify-between items-center text-white'>
            {/* logo*/}
            <a href='/' className='text-2xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400'>
            <span>NFT</span> Market.
            </a> 
            
                {/* menu */}
                <div className='space-x-6' >
            {Navlink.map((link, index) => (
                <a key={index} className='hover:text-indigo-600 duration-200 ease-in-out'>
                 <a href={`#${link.toLowerCase()}`}></a>
                    {link}
                </a>
            ))}

            <button className='px-5 rounded-md font-medium border-indigo-600 py-2 bg-indigo-600 hover:bg-indigo-700 hover:border-indigo-700'>
                connect Wallent
            </button>
        </div>
        </div>
        </nav>
  )
}

export default Navbar