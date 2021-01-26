console.log('Hello background extension')

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(message)
    console.log(sender)
    let currTab
    chrome.tabs.create({ url: 'index.html' })
    sendResponse(currTab)
})
