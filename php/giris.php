<?php

// Doğru e-posta adresi ve şifreyi tanımla yaptım
$correct_email = "g231210551@sakarya.edu.tr";
$correct_password = "g231210551";

// POST yöntemiyle gönderilen e-posta ve şifreyi al
$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';

// Gönderilen e-posta ve şifrenin doğru olup olmadığını kontrol etme kısmı
if ($email === $correct_email && $password === $correct_password) {
    // Kimlik doğrulama başarılıysa hoş geldiniz mesajı gösterir
    $Message = "g231210551, Hoş Geldiniz";
    echo "<script type = 'text/javascript'> alert('$Message');</script>";
   
    // Kısa bir gecikmeden sonra ana sayfaya yönlendirir
    echo "<script type='text/javascript'>setTimeout(function(){ window.location.href = 'https://ahmadalturuk.github.io/index.html?status=success'; }, 500);</script>";
    exit; // Yönlendirmeden sonra çıkış yap
} else {
    // Kimlik doğrulama başarısız ies aşağdaki mesajı gössterir
   $Message = "Kimlik doğrulama başarısız. Lütfen e-posta ve şifrenizi kontrol edin.";
   
    echo "<script type = 'text/javascript'> alert('$Message');</script>";

     // Kısa bir gecikmeden sonra giriş sayfayasına yönlendirir
    echo "<script type='text/javascript'>setTimeout(function(){ window.location.href = 'https://ahmadalturuk.github.io/giris.html?status=failed'; }, 500);</script>";
    exit; // Yönlendirmeden sonra çıkış yap
}
?>