import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import Loader from '../../components/ui/Loader'
import { generateQueriesFetch } from '../../utils/utils'
import OtherNews from '../../components/news/OtherNews'
import SearchInput from '../../components/ui/SearchInput'
import LatestNews from '../../components/news/LatestNews'

const fetcher = url => fetch(url).then(r => r.json())
const NewsPage = ({msg, data}) => {
    //NEWS
    const router = useRouter()
    const [newsData, setNewsData] = useState(data)
    const [shouldFetch, setShouldFetch] = useState(false)
    const queriesFetch = generateQueriesFetch(router.query, 'q', 'worlds')
    const { data: dataClient, isLoading } = useSWR(shouldFetch ? `https://newsapi.org/v2/everything?pageSize=30&${queriesFetch}apiKey=${process.env.NEXT_PUBLIC_API_KEY}` : null, fetcher)


    useEffect(() => {
        if(shouldFetch && dataClient) {
            setNewsData(dataClient?.articles)
        }
    }, [shouldFetch, dataClient])

    const sortNewsByDate = newsData?.sort((a, b) => {
        return new Date(b.publishedAt) - new Date(a.publishedAt)
    })
    const latestNews = sortNewsByDate?.slice(0, 20)
    const otherNews = sortNewsByDate?.slice(20, 30)

    
    return (
        <>
            <Head>
                <title>News Page</title>
            </Head>
            <main className='container pt-[50px] px-[15px] dark:text-white'>
            <div className='flex flex-col md:flex-row md:flex_between mb-[30px]'>
                <h1 className='text-[20px] mb-[15px] md:mb-0 lg:text-[25px] font-bold'>
                    {sortNewsByDate?.length > 0 ? 'Latest News around the worlds' : 'News not available'}
                </h1>
                <SearchInput handleFetch={() => setShouldFetch(true)}/>
            </div>
            {isLoading ? <Loader/> : (
                sortNewsByDate?.length > 0 ? (
                    <div className="flex">
                        {/* LATEST NEWS */}
                        <div className='flex-1 md:mr-[30px]'>
                            {latestNews.map(data => (
                                <LatestNews key={data.publishedAt + `${data.author}`} data={data}/>
                            ))}
                        </div>
                        {/* OTHER NEWS */}
                        {otherNews.length > 0 && (
                        <div className='hidden lg:block w-[300px] mt-[-5px] top-0 sticky h-screen overflow-y-auto scrollbar-hide'>
                        <h1 className='text-[20px] font-semibold mb-[20px]'>Other News</h1>
                            {otherNews.map(data => (
                                <OtherNews key={data.publishedAt + `${data.author}`} data={data}/>
                            ))}
                        </div>
                    )}
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
    const queriesFetch = generateQueriesFetch(ctx.query, 'q', 'worlds')
    const res = await fetch(`https://newsapi.org/v2/everything?${queriesFetch}pageSize=30&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`)
    const data = await res.json()
    
    if(data?.status === 'error') {
        return {
            props: {
                msg: 'Oops Sorry, request data has reach limit. You can access again after 24 hours :(',
                data: []
            }
        }
    }
    return {
        props: {
            msg: 'success',
            data: JSON.parse(JSON.stringify(data?.articles))
        }
    }
}

export default NewsPage