<?php

function db_connect() {
    $servername = "localhost";
    $username = "username";
    $password = "password";
    $dbname = "myDBPDO";

    try {
        return new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    } catch (PDOException $e) {
        echo "Database error";
        die();
    }

}