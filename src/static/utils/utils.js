export const addPhilosopherNameToQuote = (quote, philosopherFullName) => `${quote} ― ${philosopherFullName}`

export const convertQuoteArray = (quoteArr, philosopherFullName) => quoteArr.map((quote) => addPhilosopherNameToQuote(quote, philosopherFullName))

export const doOperationsOnData = (data) => {
    // Sort options alphabetically
    data.sort((a, b) => a.displayName.localeCompare(b.displayName))

    // Insert All option
    var allQuotesCombined = data.reduce((acc, { quotes, fullName }) => {
        let newQuoteArray = convertQuoteArray(quotes, fullName)
        acc.quotes = [...acc.quotes, ...newQuoteArray]
        return acc
    }, { id: 99, value: "ALL", displayName: "All", fullName: "", quotes: [] })

    data.unshift(allQuotesCombined);

    return data
}