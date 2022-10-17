const sendMessageId = document.getElementById("sendmessageid");
if (sendMessageId) {
  sendMessageId.onclick = function () {
    console.log("你点击了");
  };
}
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log("监听", request, sender, sendResponse);
});
