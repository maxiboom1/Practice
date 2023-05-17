"use strict";

( () => {
    const hideButton = document.getElementById("hideButton");

    hideButton.addEventListener("click", async ()=>{

        const tabs = await chrome.tabs.query({active: true});
        
        chrome.scripting.executeScript({
            
            target: { tabId: tabs[0].id },
            files: ["content/content.js", "content/jquery-3.7.0.min.js"]

        });
        

    })

})();
