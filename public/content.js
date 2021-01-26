console.log('Hello Extension!')

chrome.runtime.sendMessage({ greetings: 'hello' }, (response) => {
    console.log(response)
})
