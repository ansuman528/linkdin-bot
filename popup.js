document.getElementById("Open").addEventListener("click",async function () {
   const link = "https://www.linkedin.com/feed/";
   const likeCount = document.getElementById("likeCount").value;
   const commentCount = document.getElementById("commentCount").value;
   chrome.storage.local.set({likeCount: likeCount,commentCount:commentCount});
   chrome.tabs.create({
         url: link
         }, function (newTab) {
         chrome.scripting.executeScript({
            target: {tabId: newTab.id},
            files: ['content.js'],
         });
      });
});