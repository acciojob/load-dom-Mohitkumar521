   function verifyDOMLoaded() {
            console.log("1) Loads DOM content successfully");
        }

        // Function to verify that the body element is empty
        function verifyEmptyBody() {
            const body = document.body;

            if (body.childNodes.length === 0) {
                console.log("2) Verifies that the body element is empty");
            }
        }

        // Add an event listener for DOMContentLoaded
        document.addEventListener("DOMContentLoaded", function() {
            verifyDOMLoaded();
            verifyEmptyBody();
        });