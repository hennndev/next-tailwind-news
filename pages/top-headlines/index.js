import React, { useState, useEffect } from 'react'
import useSWR from 'swr'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Loader from '../../components/ui/Loader'
import Countries from '../../components/ui/Countries'
import Headlines from '../../components/news/Headlines'
import Categories from '../../components/ui/Categories'
import { generateQueriesFetch } from '../../utils/utils'

const fetcher = url => fetch(url).then(r => r.json())
const TopHeadlines = ({msg, data}) => {

    const router = useRouter()
    const [newsData, setNewsData] = useState(data)
    const [shouldFetch, setShouldFetch] = useState(false)
    const queriesFetch = generateQueriesFetch(router.query, 'category', 'general')
    const { data: dataClient, isLoading } = useSWR(shouldFetch ? `https://newsapi.org/v2/top-headlines?pageSize=20&${queriesFetch}apiKey=${process.env.NEXT_PUBLIC_API_KEY}` : null, fetcher)

    useEffect(() => {
        if(shouldFetch && dataClient) {
            setNewsData(dataClient?.articles)
        }
    }, [shouldFetch, dataClient])

    return (
        <>  
            <Head>
                <title>Top Headlines</title>
            </Head>
            <main className='container pt-[50px] dark:text-white px-[15px]'>
                <Categories handleFetch={() => setShouldFetch(true)}/>
                <Countries handleFetch={() => setShouldFetch(true)}/>
                {isLoading ? <Loader/> : (
                    newsData?.length > 0 ? (
                        <div className='grid gap-[15px] grid-cols-mobile-headlines sm:grid-cols-headlines'>
                            {newsData?.map(data => (
                                <Headlines data={data} key={data.title + `${Math.floor(Math.random * 100)}`}/>
                            ))}
                        </div>
                    ) : (
                        <div className='flex_center text-center mt-[100px]'>
                            <h1 className='text-[20px] font-bold'>
                                {msg !== 'success' ? msg : 'Oops, This news is not available'}
                            </h1>
                        </div>
                    )
                )}
            </main>
        </>
    )
}

export async function getServerSideProps(ctx) {
    const queriesFetch = generateQueriesFetch(ctx.query, 'category', 'general')
    const res = await fetch(`https://newsapi.org/v2/top-headlines?${queriesFetch}pageSize=20&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`)
    const data = await res.json()

    if(data?.status === 'error') {
        return {
            props: {
                msg: 'Oops, request data has reach limit :(',
                data: []
            }
        }
    }
    return {
        props: {
            msg: 'success',
            data: JSON.parse(JSON.stringify(data.articles))
        }
    }
}

export default TopHeadlines