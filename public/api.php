<?php
include_once 'database.php';

$input = file_get_contents('php://input');
$json = json_decode($input, true);

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

if (!$json || empty($json['headline']) || empty($json['date']) || empty($json['text']) || empty($json['tags'])) {
    die('Wrong data format.');
}

try {
    $conn = db_connect();

    $stmt = $conn->prepare("INSERT INTO portfolio (headline, date, tags, text)
  VALUES (:headline, :date, :tags, :text)");
    $stmt->bindParam(':headline', $headline);
    $stmt->bindParam(':date', $date);
    $stmt->bindParam(':tags', $tags);
    $stmt->bindParam(':text', $text);

    $headline = strip_tags($json['headline']);
    $date = strip_tags($json['date']);
    $text = strip_tags($json['text'], '<p>');
    $tags = strip_tags($json['tags']); // string comma separated value
    $stmt->execute();


    echo '1';
} catch (PDOException $e) {
    die("Database error in insert");
}

$conn = null;