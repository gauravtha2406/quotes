import React, { useEffect, useState } from 'react'
import { getPhilosopherQuotes, lazyLoadAsset } from '../../static/utils/utils'
import { Loader } from '../loader/loader'
import QuotesList from '../quotes-list/quotes-list'

export function LazyLoadQuoteList(props) {
    const [isFetching, setIsFetching] = useState(true)
    const { currentPhilosopher, setCurrentData, options, setOptions, setQuotesLoaded } = props

    async function lazyInit() {
        try {
            if (currentPhilosopher !== undefined) {
                if (!getPhilosopherQuotes({ philosopher: currentPhilosopher, options })) {
                    await lazyLoadAsset(currentPhilosopher, { options, setOptions }, setQuotesLoaded, [setCurrentData])
                }

                setIsFetching(false)
            } else {
                setIsFetching(false)
            }
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        lazyInit()
    }, [currentPhilosopher])

    return isFetching ? <Loader /> : <QuotesList {...props} />
}
