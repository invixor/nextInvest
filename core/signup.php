<?php
require_once 'config.php';

$name = trim($_POST['fullName']);
$pass = trim($_POST['password']);
$email = trim($_POST['email']);

if ($name =='' OR $pass =='' OR $email == ''){
    echo "Please fill required fileds";
    die;
}

$conn = new mysqli($servername, $username, $password, $dbname);
if($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO nextInvest_users (name, email, password) VALUES ('".$name"', '".$email"', '".$pass"')";

if ($conn->query($sql) === FALSE) {
    echo "Error: ". $sql "<br>" . $conn->error;
}

$conn->close();
?>