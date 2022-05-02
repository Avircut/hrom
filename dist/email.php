<?php
     if (isset($_POST['submit'])) {
        $name = $_REQUEST['name'];
        $email = $_REQUEST['phone'];
        $message = $_REQUEST['msg'];

      // Set your email address where you want to receive emails. 
       $to = 'lomoff.slaw@yandex.ru';
       $subject = 'Contact Request From Website';
       $headers = "From: ".$name." <".$email."> \r\n";
       $send_email = mail($to,$subject,$message,$headers);

       echo ($send_email) ? 'success' : 'error';

  }?>