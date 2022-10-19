<?php

if(isset($_POST['submitquestion'])) {
    $question = $_POST['question'];
    
    $subject = "uwu";
    $emailaddress = "skillama@outlook.com";
    $emailheaders = "From: Anonymous";
    $emailtext = "You've got mail!\n\n\n".$question;

    mail($emailaddress, $subject, $emailtext, $emailheaders);
    header("Location: aboutme.html?mailsend");
}