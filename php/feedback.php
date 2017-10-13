<?php

$resepient = "miele.premium72@mail.ru";
$sitename = "Премиум-бытовая-техника.рф";

$name = $_POST["name"];
$phone = $_POST["phone"];

function clean($value = "") {
    $value = trim($value);
    $value = stripslashes($value);
    $value = strip_tags($value);
    $value = htmlspecialchars($value);
    
    return $value;
}

function check_length($value = "", $min, $max) {
    $result = (mb_strlen($value) < $min || mb_strlen($value) > $max);
    return !$result;
}

$name = clean($name);
$phone = clean($phone);

if(!empty($phone) && !empty($name)) {
    if(check_length($name, 2, 50) && check_length($phone, 5, 12)) {
        echo "Спасибо за сообщение";
    } else { // добавили сообщение
        echo "Введенные данные некорректные";
    }
} else { // добавили сообщение
    echo "Заполните пустые поля";
}
$message = "Необходимо связаться с Клиентом: \nИмя: $name \nТелефон: $phone";
$pagetitle = "Новая заявка с сайта на демонстрацию техники \"$sitename\"";
mail($resepient, $pagetitle, $message);

?>