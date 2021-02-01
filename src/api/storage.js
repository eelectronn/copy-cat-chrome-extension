let setDataApi, getDataApi

if (process.env.NODE_ENV === 'production') {
    setDataApi = async (data) => {
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

    getDataApi = async () => {
        return new Promise((resolve, reject) => {
            try {
                chrome.storage.sync.get(['data'], (result) => {
                    resolve(result.data ? result.data : [])
                })
            }
            catch (e) {
                reject(e)
            }
        })
    }
}
else {
    let textContent = [
        {
            title: 'Text 1',
            text: 'This is text 1'
        },
        {
            title: 'Text number two is here. I am a little longer title here.',
            text: 'This is text 2'
        },
        {
            title: 'Text 3',
            text: 'This is text 3'
        },
        {
            title: 'This is text #4',
            text: 'This is text 4'
        },
        {
            title: 'Number five here',
            text: 'This is text 5'
        },
    ]

    setDataApi = async (data) => {
        return new Promise((resolve, reject) => {
            try {
                textContent = data
                resolve()
            }
            catch (e) {
                reject(e)
            }
        })
    }

    getDataApi = async () => {
        return new Promise((resolve, reject) => {
            try {
                resolve(textContent)
            }
            catch (e) {
                reject(e)
            }
        })
    }
}

export {
    setDataApi,
    getDataApi
}