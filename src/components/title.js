import React from 'react'

function Title() {
    return (
        <div className='flex flex-col w-full h-full items-center'>
            <div className='border-2 border-black px-6 py-3 rounded-full'>
                <h1 className='font-bold text-3xl text-center'>AI Application</h1>
            </div>
            <h1 className='text-2xl mt-12 text-center'>Generate Product Ad from Description.</h1>
        </div>
    )
}

export default Title