<?php
// Define the correct email and password
$correct_email = "g231210551@sakarya.edu.tr";
$correct_password = "g231210551";

$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';

if ($email === $correct_email && $password === $correct_password) {
    // Authentication successful
    // Redirect to index.html with a parameter indicating successful login
    header("Location: https://AhmadAlturuk.github.io/index.html?status=success");
    exit; // Make sure to exit after redirecting
} else {
    // Authentication failed
     header("Location: https://AhmadAlturuk.github.io/login.html?status=success");
      exit;
}
?>