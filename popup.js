document.getElementById("Open").addEventListener("click",async function () {
   const link = "https://www.linkedin.com/feed/";
   const likeCount = document.getElementById("likeCount").value;
   const commentCount = document.getElementById("commentCount").value;
   const message = document.getElementById("message").value;
   if(likeCount && commentCount && message)
   {
      if(likeCount > 0 && commentCount > 0)
      {
         chrome.storage.local.set({likeCount: likeCount,commentCount:commentCount,message:message});
         chrome.tabs.create({
            url: link
            }, function (newTab) {
            chrome.scripting.executeScript({
               target: {tabId: newTab.id},
               files: ['content.js'],
            });
         });
      }
      else
      {
         if(likeCount == 0 && commentCount == 0)
         {
            alert("Please enter like count and comment count");
         }
         else if(likeCount == 0)
         {
            alert("Please enter valid like count");
         }
         else
         {
            alert("Please enter valid comment count");
         }
      }
   }
   else
   {
      window.alert("Please enter all the fields");
   }
});