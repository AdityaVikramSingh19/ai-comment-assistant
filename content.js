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
    const postText = getPostContent();

    if (postText) {
        console.log("Post content extracted:");
        console.log(postText);
    } else {
        console.log("Post content not found");
    }
});


}

function getPostContent() {
    const postComponent = document.querySelector("shreddit-post-text-body");
    if (!postComponent) {
        console.log("Post component not found");
        return null;
    }

    const shadow = postComponent.shadowRoot;
    if (!shadow) {
        console.log("Shadow root not found");
        return null;
    }

    const article = shadow.querySelector('[property="schema:articleBody"]');
    if (!article) {
        console.log("Article body not found inside shadow");
        return null;
    }

    return article.innerText.trim();
}

setInterval(detectCommentBox, 2000);