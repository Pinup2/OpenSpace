window.onload = function() {
    let inputs = document.querySelectorAll('input');
    let passwordInput = document.querySelector('#control-input');
    let okButton = document.getElementById('ok');
    let launchBtn = document.querySelector('#launch');

    // Initially disable all inputs except the password and "OK" button
    inputs.forEach(input => {
        if (input !== passwordInput && input !== okButton) {
            input.disabled = true;
        }
    });

    // Enable inputs on correct password entry
    okButton.addEventListener('click', () => {
        if (passwordInput.value === 'TrustNo1') {
            inputs.forEach(input => {
                input.disabled = false;
            });
            passwordInput.disabled = true;
            okButton.disabled = true;
            // Ensure launch button is initially disabled
            launchBtn.disabled = true;
        }
    });

    // Function to check state of checkboxes and range inputs
    function checkState() {
        let checkboxes = document.querySelectorAll(".check-buttons input[type='checkbox']");
        let rangeInputs = document.querySelectorAll(".levers input[type='range']");
        let allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
        let allRangesAtMax = Array.from(rangeInputs).every(range => parseInt(range.value) === parseInt(range.max));

        launchBtn.disabled = !(allChecked && allRangesAtMax);
    }

    // Attach event listeners to checkboxes and range inputs
    document.querySelectorAll(".check-buttons input[type='checkbox'], .levers input[type='range']").forEach(element => {
        element.onchange = checkState; // Use .onchange directly
    });

    // Launch button event listener for animation
    launchBtn.addEventListener('click', () => {
        let rocket = document.getElementById("rocket"); // Ensure you have an element with id="rocket"
        if (rocket) {
            rocket.animate([
                { transform: 'translateY(0)' },
                { transform: 'translateY(-100vh)' }
            ], {
                duration: 4000, // Adjust the duration as needed
                fill: 'forwards' // Keep the rocket at the final state
            });
        }
    });

    // Perform an initial state check
    checkState();
};
