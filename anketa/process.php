<?php
$adminEmail = 'm.kukarin@mail.ru';
$siteName   = "Premium-Tyumen";
$subject    = 'Новый заказ на сайте '.$siteName;
$renderer   = array(
				'tech_type'     => 'Тип техники',
				'tech_color'    => 'Цвет техники',
				'tech_brand'    => 'Бренд техники',
				'tech_delivery' => 'Доставка',
				'fio'           => 'Имя пользователя',
				'phone'         => 'Контактный телефон',
				'email'         => 'Электронная почта',
			);
$result=array();
if(isset($_POST['screen']) && intval($_POST['screen']))
	{
	switch($_POST['screen'])
		{
		case 7:


			unset($_POST['screen']);

			$body='Добрый день!<br />';
			$body.='Cообщаем вам, что на сайте '.$siteName.' пользователь заполнил анкету и оставил следующие данные:<br /><br />';

			foreach($_POST as $k => $v) {
					$body.='<b>'.$keys[$k].'</b>: '.$v.'<br />';
				}

			$body.='<br /><br />';

			$headers = 'From: osxmagic <info@osxmagic.com>' . "\r\n";

			mail($adminEmail, $subject, $body, $headers);
		break;
		}
	}
header("Content-Type: application/json;");
echo json_encode($result);
?>