<?php
$data = json_decode(file_get_contents('php://input'), true);
$name = $data['name'];
$email = $data['email'];
$password = $data['password'];
//
//$file = 'data.txt';
//file_put_contents($file, "Name: $name, Email: $email, Password:$password", FILE_APPEND);
//$response = [
//    'message'=>'You are done it right!'
//];
//header('Content-Type: application/json');
//echo json_encode($response);

$host = 'localhost';
$username = 'root';
$pass = '';
$dbName= 'nextinvest';


$mysqli = new mysqli($host, $username, $pass, $dbName);
if ($mysqli->connect_error) {
    die('Failed to connect to MySQL: ' . $mysqli->connect_eror);
};

$sql = "INSERT INTO nextinvest_users(name, email, password) VALUES ('$name', '$email', '$password')";
if($mysqli->query($sql)){
    echo "Data successfuly added";
} else {
    echo "Error:" . $mysqli->error;
}

$mysqli->close();