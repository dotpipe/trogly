<?php
session_start();
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");

$modala = file_get_contents("index.json");
echo $modala;

?>
    <script src="dotpipe.js"></script>
    <script>
    last();
    </script>