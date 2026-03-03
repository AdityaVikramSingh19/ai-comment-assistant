AI Comment Assistant (Chrome Extension)
About This Project

This is a Chrome extension that helps generate AI-powered comment suggestions on Reddit.

When you open a Reddit post and click inside the comment box, a floating AI button appears.
When you click the button, it generates multiple reply suggestions.
You can select one, and it automatically inserts the text into the comment box.

This project was built to improve my JavaScript and browser extension skills.

What It Can Do

Detect Reddit comment box automatically

Extract post content

Show a floating AI button

Generate multiple styled replies

Insert selected reply into Reddit editor

Store OpenAI API key securely using Chrome storage

How It Works

The extension has three main parts:

1. content.js

Runs inside Reddit pages.
It:

Detects the comment box

Adds the floating AI button

Extracts post content

Displays reply popup

Inserts selected text into the editor

2. background.js

Handles API requests.
It:

Reads the saved API key

Sends request to OpenAI

Returns generated replies

The API key is never exposed to the webpage.

3. popup.html

Simple dashboard to:

Enter OpenAI API key

Save it using Chrome storage

How To Use

Load the extension in Chrome (Developer Mode → Load Unpacked).

Open the extension popup.

Enter your OpenAI API key.

Open a Reddit post.

Click inside the comment box.

Click the floating AI button.

Select a reply.

Post it manually.

Why I Built This

I wanted to:

Practice DOM manipulation

Learn how Chrome extensions work

Understand shadow DOM and dynamic websites

Work with background scripts and message passing

Integrate AI APIs securely

This project helped me understand how modern web apps like Reddit use React and shadow DOM.

What I Learned

How to detect elements in dynamic pages

How to handle shadow DOM

Why React re-renders can remove injected elements

Why API keys should not be stored in content scripts

How Chrome message passing works

How to insert text into a rich text editor properly

Future Improvements

Add tone selector (funny, serious, analytical)

Add daily usage counter

Add loading animation

Improve UI styling

Support Instagram

Disclaimer

This tool does not auto-post comments.
All replies must be manually selected and posted by the user.