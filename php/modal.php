<?php

$resepient = "3734489@gmail.com";
$sitename = "Premium-Tyumen";

$g_name = $_POST["g_name"];
$g_phone = $_POST["g_phone"];
$g_text = $_POST["g_text"];

$message = "Необходимо связаться с Клиентом: \nИмя: $g_name; \nТелефон: $g_phone; \nВопрос: $g_text.";
$pagetitle = "Новый вопрос с сайта \"$sitename\"";
mail($resepient, $pagetitle, $message);

?>