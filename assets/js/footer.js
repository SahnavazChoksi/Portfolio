// JavaScript for Newsletter Form
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents form from submitting by default
    const emailInput = document.querySelector('input[type="email"]');
    const email = emailInput.value;

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Example: Simulate form submission
    alert('Thank you for subscribing!');
    emailInput.value = ''; // Clear the input after submission
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern
    return re.test(email);
}
