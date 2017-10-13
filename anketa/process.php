<?php
$adminEmail = 'miele.premium72@mail.ru';
$siteName   = "Премиум-бытовая-техника.рф";
$subject    = 'Анкета с сайта '.$siteName;
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
			$body.='На сайте <strong>'.$siteName.'</strong> пользователь заполнил анкету и оставил следующие данные:<br /><br />';

			foreach($_POST as $k => $v) {

					if (is_array($v)) {
						$v = implode(", ", $v);
					}

					$body.='<b>'.$renderer[$k].'</b>: '.$v.'<br />';

				}

			$body.='<br /><br />';

			$headers = "From:  Premium <info@pointb.su> \r\n";
			$headers .= "Reply-To: ". strip_tags($_POST['email']) . "\r\n";
			$headers .= "MIME-Version: 1.0\r\n";
			$headers .= "Content-Type: text/html;\r\n";

			if(mail($adminEmail, $subject, $body, $headers)) {
				$result = 1;
			} else {
				$result = 0;
			}

		break;
		}
	}

header("Content-Type: application/json;");
echo json_encode($result);
?>