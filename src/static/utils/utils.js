import { retryTenTimes } from '../../common/utils/apiUtils'

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
        retryTenTimes(() => fetch('https://cdn.jsdelivr.net/gh/speed1992/quotes/src/static/assets/quotes/' + fileName + '.json'))
            .then((response) => response.json())
            .then((data) => {
                callbacks && callbacks.map((callback) => callback(data))
                addPhilosopherInGlobalData(philosopherName, { options, setOptions }, data)
                setQuotesLoaded(true)
                resolve()
            })
            .catch((e) => reject(e))
    })
}



export const getPhilosopherObjectIndex = (philosopher, options) => options.findIndex(({ value }) => value === philosopher)

export const getPhilosopherData = ({ philosopher, options }) => options.filter(({ value }) => value === philosopher)[0]

export const getPhilosopherQuotes = ({ philosopher, options }) => {
    return options.filter(({ value }) => value === philosopher)[0]?.quotes
}

export const getCurrentPhilosopherFullname = (currentPhilosopher, options) => {
    const currentPhilosopherData = options[getPhilosopherObjectIndex(currentPhilosopher, options)]
    return currentPhilosopherData.fullName
}
