<?php

// $_GET
// $_POST
// $_COOKIE
// $_FILES
// $_REQUEST
// $_ENV
// $_SERVER
// $_SESSION

$name = $_POST["name"];
$price = $_POST["price"];
$stock = $_POST["stock"];

$line = "Name: $name, Price: $price, Stock: $stock" . PHP_EOL; // EOL = End Of Line = New Line

// Saves the line to a text file named products.txt:
file_put_contents("./products.txt", $line, FILE_APPEND);

// Redirect: 
header("location: thanks.php");
