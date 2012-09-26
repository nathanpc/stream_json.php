<?php

$postdata = file_get_contents("php://input");
$url = "http://localhost:4881/add";
$opts = array("http" =>
  array(
    "method"  => "POST",
    "header"  => "Content-type: application/x-www-form-urlencoded",
    "content" => $postdata,
    "timeout" => 60
  )
);

$context  = stream_context_create($opts);
$result = file_get_contents($url, false, $context, -1, 40000);

echo $result;

//header("Location: " . $_SERVER["HTTP_REFERER"]);
//exit;

?>