$(document).ready(function () {
	$('html').keypress(function (e) {
		var keyCode = e.keyCode;
		switch (keyCode) {
			case (48):
				$('#key0').click();
				break;
			case (49):
				$('#key1').click();
				break;
			case (50):
				$('#key2').click();
				break;
			case (51):
				$('#key3').click();
				break;
			case (52):
				$('#key4').click();
				break;
			case (53):
				$('#key5').click();
				break;
			case (54):
				$('#key6').click();
				break;
			case (55):
				$('#key7').click();
				break;
			case (56):
				$('#key8').click();
				break;
			case (57):
				$('#key9').click();
				break;
			case (113):
				$('#keyq').click();
				break;
			case (119):
				$('#keyw').click();
				break;
			case (101):
				$('#keye').click();
				break;
			case (114):
				$('#keyr').click();
				break;
			case (116):
				$('#keyt').click();
				break;
			case (121):
				$('#keyy').click();
				break;
			case (117):
				$('#keyu').click();
				break;
			case (105):
				$('#keyi').click();
				break;
			case (111):
				$('#keyo').click();
				break;
			case (112):
				$('#keyp').click();
				break;
			case (97):
				$('#keya').click();
				break;
			case (115):
				$('#keys').click();
				break;
			case (100):
				$('#keyd').click();
				break;
			case (102):
				$('#keyf').click();
				break;
			case (103):
				$('#keyg').click();
				break;
			case (104):
				$('#keyh').click();
				break;
			case (106):
				$('#keyj').click();
				break;
			case (107):
				$('#keyk').click();
				break;
			case (108):
				$('#keyl').click();
				break;
			case (122):
				$('#keyz').click();
				break;
			case (120):
				$('#keyx').click();
				break;
			case (99):
				$('#keyc').click();
				break;
			case (118):
				$('#keyv').click();
				break;
			case (98):
				$('#keyb').click();
				break;
			case (110):
				$('#keyn').click();
				break;
			case (109):
				$('#keym').click();
				break;
			case (32):
				$('#spacebar').click();
				$('#startButton').click();
				break;
		}
	});
});