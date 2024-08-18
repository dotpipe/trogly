<?php
session_start();
// Assuming the POST query contains the file name
$fileName = $_GET['fileName'];

// Read the JSON file
$json = file_get_contents("/$fileName");
$data = json_decode($json, true);
echo $json;