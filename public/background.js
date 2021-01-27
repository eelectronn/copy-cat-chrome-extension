chrome.browserAction.onClicked.addListener(() => {
    chrome.tabs.create({ url: 'index.html' })
    console.log('clicked')
})
