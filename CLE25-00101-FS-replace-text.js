// Function to replace text
function replaceText() {
    var originalText = document.querySelector('#viewer > main > div:nth-child(2) > div > div:nth-child(2) > form > div > div.form-text');
    var replacementText = document.createElement('div');
    replacementText.textContent = 'Answers to submitted questions will be distributed to registrants via email after the program.';
    replacementText.style.display = 'block';
    replacementText.setAttribute('aria-hidden', 'false');

    // Swap the text content
    originalText.textContent = replacementText.textContent;

    // Hide the original text from screen readers
    originalText.setAttribute('aria-hidden', 'true');
}

// Create a MutationObserver to watch for the element
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.addedNodes.length) {
            var targetNode = document.querySelector('#viewer > main > div:nth-child(2) > div > div:nth-child(2) > form > div > div.form-text');
            if (targetNode) {
                replaceText();
                observer.disconnect(); // Stop observing once the element is found and text is replaced
            }
        }
    });
});

// Start observing the document for changes
observer.observe(document.body, { childList: true, subtree: true });