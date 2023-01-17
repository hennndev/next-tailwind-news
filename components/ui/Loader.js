import React from 'react'

const Loader = () => {
    return (
        <div className='flex_center mt-[50px]'>
            <span className="mr-[10px] dark:dark-loader loader"></span>
            <p className='font-semibold text-[20px]'>Loading</p>
        </div>
    )
}

export default Loader