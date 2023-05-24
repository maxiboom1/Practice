<?php

require_once "./person.php";
require_once "./employee.php";
require_once "./customer.php";

// $emp = new Employee("Lisa", "Simpson", 10000);
// $emp->display();

$people = array();
$people[] = new Employee("Bart", "Simpson", 10000);
$people[] = new Employee("Lisa", "Simpson", 20000);
$people[] = new Customer("Homer", "Simpson", "Spreengfield", "5326988544785541");
$people[] = new Customer("Marge", "Simpson", "Spreengfield", "375526588599654");

foreach($people as $item) {
    $item->display();
    echo "<hr>";
}
