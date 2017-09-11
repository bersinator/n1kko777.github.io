<?php

$resepient = "3734489@gmail.com";
$sitename = "Premium-Tyumen";

$name = $_POST["name"];
$phone = $_POST["phone"];

$message = "Необходимо связаться с Клиентом: \nИмя: $name \nТелефон: $phone";
$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($resepient, $pagetitle, $message);

?>