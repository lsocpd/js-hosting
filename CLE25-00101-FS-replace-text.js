// Function to safely replace text content
const replaceText = () => {
    const originalText = document.querySelector('#viewer > main > div:nth-child(2) > div > div:nth-child(2) > form > div > div.form-text');

    // Ensure the target element exists before proceeding
    if (originalText) {
        originalText.textContent = 'Answers to submitted questions will be distributed to registrants via email after the program.'; 

        // Make sure the replacement text is accessible and visible to screen readers
        originalText.style.display = 'block';
        originalText.setAttribute('aria-hidden', 'true');
    } else {
        console.warn('Target element not found.');
    }
};

// Create a MutationObserver to watch for changes in the DOM
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
            const targetNode = document.querySelector('#viewer > main > div:nth-child(2) > div > div:nth-child(2) > form > div > div.form-text');
            if (targetNode) {
                replaceText(); // Perform the replacement
                observer.disconnect(); // Stop observing once the element is found and text is replaced
            }
        }
    });
});

// Start observing changes in the body
observer.observe(document.body, { childList: true, subtree: true });
