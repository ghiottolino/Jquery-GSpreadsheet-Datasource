<?php
$contentType = $_REQUEST['contentType'];
if ($contentType==null)
{
	$contentType="text/html";
}
header('Content-type: '.$contentType);

$url = $_REQUEST['url'];
$url = urldecode($url);
$handle = fopen($url, "r");

if ($handle) {
    while (!feof($handle)) {
        $buffer = fgets($handle, 4096);
        echo $buffer;
    }
    fclose($handle);
}
?>
