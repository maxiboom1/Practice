<?php

abstract class Person {

    // Data members: 
    public $firstName;
    public $lastName;

    // Constructor: 
    public function __construct($firstName, $lastName)
    {
        $this->firstName = $firstName;
        $this->lastName = $lastName;
    }

    // Method: 
    public function display() {
        echo "First name: " . $this->firstName . "<br>";
        echo "Last name: " . $this->lastName . "<br>";
    }

    // Abstract Method:
    public abstract function greet();

}

