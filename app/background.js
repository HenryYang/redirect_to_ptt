function handleUpdated(tabId, changeInfo, tabInfo) {
  if (changeInfo.url) {  
    var original_url = changeInfo.url;
    var moptt_url = original_url.startsWith("https://moptt.tw/p/");
    console.log(original_url)

    if (moptt_url) {
      var new_url = original_url.slice(19).replace(/\.M/i, '/M').split("?fbclid");
      var ptt_url = 'https://www.ptt.cc/bbs/' + new_url[0] + '.html'
      console.log(ptt_url)
      updating = chrome.tabs.update(tabId,{url: ptt_url});
    
    } 
  }
}

chrome.tabs.onUpdated.addListener(handleUpdated);