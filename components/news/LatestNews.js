import React from 'react'
import moment from 'moment/moment'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LatestNews = ({data}) => {

    return (
        <div className='flex flex-col md:flex-row mb-[30px] group'>
            <div className='w-full mb-[15px] md:mb-0 md:w-[400px] lg:w-[470px] h-[200px] sm:h-[300px] md:mr-[20px]'>
                <LazyLoadImage
                    alt={data.title}
                    effect="blur"
                    width={'100%'}
                    wrapperClassName="h-full wrapper"
                    src={data.urlToImage || 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png'} 
                    onError={({currentTarget}) => {
                        currentTarget.src = "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"
                    }}/>
            </div>
            <div className='flex-1'>
                <a href={data.url} target="_blank" rel="noreferrer" className='font-semibold text-[20px] group-hover:underline cursor-pointer'>
                    {data.title}
                </a>
                <div className='dark:text-gray-300 text-[14px] font-semibold text-gray-500 mt-[10px]'>
                    {data.description}
                </div>
                <div className='mt-[10px]'>
                    <p className='dark:text-gray-300 text-gray-500 text-[12px] font-semibold'>
                        {data.author || 'Unkown'} &nbsp; | &nbsp; {moment(new Date(data.publishedAt)).startOf('day').fromNow()} 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LatestNews