<?php
if(!empty($_POST["send"])) {
	$userName = $_POST["full-name"];
  $userEmail = $_POST["email"];
	$userPhone = $_POST["phone"];
	$userMessage = $_POST["message"];
	$toEmail = "mlukaszczyk977@gmail.com";
  
	$mailHeaders = "Name: " . $userName .
	"\r\n Email: ". $userEmail  . 
	"\r\n Phone: ". $userPhone  . 
	"\r\n Message: " . $userMessage . "\r\n";

	if(mail($toEmail, $userName, $mailHeaders)) {
	    $message = "Your contact information is received successfully.";
	}
}
?>