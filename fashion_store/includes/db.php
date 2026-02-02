<?php
$conn = new mysqli("localhost", "root", "", "fashion_store");
$conn->set_charset("utf8mb4");
if ($conn->connect_error) die("DB Error");
