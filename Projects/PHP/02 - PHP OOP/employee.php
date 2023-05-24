<?php

require_once "./person.php";

// Inheritance:
class Employee extends Person {

    public $salary;

    // Constructor: 
    public function __construct($firstName, $lastName, $salary) {
        parent::__construct($firstName, $lastName);
        $this->salary = $salary;
    }

    // Override: 
    public function display() {
        parent::display();
        echo "Salary: " . $this->salary . "<br>";
    }

    public function greet() {
        echo "Good Morning!<br>";
    }
}
