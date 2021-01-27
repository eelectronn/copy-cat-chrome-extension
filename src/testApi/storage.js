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

const setChromeData = async (data) => {
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

const getChromeData = async () => {
    return new Promise((resolve, reject) => {
        try {
            resolve(textContent)
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
