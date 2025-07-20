const titleDisplay = document.getElementById("title");
const titleButton = document.getElementById("fetchBtn");
const copyBtn = document.getElementById("copyBtn");

titleButton.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    if (activeTab) {
      titleDisplay.textContent = activeTab.title;
    } else {
      titleDisplay.textContent = "No active tab found.";
    }
  });
});

copyBtn.addEventListener("click", () => {
  const title = titleDisplay.textContent;
  if (title) {
    navigator.clipboard.writeText(title);
  }
});
