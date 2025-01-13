// Function to safely replace text content
function replaceText() {
    var originalText = document.querySelector('#viewer > main > div:nth-child(2) > div > div:nth-child(2) > form > div > div.form-text');

    // Ensure the target element exists before proceeding
    if (originalText) {
        var replacementText = document.createElement('div');
        replacementText.textContent = 'Answers to submitted questions will be distributed to registrants via email after the program.'; // Ensure this is safe

        // Make sure the replacement text is accessible and visible to screen readers
        replacementText.style.display = 'block';
        replacementText.setAttribute('aria-hidden', 'false');

        // Replace the original text content
        originalText.textContent = replacementText.textContent;

        // Hide the original text from screen readers
        originalText.setAttribute('aria-hidden', 'true');
    } else {
        console.warn('Target element not found.');
    }
}

// Create a MutationObserver to watch for changes in the DOM
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.addedNodes.length) {
            var targetNode = document.querySelector('#viewer > main > div:nth-child(2) > div > div:nth-child(2) > form > div > div.form-text');
            if (targetNode) {
                replaceText(); // Perform the replacement
                observer.disconnect(); // Stop observing once the element is found and text is replaced
            }
        }
    });
});

// Start observing changes in the body
observer.observe(document.body, { childList: true, subtree: true });
