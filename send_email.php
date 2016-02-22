<?php

include "log.php";

if(isset($_POST["comments"])) {
	$email_to = "tcroxson@gmail.com";
	$email = (isset($_POST["email"])) ? $_POST["email"] : "";
	$comments = $_POST["comments"];
	$subject = "Email from portfolio website";
	$headers = "From: <" . $email . ">" . "\r\nReply-To: " . $email;

	logIt($_POST);

	$sent = @mail($email_to, $subject, $comments, $headers);
	echo $sent ? "Mail sent" : "Mail failed";
}

?>