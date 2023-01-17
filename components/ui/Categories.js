import React from 'react'
import { useRouter } from 'next/router'
import { getQueriesRoute } from '../../utils/utils'

const Categories = ({handleFetch}) => {

    const router = useRouter()
    const handleQuery = (queryVal) => {
        handleFetch()
        const currentRoute = getQueriesRoute(router, 'category', queryVal)
        router.push(currentRoute, undefined, {shallow: true})
    }
    const queryCty = router.query?.category


    return (
        <div className='flex_center flex-wrap mb-[10px] space-x-[20px]'>
            <div className={`mb-[20px] cursor-pointer ${!queryCty ? 'active-cty' : 'font-semibold'}`} onClick={() => handleQuery('')}>General</div>
            <div className={`mb-[20px] cursor-pointer ${queryCty === 'business' ? 'active-cty' : 'font-semibold'}`} onClick={() => handleQuery('business')}>Business</div>
            <div className={`mb-[20px] cursor-pointer ${queryCty === 'entertainment' ? 'active-cty' : 'font-semibold'}`} onClick={() => handleQuery('entertainment')}>Entertainment</div>
            <div className={`mb-[20px] cursor-pointer ${queryCty === 'health' ? 'active-cty' : 'font-semibold'}`} onClick={() => handleQuery('health')}>Health</div>
            <div className={`mb-[20px] cursor-pointer ${queryCty === 'science' ? 'active-cty' : 'font-semibold'}`} onClick={() => handleQuery('science')}>Science</div>
            <div className={`mb-[20px] cursor-pointer ${queryCty === 'sports' ? 'active-cty' : 'font-semibold'}`} onClick={() => handleQuery('sports')}>Sports</div>
            <div className={`mb-[20px] cursor-pointer ${queryCty === 'technology' ? 'active-cty' : 'font-semibold'}`} onClick={() => handleQuery('technology')}>Technology</div>
        </div>
    )
}

export default Categories