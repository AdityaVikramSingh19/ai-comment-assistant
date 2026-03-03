chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === "GENERATE_REPLIES") {
        generateReplies(request.postText)
            .then(replies => sendResponse({ success: true, replies }))
            .catch(error => sendResponse({ success: false, error: error.message }));

        return true; // Required for async response
    }
});

async function generateReplies(postText) {
    const { openai_api_key } = await chrome.storage.local.get("openai_api_key");

    if (!openai_api_key) {
        throw new Error("API key not set.");
    }

    const prompt = `
You are an expert Reddit contributor.

Generate 4 short high-quality comment replies to this post.
Each reply must:
- Sound human
- Be under 80 words
- Have a different tone (insightful, funny, supportive, analytical)

Return ONLY a JSON array of strings.

Post:
"""
${postText.slice(0, 1000)}
"""
`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + openai_api_key
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [
                { role: "user", content: prompt }
            ],
            temperature: 0.8
        })
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error?.message || "API request failed");
    }

    const text = data.choices[0].message.content;

    return JSON.parse(text);
}