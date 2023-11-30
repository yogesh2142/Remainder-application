<?php
$username = $_POST['username'];
$password = $_POST['password'];

if ($password != $confirmPassword) {
    echo "Password does not match confirm password";
    exit;
}

$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "remainder application";


$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

echo "Connected successfully";

$conn->close();

?>
