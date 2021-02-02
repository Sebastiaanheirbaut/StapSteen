<?php
//bevestigingsmail van registratie naar emailadres sturen
$to = "mvn2401@hotmail.com";
$naam = $_POST['naam'];
$subject = $_POST['onderwerp'];
$message = wordwrap($naam, $_POST['message'], 70, "\r\n");
$from = $_POST['email'];


//HTMl headers toevoegen
// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From:" . $from;

mail($to, $subject, $message, $headers);
?>