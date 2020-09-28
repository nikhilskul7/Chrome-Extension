console.log('Hello')
chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked()
{
    console.log("button Clicked");
}