const readLocalStorage = async (key) => {
    return new Promise((resolve, reject) => {
      chrome.storage.local.get([key], function (result) {
        if (result[key] === undefined) {
          reject();
        } else {
          resolve(result[key]);
        }
      });
    });
};
function makeLike(likeCount,content)
{
    if(content)
    {
        for(let i=0;i<likeCount;i++)
        {
            const container = content[i].querySelector("div.feed-shared-social-actions.feed-shared-social-action-bar.social-detail-base-social-actions.feed-shared-social-action-bar--full-width.feed-shared-social-action-bar--has-social-counts > span.reactions-react-button.feed-shared-social-action-bar__action-button");
            if(container)
            {
                const temp = container.getElementsByTagName("button");
                temp[0].click();
            }   
        }
    }
}
function clickFunction()
{
    console.log("i am here");
    const submitButton = document.querySelector("div.comments-comment-box__form-container.flex-grow-1 > form > div:nth-child(2)")
    if(submitButton)
    {
        console.log("working");
        const btn = submitButton.getElementsByTagName("button");
        btn[0].click();
    }
}
function makeComment(commentCount,content)
{
    const  message = "Commenting for better reach";
    if(content)
    {
        for(let i=0;i<commentCount;i++)
        {
            const editBox = content[i].querySelector("div.comments-comment-box__form-container.flex-grow-1 > form > div > div > div.comments-comment-box-comment__text-editor > div > div.editor-container > div > div > div.ql-editor.ql-blank");
            if(editBox)
            {
                editBox.innerHTML = message;
                setTimeout(clickFunction, 2000);
            }
        }
    }
}
async function myScript()
{
    const likeCount = await readLocalStorage('likeCount');
    const commentCount = await readLocalStorage('commentCount');
    const content = document.querySelectorAll("#main > div:nth-child(3) > div > div.scaffold-finite-scroll__content:first-child > div");
    if(content)
    {
        makeLike(likeCount,content);
        makeComment(commentCount,content);
    }
}
window.addEventListener("load", myScript);