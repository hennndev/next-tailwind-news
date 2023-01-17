import React from 'react'
import { useRouter } from 'next/router'
import { countries, getQueriesRoute } from '../../utils/utils'

const Countries = ({handleFetch}) => {

    const router = useRouter()
    const handleQuery = (queryVal) => {
        handleFetch()
        const currentRoute = getQueriesRoute(router, 'country', queryVal)
        router.push(currentRoute, undefined, {shallow: true})
    }


    return (
        <div className='relative flex items-center mb-[50px] space-x-[20px] overflow-x-scroll scrollbar-hide whitespace-nowrap'>
            <div className={`cursor-pointer ${!router.query.country ? 'font-[700]' : 'font-[500]'}`} onClick={() => handleQuery('')}>All Country</div>
            {countries.map(country => (
                <div className={`cursor-pointer ${router.query.country === country.code ? 'font-[700]' : 'font-[500]'}`} key={country.code} onClick={() => handleQuery(country.code)}>
                    {country.country}
                </div>
            ))}
        </div>
    )
}

export default Countries