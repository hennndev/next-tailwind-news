import React from 'react'
import moment from 'moment/moment'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Headlines = ({data}) => {

  return (
        <div className='flex flex-col sm:flex-row mb-[30px] group'>
            <div className='w-full max-h-[200px] mb-[15px] sm:mb-0 sm:w-[300px] md:w-[250px] lg:w-[300px] sm:mr-[20px]'>
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
                <a href={data.url} target="_blank" rel="noreferrer" className='font-semibold text-[20px] mb-[10px] group-hover:underline cursor-pointer sm:line-clamp-3'>
                    {data.title}
                </a>
                <div className='dark:text-gray-300 text-[14px] font-semibold text-gray-600 sm:line-clamp-[3] break-all'>
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

export default Headlines