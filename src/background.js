chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create(
        {
            "id": "tweetFilter",
            "contexts": ["page"],
            "documentUrlPatterns": ["https://twitter.com/*"],
            "title": "この人のツイートを表示する。"
        }
    )
    const func = (info, tab) => {
        console.log("context menu clicked.")
        const targetId = info.pageUrl.split("/")[3]
        const url = `https://twitter.com/search?q=from%3A${targetId}&src=typed_query&f=live`
        console.log(`, targetId:${targetId} , target url :${url}`)
        chrome.tabs.update(tab.id, {
            url: url
        })
    }
    chrome.contextMenus.onClicked.addListener(func)
});
