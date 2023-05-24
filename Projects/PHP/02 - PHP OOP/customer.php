<?php

require_once "./person.php";

// Inheritance:
class Customer extends Person {

    public $address;
    public $creditCard;

    // Constructor: 
    public function __construct($firstName, $lastName, $address, $creditCard) {
        parent::__construct($firstName, $lastName);
        $this->address = $address;
        $this->creditCard = $creditCard;
    }

    // Override: 
    public function display() {
        parent::display();
        echo "Address: " . $this->address . "<br>";
        echo "Credit Card: " . $this->creditCard . "<br>";
    }

    public function greet() {
        echo "Howdy!<br>";
    }
}
