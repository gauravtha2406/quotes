import { v4 as uuidv4 } from 'uuid';
import { retryTenTimes } from '../../common/utils/apiUtils';
import { currentPhilosopher } from '../../common/utils/staticDataUtils';
import { sortFeatureDisabled } from '../../common/utils/urlUtils';
import PHILOSOPHERS_DATA from "../philosophers-data";

export const addPhilosopherNameToQuote = (quote, philosopherFullName) => `${quote} ― ${philosopherFullName}`

export const convertQuoteArray = (quoteArr, philosopherFullName) => quoteArr.map((quote) => addPhilosopherNameToQuote(quote, philosopherFullName))

export const allocateIdsToData = () => PHILOSOPHERS_DATA.forEach((element,index) => {element.id = index});

export const doOperationsOnData = (sortingMethod) => {
    const data = PHILOSOPHERS_DATA;
    // Sorting except the first element
    const allElement = data.shift();
    if (sortingMethod === "alphabetical")
        data.sort((a, b) => a.fullName.localeCompare(b.fullName))
    else
        data.sort((a, b) => a.id.localeCompare(b.id))
   
    data.unshift(allElement);
}

export const addPhilosopherInGlobalData = (philosopherName, quotes) => {
    if (philosopherName.trim().toLowerCase() === "all") {
        const index = getPhilosopherObjectIndex(philosopherName);
        let existingQuotes;
        if (PHILOSOPHERS_DATA[index].quotes === undefined)
            existingQuotes = [];
        else {
            existingQuotes = PHILOSOPHERS_DATA[index].quotes
        }
        PHILOSOPHERS_DATA[index].quotes = [...existingQuotes, ...quotes]
    } else {
        const index = getPhilosopherObjectIndex(philosopherName);
        PHILOSOPHERS_DATA[index].quotes = quotes;
    }

}

export const lazyLoadAsset = (philosopherName, callback) => {
    return new Promise((resolve, reject) => {
        const fileName = philosopherName.toLowerCase()
        retryTenTimes(() => import("../assets/quotes/" + fileName + ".json"))
            .then((data) => {
                callback && callback();
                addPhilosopherInGlobalData(philosopherName, data?.default)
                resolve();
            })
            .catch(e => reject(e));
    });
};

export const lazyLoadAllAssets = (callback) => {
    return new Promise((resolve, reject) => {
        const promiseArray = [];
        PHILOSOPHERS_DATA.forEach(({ value: philosopherName, fullName: philosopherFullName }) => {
            if (philosopherName !== "ALL") {
                const fileName = philosopherName.toLowerCase()
                const promise = retryTenTimes(() => import("../assets/quotes/" + fileName + ".json"))
                    .then((data) => {
                        callback && callback();
                        const convertedQuotes = convertQuoteArray(data?.default, philosopherFullName)
                        addPhilosopherInGlobalData("ALL", convertedQuotes)
                    })
                    .catch((e) => console.log(e));
                promiseArray.push(promise);
            }
        });

        Promise.all(promiseArray).then(resolve).catch(reject)
    });
};

export const getPhilosopherObjectIndex = (philosopherName) => PHILOSOPHERS_DATA.findIndex(({ value }) => value === philosopherName);


export const getPhilosopherData = (philosopherName) => PHILOSOPHERS_DATA.filter(({ value }) => value === philosopherName)[0]


export const getCurrentPhilosopherFullname = () => {
    const currentPhilosopherData = PHILOSOPHERS_DATA[getPhilosopherObjectIndex(currentPhilosopher)]
    return currentPhilosopherData.fullName;
}
