function resetDefaultSuggestion() {
    chrome.omnibox.setDefaultSuggestion({
    description: "Type in a particular subreddit you want to visit."
    });
}
resetDefaultSuggestion();

chrome.omnibox.onInputEntered.addListener(function(text) {
    var url = "https://reddit.com/r/" + text; // needs https to work!
    chrome.tabs.query({'active': true, 'currentWindow': true}, function(tabs) {
        chrome.tabs.update(tabs[0].id, {'url': url});
    });
});
  