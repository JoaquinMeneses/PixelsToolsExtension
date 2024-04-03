import React from "react";
const viewAlert = async () => {
  let [tab] = await chrome.tabs.query({ active: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      let craftingNameContainer = document.querySelector(
        ".Crafting_detailsTitle__bGjKU"
      );
      let craftingName = craftingNameContainer.textContent;
      alert(craftingName);
      let craftingTimerContainer = document.querySelector(
        'div[style="background-color: rgb(251, 244, 187); border-radius: 8px; padding: 6px; font-size: 12px;"]'
      );
      let craftingTimer = craftingTimerContainer.textContent;
      alert(craftingTimer);
    },
  });
};

const App = () => {
  return (
    <main className="bg-black text-white min-w-80 min-h-[600px]">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button onClick={viewAlert}>Test</button>
    </main>
  );
};

export default App;
