import React from 'react'
import '../index.css'

function Input({ placeholder, value, onChange }) {
    return (
        <input className='border-2 border-black w-5/6 md:w-3/6 px-6 py-6 text-xl rounded-full' type='text' placeholder={placeholder} value={value} onChange={onChange}/>
    )
}

export default Input