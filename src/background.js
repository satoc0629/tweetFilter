const backgroundService = () => {
    chrome.contextMenus.create(
        {
            "id": "fromTweet",
            "contexts": ["all"],
            "documentUrlPatterns": ["https://twitter.com/*"],
            "title": "From この人のツイートを表示する。"
        }
    )
    chrome.contextMenus.create(
        {
            "id": "toTweet",
            "contexts": ["all"],
            "documentUrlPatterns": ["https://twitter.com/*"],
            "title": "To この人へのツイートを表示する。"
        }
    )
};
const func = (info, tab) => {
    if (info.menuItemId === "fromTweet") {
        const targetId = info.pageUrl.split("/")[3]
        const url = `https://twitter.com/search?q=from%3A${targetId}&src=typed_query&f=live`
        chrome.tabs.update(tab.id, {
            url: url
        })
    }
    if (info.menuItemId === "toTweet") {
        const targetId = info.pageUrl.split("/")[3]
        const url = `https://twitter.com/search?q=to%3A${targetId}&src=typed_query&f=live`
        chrome.tabs.update(tab.id, {
            url: url
        })
    }
}
chrome.contextMenus.onClicked.addListener(func)

chrome.runtime.onInstalled.addListener(backgroundService);
chrome.runtime.onStartup.addListener(backgroundService);
chrome.runtime.onSuspend.addListener(() => console.log(`onSuspend called.`))
chrome.runtime.onSuspendCanceled.addListener(() => console.log(`onSuspendCanceled called.`))
chrome.runtime.onUpdateAvailable.addListener(() => console.log(`onUpdateAvailable called.`))
chrome.runtime.onRestartRequired.addListener(() => console.log(`onRestartRequired called.`))
chrome.runtime.onMessageExternal.addListener(() => console.log(`onMessageExternal called.`))
chrome.runtime.onMessage.addListener(() => console.log(`onMessage called.`))
chrome.runtime.onConnectExternal.addListener(() => console.log(`onConnectExternal called.`))
chrome.runtime.onConnect.addListener(() => console.log(`onConnect called.`))
chrome.runtime.onBrowserUpdateAvailable.addListener(() => console.log(`onBrowserUpdateAvailable called.`))
// chrome OS
// chrome.runtime.onConnectNative.addListener(() => console.log(`onConnectNative called.`))
