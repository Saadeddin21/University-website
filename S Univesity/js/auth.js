// Function to show the selected form
function showForm(formType) {
    // Hide all forms
    document.querySelectorAll('.form-container').forEach(form => {
        form.style.display = 'none';
    });

    // Show the selected form
    document.getElementById(`${formType}-form`).style.display = 'block';
}

// Add event listeners to all login forms
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', async (e) => {
        e.preventDefault(); // Prevent form submission

        // Get the role from the form's data-role attribute
        const role = form.getAttribute('data-role');

        // Get input values
        const username = form.querySelector('input[type="text"]').value;
        const password = form.querySelector('input[type="password"]').value;

        // Fetch the corresponding JSON file
        const response = await fetch(`data/${role}_login.json`);
        const data = await response.json();

        // Validate credentials
        if (username === data.username && password === data.password) {
            // Redirect to the corresponding dashboard
            window.location.href = `html/${role}_dashboard.html`;
        } else {
            // Show error message
            document.getElementById(`${role}-error`).textContent = 'Invalid username or password!';
        }
    });
});