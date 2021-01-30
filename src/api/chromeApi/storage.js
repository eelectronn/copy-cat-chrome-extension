const setChromeData = async (data) => {
    return new Promise((resolve, reject) => {
        try {
            chrome.storage.sync.set({ data }, () => {
                resolve()
            })
        }
        catch (e) {
            reject(e)
        }
    })
}

const getChromeData = async () => {
    return new Promise((resolve, reject) => {
        try {
            chrome.storage.sync.get(['data'], (result) => {
                resolve(result.data)
            })
        }
        catch (e) {
            reject(e)
        }
    })
}

export {
    getChromeData,
    setChromeData
}
