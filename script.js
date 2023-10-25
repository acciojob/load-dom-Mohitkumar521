//your JS code here. If required.
    // Function to write "DOM load success" to the empty body tag
        function writeSuccessMessage() {
            const body = document.body;

            // Check if the body is empty
            if (body.childNodes.length === 0) {
                // Create a text node containing the message
                const textNode = document.createTextNode("DOM load success");

                // Append the text node to the body
                body.appendChild(textNode);
            }
        }

        // Add an event listener to detect when the DOM is loaded
        document.addEventListener("DOMContentLoaded", writeSuccessMessage);