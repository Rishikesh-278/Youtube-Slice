// Get the current URL.
const url = window.location.href;

// Check if the URL is a YouTube video.
if (url.includes("youtube.com/watch")) {
  // Insert your extension code here.
} else {
  // Disable the extension if the user is not on a YouTube video.
  chrome.runtime.sendMessage("YOUR_EXTENSION_ID", {
    disable: true,
  });
}
