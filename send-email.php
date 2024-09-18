<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Debugging output
    error_log("Name: $name");
    error_log("Email: $email");
    error_log("Message: $message");

    // Validate email
    if (empty($email)) {
        echo 'Email cannot be empty.';
        exit;
    }

    // Email settings
    $to = 'sahnavazchoksi382@gmail.com'; // Replace with your email address
    $subject = 'Contact Form Message';
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo 'Message sent successfully.';
    } else {
        echo 'Failed to send message.';
    }
} else {
    echo 'Invalid request method.';
}
?>
