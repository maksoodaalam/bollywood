use strict;
use LWP::UserAgent;
use HTTP::Request::Common;
 
my $apikey = 'NzY0Zjc2NmI3NjVhNmQ2NjZmNTk3NDYxNDk2ZTMxNTg='; 
my $sender = "TXTLCL";
my $numbers = "7062019342";
my $message = "This is your message";
my $ua = LWP::UserAgent->new();
 
my $res = $ua->request
(
 POST 'https://api.textlocal.in/send/?',
 Content_Type  => 'application/x-www-form-urlencoded',
 content => [
		'apikey'	=> $apikey,
		'numbers'	=> $numbers,
		'message'	=> $message,
		'sender'	=> $sender
		]
);
 
if ($res->is_error) { die "HTTP Error\n"; }
print "Response:\n\n" . $res->content . "\n\n";