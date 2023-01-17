import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

const PageNotFound = () => {

    const router = useRouter()

    return (
        <>
            <Head>
                <title>Page Not Found</title>
            </Head>
            <main className='dark:text-white flex_center flex-col mt-[100px]'>
                <h1 className='text-[25px] font-bold text-center mb-[15px]'>Oops, Page Not Found</h1>
                <button className="btn px-[15px] py-[10px]" onClick={() => router.push('/')}>Back to Homepage</button>
            </main>
        </>
    )
}

export default PageNotFound