<?php
    if(!empty($_POST["send"])) {
        $name = $_POST["Name"];
        $email = $_POST["Email"];
        $mobile = $_POST["mobile"];
        $service = $_POST["service"];
    
        $conn = mysqli_connect("localhost", "root", "", "contact") or die("Connection Error: " . mysqli_error($conn));
        mysqli_query($conn, "INSERT INTO users(name, email, mobile, service) VALUES ('" . $name. "', '" . $email. "','" . $mobile. "','" . $service. "')");
        $insert_id = mysqli_insert_id($conn);
        //if(!empty($insert_id)) {
           $message = "Your contact information is saved successfully.";
           $type = "success";
        //}
    }
    require_once "index.html";
    ?>