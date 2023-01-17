
const countries = [
    {
        code: 'ae',
        country: 'United Arab Emirates'
    },
    {
        code: 'id',
        country: 'Indonesia'
    },
    {
        code: 'us',
        country: 'United States'
    },
    {
        code: 'ar',
        country: 'Argentina'
    },
    {
        code: 'au',
        country: 'Australia'
    },
    {
        code: 'br',
        country: 'Brazil'
    },
    {
        code: 'ch',
        country: 'Switzerland'
    },
    {
        code: 'cn',
        country: 'China'
    },
    {
        code: 'de',
        country: 'Germany'
    },
    {
        code: 'eg',
        country: 'Egypt'
    },
    {
        code: 'fr',
        country: 'France'
    },
    {
        code: 'gb',
        country: 'UK'
    },
    {
        code: 'gr',
        country: 'Greece'
    },
    {
        code: 'hk',
        country: 'Hongkong'
    },
    {
        code: 'in',
        country: 'India'
    },
    {
        code: 'it',
        country: 'Italia'
    },
    {
        code: 'jp',
        country: 'Japan'
    },
    {
        code: 'kr',
        country: 'South Korea'
    },
    {
        code: 'ma',
        country: 'Maroco'
    },
    {
        code: 'mx',
        country: 'Meksiko'
    },
    {
        code: 'my',
        country: 'Malaysia'
    },
]


const generateQueriesFetch = (queries, queryStr, queryVal) => {
    let generateQueries = ''
    const formattedQueriesArr = [...new Set([queryStr, ...Object.keys(queries)])]
    formattedQueriesArr.forEach(query => {
        if(query === queryStr && !queries[query]) {
            generateQueries += `${query}=${queryVal}&`
        } else {
            generateQueries += `${query}=${queries[query]}&`
        }
    })
    return generateQueries
}

//replace, menambah, remove
const getQueriesRoute = (router, queryStr, queryVal) => {
    let queries = ''
    let formattedQueriesArr = Object.keys(router.query).map(ele => {
        return {
            query: ele,
            value: router.query[ele]
        }
    }).map(ele => {
        if(ele.query === queryStr) {
            return {...ele, value: queryVal}    //replace
        } else {
            return ele
        }
    }).filter(ele => ele.query === queryStr ? !queryVal ? ele.query !== queryStr : ele : ele) //remove

    if(queryVal && !formattedQueriesArr.some(ele => ele.query === queryStr)) {
        formattedQueriesArr.push({
            query: queryStr,
            value: queryVal
        })
    }
    formattedQueriesArr.forEach((ele, idx) => {
        queries += `${idx === 0 ? '?' : '&'}${ele.query}=${ele.value}`
    })
    return `${router.pathname}${queries}`
}


export { countries, generateQueriesFetch, getQueriesRoute }
