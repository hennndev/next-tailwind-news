import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { IoSearch, IoClose } from 'react-icons/io5'

const SearchInput = ({handleFetch}) => {

    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState(router.query.q || '')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(handleFetch) handleFetch()
        if(!searchTerm) {
            router.push('/news')
            return
        }
        router.push(`/news?q=${searchTerm}`, undefined, {shallow: true})
    }
    const handleClear = () => setSearchTerm('')

    return (
        <form className='flex' onSubmit={handleSubmit}>
            <div className='w-full flex_between sm:w-[300px] xl:w-[450px] bg-transparent border dark:border-gray-600 border-gray-300 rounded-md px-[10px] mr-[10px]'>
                <div className="flexx flex-1">
                    <IoSearch className="text-[20px] mr-[10px]"/>
                    <input 
                        type="text" 
                        className='flex-1 w-full text-[14px] border-none outline-none py-[7px] bg-transparent mr-[10px]' placeholder='Search news..'
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}/>
                </div>
                {searchTerm.length > 0 && <IoClose className='text-[20px] cursor-pointer dark:text-red-200 text-red-500' onClick={handleClear}/>}
            </div>
            <button className="btn px-[12px] py-[6px] text-[14px]" type="submit">Search</button>
        </form>
    )
}

export default SearchInput