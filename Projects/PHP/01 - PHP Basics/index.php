<?php

// Output: 
echo "Hello PHP!<br>";

// Variables:
$firstName = "Bart";
$lastName = "Simpson";
$age = 12;

// Concatenation:
echo "First name: " . $firstName . ", Last name: " . $lastName . ", Age: " . $age . "<br>";

// Interpolation: 
echo "First name: $firstName, Last name: $lastName, Age: $age<br>";

// Conditions: 
$n = 23;
if($n < 0) {
    echo "$n is negative<br>";
}
elseif($n === 0) {
    echo "$n is zero<br>";
}
else {
    echo "$n is positive<br>";
}

// Loops:
$count = 1;
while($count <= 10) {
    echo $count . " ";
    $count++;
}
echo "<br>";

for($i = 1; $i <= 10; $i++) {
    echo $i . " ";
}
echo "<br>";

// Arrays: 
$arr = array(10, 20, 30, 40);
for($i = 0; $i < count($arr); $i++) {
    echo $arr[$i] . " ";
}
echo "<br>";

foreach($arr as $item) {
    echo $item . " ";
}
echo "<br>";

// Literal Objects:
$cat = new stdClass();
$cat->name = "Mitsi";
$cat->age = 4;

echo "Name: " . $cat->name . ", Age: " . $cat->age . "<br>";
echo "Name: $cat->name, Age: $cat->age<br>";

// Functions: 

function displayMessage($msg, $times = 1) {
    for($i = 1; $i <= $times; $i++) {
        echo $msg . " ";
    }
}

displayMessage("PHP is Fun!", 3);
echo "<br>";

function getMax($a, $b) {
    return $a > $b ? $a : $b;
}

echo "Max between 10 and 20: " . getMax(10, 20) . "<br>";

// include "./calc.php";
// include_once "./calc.php";
// require "./calc.php";
require_once "./calc.php";

echo "Average of 10, 23 and 30: " . getAverage(10, 23, 30) . "<br>";

