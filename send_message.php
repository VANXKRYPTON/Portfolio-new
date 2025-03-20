<?php
require 'vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $phone = htmlspecialchars($_POST["phone"]);
    $subject = htmlspecialchars($_POST["subject"]);
    $message = htmlspecialchars($_POST["message"]);

    // Email Details
    $to = "adityakumar08092004@gmail.com"; // Change to your email
    $email_subject = "New Contact Form Submission: $subject";
    $email_body = "Name: $name\nEmail: $email\nPhone: $phone\nMessage:\n$message";

    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);
    
    try {
        //Server settings
        $mail->isSMTP();                                            // Send using SMTP
        $mail->Host       = 'smtp.example.com';                   // Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
        $mail->Username   = 'SMTP CONFIGURATION';             // SMTP username
        $mail->Password   = 'ssyp otre alsg xavw';                       // SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;      // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
        $mail->Port       = 587;                                   // TCP port to connect to

        //Recipients
        $mail->setFrom($email, $name);
        $mail->addAddress($to);                                   // Add a recipient

        // Content
        $mail->isHTML(true);                                      // Set email format to HTML
        $mail->Subject = $email_subject;
        $mail->Body    = nl2br($email_body);

        // Send Email
        $mail->send();
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }

    // Send WhatsApp Message
    $whatsapp_number = "917903740116"; // Use international format e.g., 919876543210
    $whatsapp_message = urlencode("New Contact Form Submission:\nName: $name\nEmail: $email\nPhone: $phone\nMessage: $message");
    
    $whatsapp_url = "https://api.whatsapp.com/send?phone=$whatsapp_number&text=$whatsapp_message";

    // Redirect to WhatsApp
    header("Location: $whatsapp_url");
    exit();
}
?>
