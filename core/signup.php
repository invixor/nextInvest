<?php
$data = json_decode(file_get_contents('php://input'), true);
$name = $data['name'];
$email = $data['email'];
$password = $data['password'];

$file = 'data.txt';
file_put_contents($file, "Name: $name, Email: $email, Password:$password", FILE_APPEND);
$response = [
    'message'=>'You are done it right!'
];
header('Content-Type: application/json');
echo json_encode($response);


$conn = new mysqli ("localhost", "root", "", "nextinvest");
if ($conn->connect_error) {
    die ("Error:". $conn->connect_error);
}
$sql = "INSERT INTO nextinvest_users (name, email, password) VALUES ('".$name."', '".$email."', '".$password."')";
if ($conn-> query($sql)) {
    echo "Data was successfuly added"
} else{
    echo "Error: " . $conn->error;
}
$conn->close();
?>