window.addEventListener('message', async (event) => {
    console.log(event)
    if (event.source !== window) return
    if (event.data.type && (event.data.type === 'CREATE')) {
        try {
            chrome.storage.sync.set({
                data: event.data.data
            }, () => {
                window.postMessage({
                    type: 'SET_SUCCESS'
                }, '*')
            })
        }
        catch (err) {
            window.postMessage({
                type: 'SET_FAILURE',
                error: err
            }, '*')
        }
    }
    if (event.data.type && (event.data.type === 'GET')) {
        try {
            chrome.storage.sync.get(['data'], (result) => {
                window.postMessage({
                    type: 'GET_SUCCESS',
                    data: result.data
                }, '*')
            })
        }
        catch (err) {
            window.postMessage({
                type: 'GET_FAILURE',
                error: err
            }, '*')
        }
    }
})

// window.addEventListener('message', (event) => console.log(event))
