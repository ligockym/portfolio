<?php
include_once 'database.php';

try {
    $conn = db_connect();

    $stmt = $conn->prepare("SELECT * FROM portfolio");
    $stmt->execute();

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST');
    header("Access-Control-Allow-Headers: X-Requested-With");
    header('Content-Type: application/json; charset=utf-8');

    $portfolio_items = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($portfolio_items);

} catch (PDOException $e) {
    die("Database error in insert");
}

$conn = null;