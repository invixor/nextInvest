<?php

$host = 'localhost';
$username = 'root';
$pass = '';
$dbName= 'nextinvest';

$mysqli = new mysqli($host, $username, $pass, $dbName);
if ($mysqli->connect_error) {
    die('Failed to connect to MySQL: ' . $mysqli->connect_eror);
};

$result = $mysqli->query("SELECT name, email, password FROM nextinvest_users");

if ($result->num_rows > 0){
    $data = array();

    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }

    header ('Content-Type: application/json');
    echo json_encode($data);
} else {
    echo "No data found.";
}

$mysqli->close();
?>

