import { retryTenTimes } from '../../common/utils/apiUtils'
import PHILOSOPHERS_DATA from '../philosophers-data'

export const addPhilosopherNameToQuote = (quote, philosopherFullName) => `${quote} ― ${philosopherFullName}`

export const convertQuoteArray = (quoteArr, philosopherFullName) => quoteArr.map((quote) => addPhilosopherNameToQuote(quote, philosopherFullName))

export const allocateIdsToData = (data) =>
    data.forEach((element, index) => {
        element.id = index
    })

export const doOperationsOnData = ({ data, setData }, sortingMethod) => {
    data = data.slice()

    if (sortingMethod === 'alphabetical') data.sort((a, b) => a.fullName.localeCompare(b.fullName))
    else data.sort((a, b) => b.id - a.id)

    console.log(data)

    setData(data)
}

export const addPhilosopherInGlobalData = (philosopherName, { options, setOptions }, quotes) => {
    const newOptions = JSON.parse(JSON.stringify(options))
    if (philosopherName.trim().toLowerCase() === 'all') {
        const index = getPhilosopherObjectIndex(philosopherName, options)
        let existingQuotes
        if (newOptions[index].quotes === undefined) existingQuotes = []
        else {
            existingQuotes = newOptions[index].quotes
        }
        newOptions[index].quotes = [...existingQuotes, ...quotes]
    } else {
        const index = getPhilosopherObjectIndex(philosopherName, options)
        newOptions[index].quotes = quotes
    }
    setOptions(newOptions)
}

export const lazyLoadAsset = (philosopherName, { options, setOptions }, setQuotesLoaded, callbacks) => {
    return new Promise((resolve, reject) => {
        const fileName = philosopherName.toLowerCase()
        import('../assets/quotes/' + fileName + '.json')
            .then((data) => {
                callbacks && callbacks.map((callback) => callback(data?.default))
                addPhilosopherInGlobalData(philosopherName, { options, setOptions }, data?.default)
                setQuotesLoaded(true)
                resolve()
            })
            .catch((e) => reject(e))
    })
}

export const lazyLoadAllAssets = (callback) => {
    return new Promise((resolve, reject) => {
        const promiseArray = []
        PHILOSOPHERS_DATA.forEach(({ value: philosopherName, fullName: philosopherFullName }) => {
            if (philosopherName !== 'ALL') {
                const fileName = philosopherName.toLowerCase()
                const promise = retryTenTimes(() => import('../assets/quotes/' + fileName + '.json'))
                    .then((data) => {
                        callback && callback()
                        const convertedQuotes = convertQuoteArray(data?.default, philosopherFullName)
                        addPhilosopherInGlobalData('ALL', convertedQuotes)
                    })
                    .catch((e) => console.log(e))
                promiseArray.push(promise)
            }
        })

        Promise.all(promiseArray).then(resolve).catch(reject)
    })
}

export const getPhilosopherObjectIndex = (philosopher, options) => options.findIndex(({ value }) => value === philosopher)

export const getPhilosopherData = ({ philosopher, options }) => options.filter(({ value }) => value === philosopher)[0]

export const getCurrentPhilosopherFullname = (currentPhilosopher, options) => {
    const currentPhilosopherData = PHILOSOPHERS_DATA[getPhilosopherObjectIndex(currentPhilosopher, options)]
    return currentPhilosopherData.fullName
}
