<?php

$url = "http://localhost:4881/getVideo/" . $_GET["id"];
$opts = array("http" =>
  array(
    "method"  => "GET",
    "timeout" => 60
  )
);

$context  = stream_context_create($opts);
$result = file_get_contents($url, false, $context, -1, 40000);

echo $result;

?>