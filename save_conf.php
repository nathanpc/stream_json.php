<?php

$expire = time() + 60 * 60 * 24 * 30 * 12;  // Expires in a year.
setcookie("server", $_POST["server_location"], $expire);

header("Location: index.php");
exit;

?>