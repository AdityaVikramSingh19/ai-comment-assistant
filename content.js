console.log("AI Comment Assistant Loaded");
function detectCommentBox() {
    const commentBox = document.querySelector(
        '[contenteditable="true"][role="textbox"][aria-placeholder="Join the conversation"]'
    );

    if (commentBox) {
        console.log("Main Reddit comment box detected");
        addAIButton(commentBox);
    }
}

function addAIButton() {
    if (document.getElementById("ai-comment-btn")) return;

    const button = document.createElement("div");
    button.innerText = "AI";
    button.id = "ai-comment-btn";

    button.style.position = "fixed";
    button.style.bottom = "120px";
    button.style.right = "30px";
    button.style.width = "50px";
    button.style.height = "50px";
    button.style.background = "#ff4500";
    button.style.color = "white";
    button.style.display = "flex";
    button.style.alignItems = "center";
    button.style.justifyContent = "center";
    button.style.borderRadius = "50%";
    button.style.cursor = "pointer";
    button.style.zIndex = "9999999";
    button.style.boxShadow = "0 4px 10px rgba(0,0,0,0.4)";
    button.style.fontWeight = "bold";

    document.body.appendChild(button);

    console.log("Floating AI button added");
    
    button.addEventListener("click", () => {
    console.log("AI button clicked");
});

button.addEventListener("click", () => {
    console.log("AI button clicked");

    const postText = getPostContent();

    if (!postText) {
        console.log("Post content not found");
        return;
    }

    showPopup(postText);
});


}

function getPostContent() {
    const article = document.querySelector('[property="schema:articleBody"]');

    if (!article) {
        console.log("Article body not found in main DOM");
        return null;
    }

    return article.innerText.trim();
}


function insertComment(text) {
    const commentBox = document.querySelector(
        '[contenteditable="true"][role="textbox"][aria-placeholder="Join the conversation"]'
    );

    if (!commentBox) {
        console.log("Comment box not found");
        return;
    }

    commentBox.focus();

    // Clear existing content properly
    document.execCommand("selectAll", false, null);
    document.execCommand("delete", false, null);

    // Insert text like a real user
    document.execCommand("insertText", false, text);

    console.log("Text inserted via execCommand");
}

function showPopup(postText) {
    const existing = document.getElementById("ai-popup");
    if (existing) existing.remove();

    const popup = document.createElement("div");
    popup.id = "ai-popup";

    popup.style.position = "fixed";
    popup.style.bottom = "200px";
    popup.style.right = "30px";
    popup.style.width = "320px";
    popup.style.maxHeight = "400px";
    popup.style.overflowY = "auto";
    popup.style.background = "#1e1e1e";
    popup.style.color = "white";
    popup.style.padding = "15px";
    popup.style.borderRadius = "10px";
    popup.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";
    popup.style.zIndex = "9999999";
    popup.style.fontSize = "14px";

    const mockReplies = [
        "Insightful take: I think the core issue here is about long-term leverage rather than short-term output.",
        "Funny vibe: Bro just unlocked the DLC of real life debugging 😂",
        "Builder mindset: This is exactly why shipping small iterations beats overthinking.",
        "Supportive tone: Appreciate you sharing this — a lot of people silently struggle with the same thing."
    ];

    popup.innerHTML = `<h4 style="margin-top:0;">Choose a reply</h4>`;

    mockReplies.forEach((reply) => {
        const option = document.createElement("div");
        option.innerText = reply;
        option.style.marginBottom = "10px";
        option.style.padding = "8px";
        option.style.background = "#2a2a2a";
        option.style.borderRadius = "6px";
        option.style.cursor = "pointer";

        option.addEventListener("click", () => {
            insertComment(reply);
            popup.remove();
        });

        popup.appendChild(option);
    });

    const closeBtn = document.createElement("button");
    closeBtn.innerText = "Close";
    closeBtn.style.marginTop = "10px";
    closeBtn.onclick = () => popup.remove();

    popup.appendChild(closeBtn);

    document.body.appendChild(popup);
}

setInterval(detectCommentBox, 2000);