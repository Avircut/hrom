<?php
        $name = $_REQUEST['name'];
        $phone = $_REQUEST['phone'];
        $msg= $_REQUEST['msg'];

      // Set your email address where you want to receive emails. 
       $to = 'mymail@gmail.com';
       $subject = 'Contact Request From Website';
       $headers = "From: ".$name." <".$phone."> \r\n";
       $send_email = mail($to,$subject,$msg,$headers);

       echo ($send_email) ? 'success' : 'error';

  ?>