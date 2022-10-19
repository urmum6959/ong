<?php

if(isset($_POST['submitquestion'])) {
    $question = $_POST['question'];
    $subject = $_POST['uwu'];
    
    $emailaddress = $_POST['skillama@outlook.com'];
    $emailheaders = $_POST['From: Anonymous'];
    $emailtext = $_POST["You've got mail!\n".$question];

    mail($emailaddress, $subject, $emailtext, $emailheaders);
    header("Location: aboutme.html?mailsend");
}