<?php	
		if ( isset($_POST['submit'])) {
			//$to = "contacto@adrianap.com.ar";
			$to = "maypochettino@gmail.com";
			$subject = "Consulta desde www.adrianap.com.ar";
			
			if ($_POST['email'] != "" && $_POST['consulta'] != "") {
						
				$body = 'Nombre: '.$_POST['nombre'].
				        ' - Localidad: '.$_POST['localidad'].
				        ' - Consulta: '.$_POST['consulta'];
				$headers = "From: " . $_POST['email'] . "\r\n";
				
				if (mail($to, $subject, $body, $headers)) {
					echo "<script language=javascript>mostrardiv('info')</script>";
				}
				else {
					echo "<script language=javascript>mostrardiv('errorSend')</script>";
				}
			}
			else {
				echo "<script language=javascript>mostrardiv('error')</script>";
			}
		}
        ?>