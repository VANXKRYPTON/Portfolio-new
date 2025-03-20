<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Email Configuration
    $to = "your-email@example.com";  // Change this to your email
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "Content-Type: text/plain; charset=UTF-8";
    $email_subject = "New Contact Form Submission: $subject";
    $email_body = "Name: $name\n".
                  "Email: $email\n".
                  "Phone: $phone\n".
                  "Message:\n$message";

    // Sending Email
    if (mail($to, $email_subject, $email_body, $headers)) {
        $email_status = "Email sent successfully!";
    } else {
        $email_status = "Email sending failed!";
    }

    // WhatsApp Message
    $whatsapp_message = "Name: $name%0AEmail: $email%0APhone: $phone%0AMessage: $message";
    $whatsapp_url = "https://api.whatsapp.com/send?phone=+917903740116=$whatsapp_message";  // Change 'your-whatsapp-number' to your number

    // Redirect back with success message
    header("Location: contact_success.html");
    exit();
} else {
    header("Location: contact_error.html");
    exit();
}
?>
