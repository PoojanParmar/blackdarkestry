let isRefreshing = false;

document.getElementById("startStopButton").addEventListener("click", () => {
  const refreshSpeed = parseInt(document.getElementById("refreshSpeed").value);

  if (refreshSpeed) {
    chrome.storage.sync.set({ refreshSpeed });
  }

  if (!isRefreshing) {
    chrome.runtime.sendMessage("start-refresh");
    document.getElementById("startStopButton").innerText = "Stop";
    isRefreshing = true;
  } else {
    chrome.runtime.sendMessage("stop-refresh");
    document.getElementById("startStopButton").innerText = "Start";
    isRefreshing = false;
  }
});
