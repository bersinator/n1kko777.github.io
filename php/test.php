<?php

$resepient = "3734489@gmail.com";
$sitename = "Premium-Tyumen";

$choose = $_POST["choose"];
$t_city = $_POST["t_city"];
$t_name = $_POST["t_name"];
$t_mail = $_POST["t_mail"];
$t_phone = $_POST["t_phone"];

$message = "Необходимо связаться с Клиентом: \n$choose \nГород: $t_city; \nИмя: $t_name; \nEmail: $t_mail; \nТелефон: $t_phone.";
$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($resepient, $pagetitle, $message);

?>