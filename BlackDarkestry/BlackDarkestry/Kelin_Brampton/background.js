let intervalId;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ refreshSpeed: 500 });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message === "start-refresh") {
    chrome.storage.sync.get("refreshSpeed", ({ refreshSpeed }) => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const currentTab = tabs[0];
        if (intervalId) clearInterval(intervalId);
        intervalId = setInterval(() => {
          chrome.scripting.executeScript({
            target: { tabId: currentTab.id },
            files: ["content.js"]
          });
        }, refreshSpeed);
      });
    });
  } else if (message === "stop-refresh") {
    clearInterval(intervalId);
    intervalId = null;
  }
});
