import React from 'react'
import moment from 'moment/moment'

const OtherNews = ({data}) => {
    return (
        <div className='mb-[20px] group w-full'>
            <a href={data.url} target="_blank" rel="noreferrer" className='font-semibold text-[15px] group-hover:underline line-clamp-2 cursor-pointer'>{data.title}</a>
            <p className='dark:text-gray-400 text-gray-600 text-[13px] font-[500] line-clamp-2 mt-[10px]'>{data.description}</p>
            <div className="flex_between text-[12px] dark:text-gray-400 text-gray-500 font-[500] mt-[5px]">
                <p className='flex-1 line-clamp-1'>{data.author || 'Unknown'}</p>
                <p>
                    {moment(new Date(data.publishedAt)).startOf('day').fromNow()} 
                </p>
            </div>
        </div>
    )
}

export default OtherNews