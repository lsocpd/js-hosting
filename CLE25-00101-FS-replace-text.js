document.addEventListener('DOMContentLoaded', () => {
    // Function to safely replace text content on the parent page
    const replaceText = () => {
        const originalText = window.parent.document.querySelector('#viewer > main > div:nth-child(2) > div > div:nth-child(2) > form > div > div.form-text');

        // Ensure the target element exists and has text content
        if (originalText && originalText.textContent.trim().length > 0) {
            originalText.textContent = 'Answers to submitted questions will be distributed to registrants via email after the program.'; 

            // Make sure the replacement text is accessible and visible to screen readers
            originalText.style.display = 'block';
            originalText.setAttribute('aria-hidden', 'true');
        } else {
            console.warn('Target element not found or no text to replace.');
        }
    };

    // Call the function once the DOM is loaded
    replaceText();
});
