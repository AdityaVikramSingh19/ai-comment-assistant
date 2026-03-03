document.getElementById("saveKeyBtn").addEventListener("click", () => {
    const apiKey = document.getElementById("apiKeyInput").value.trim();

    if (!apiKey) {
        document.getElementById("statusText").innerText = "Please enter a valid key.";
        return;
    }

    chrome.storage.local.set({ openai_api_key: apiKey }, () => {
        document.getElementById("statusText").innerText = "API key saved successfully.";
        document.getElementById("apiKeyInput").value = "";
    });
});