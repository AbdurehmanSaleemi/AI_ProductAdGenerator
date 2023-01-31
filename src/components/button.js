import React from 'react'

function Button({onClick}) {
    return (
        <button onClick={onClick} className='border-2 border-black px-8 py-6 text-xl rounded-full hover:bg-black hover:text-white'>Generate </button>
    )
}

export default Button