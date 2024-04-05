import React from 'react'

let craftingDataArray = [];

window.addEventListener('load', () => {
    const savedCraftingDataArray = localStorage.getItem('craftingDataArray');
    if (savedCraftingDataArray) {
        craftingDataArray = JSON.parse(savedCraftingDataArray);
    }
});

const getCraftingInfo = async () => {
    let [tab] = await chrome.tabs.query({ active: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
            let craftingNameContainer = document.querySelector(
                ".Crafting_detailsTitle__bGjKU"
            );
            let craftingName = craftingNameContainer.textContent;
            let craftingTimerContainer = document.querySelector(
                'div[style="background-color: rgb(251, 244, 187); border-radius: 8px; padding: 6px; font-size: 12px;"]'
            );
            let craftingTimer = craftingTimerContainer.textContent;
            chrome.runtime.sendMessage({
                craftingData: {
                    name: craftingName,
                    timer: craftingTimer
                }
            });
        },
    });
};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.craftingData) {
        craftingDataArray.push(message.craftingData);
        saveCraftingDataArrayToLocal();
    }
});

function saveCraftingDataArrayToLocal() {
    alert("DATA SAVED: " + JSON.stringify(craftingDataArray));
    localStorage.setItem('craftingDataArray', JSON.stringify(craftingDataArray));
}

const getResourcesInfo = async () => {
    let [tab] = await chrome.tabs.query({ active: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
            let resourceNameContainer = document.querySelector(".LookAtBubble_lookAtBubble___pd4a");
            resourceName = resourceNameContainer.textContent;
            alert(resourceName);
        }
    });
}



const Timers = () => {
    return (
        <div>
            <button onClick={getCraftingInfo}>Get crafting information</button>
            <button onClick={getResourcesInfo}>Get resource information</button>
        </div>
    )
}

export default Timers