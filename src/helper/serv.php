<!DOCTYPE html>
<html>
<body>

<h1>My first PHP page</h1>

<?php
function sendMessage($mobile,$message)
{
  $messages="http://Loginsms.ewyde.com/rest/services/sendSMS/sendGroupSms?AUTH_KEY=NzY0Zjc2NmI3NjVhNmQ2NjZmNTk3NDYxNDk2ZTMxNTg=&message=".$message."&senderId=WINGSM&routeId=11&mobileNos=".$mobile."&smsContentType=english"; 
  $url=$messages;
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, $url);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  $output = curl_exec($ch);
  return true;
}

$mobile = "7062019342";
$name = "maksood";
$user_id = "54";
$otp = 5644654;

$message = urlencode("Dear Customer, OTP for verifying your THE FANSTREET account is ".$otp." DO NOT share this with anyone.");			

sendMessage($mobile,$message);

?> 

</body>
</html>
