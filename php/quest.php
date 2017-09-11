<?php

$resepient = "3734489@gmail.com";
$sitename = "Premium-Tyumen";

$q_name = $_POST["q_name"];
$q_mail = $_POST["q_mail"];
$q_text = $_POST["q_text"];

$message = "Необходимо связаться с Клиентом: \nИмя: $q_name; \nEmail: $q_mail; \nВопрос: $q_text.";
$pagetitle = "Новый вопрос с сайта \"$sitename\"";
mail($resepient, $pagetitle, $message);

?>