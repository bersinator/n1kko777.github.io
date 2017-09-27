<?php
$adminEmail='m.kukarin@mail.ru';
$siteName = "Premium-Tyumen";

$result=array();
if(isset($_POST['screen']) && intval($_POST['screen']))
	{
	switch($_POST['screen'])
		{
		case 7:
			$subject='Новый заказ на сайте '.$siteName
			$keys=array(
					'tech_type'     => 'Тип техники',
					'tech_color'    => 'Цвет техники',
					'tech_brand'    => 'Бренд техники',
					'tech_delivery' => 'Доставка',
					'fio'           => 'Имя пользователя',
					'phone'         => 'Контактный телефон',
					'email'         => 'Электронная почта',
				);
			unset($_POST['screen']);
			$body='Добрый день!<br />';
			$body.='Cообщаем вам, что на сайте '.$siteName.' пользователь заполнил анкету и оставил следующие данные:<br /><br />';
			foreach($_POST as $k => $v) {
					$body.='<b>'.$keys[$k].'</b>: '.$v.'<br />';
				}
			$body.='<br /><br />';
			$headers = 'From: kvelle-mobili <info@kvelle-mobili.com>' . "\r\n";
		break;
		}
	}
header("Content-Type: application/json;");
echo json_encode($result);
?>