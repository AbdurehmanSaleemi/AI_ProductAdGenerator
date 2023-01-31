import React from 'react'
import '../index.css'

function Input({ placeholder, value, onChange }) {
    return (
        <div className='flex flex-col w-full items-center justify-center'>
        <input className='border-2 border-black w-5/6 md:w-3/6 px-6 py-6 text-xl rounded-full' type='text' placeholder={placeholder} value={value} onChange={onChange}/>
        <h2 className='text-md mt-2 text-gray-500 text-left w-10/12 ml-2 md:w-1/2'>Example: "We make authentic syrian shawarma"</h2>
        </div>
    )
}

export default Input