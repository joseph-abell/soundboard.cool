export function soundboardKeyPress () {
	$(document).ready(function () {
		$('html').keydown(function (e) {
			var keyCode = e.charCode || e.keyCode;
			switch (keyCode) {
				case (13):
					$('#cheatMenuButton').click();
					break;
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
				case (113, 81):
					$('#keyq').click();
					break;
				case (119, 87):
					$('#keyw').click();
					break;
				case (101, 69):
					$('#keye').click();
					break;
				case (114, 82):
					$('#keyr').click();
					break;
				case (116, 84):
					$('#keyt').click();
					break;
				case (121, 89):
					$('#keyy').click();
					break;
				case (117, 85):
					$('#keyu').click();
					break;
				case (105, 73):
					$('#keyi').click();
					break;
				case (111, 79):
					$('#keyo').click();
					break;
				case (112, 80):
					$('#keyp').click();
					break;
				case (97, 65):
					$('#keya').click();
					break;
				case (115, 83):
					$('#keys').click();
					break;
				case (100, 68):
					$('#keyd').click();
					break;
				case (102, 70):
					$('#keyf').click();
					break;
				case (103, 71):
					$('#keyg').click();
					break;
				case (104, 72):
					$('#keyh').click();
					break;
				case (106, 74):
					$('#keyj').click();
					break;
				case (107, 75):
					$('#keyk').click();
					break;
				case (108, 76):
					$('#keyl').click();
					break;
				case (122, 90):
					$('#keyz').click();
					break;
				case (120, 88):
					$('#keyx').click();
					break;
				case (99, 67):
					$('#keyc').click();
					break;
				case (118, 86):
					$('#keyv').click();
					break;
				case (98, 66):
					$('#keyb').click();
					break;
				case (110, 78):
					$('#keyn').click();
					break;
				case (109, 77):
					$('#keym').click();
					break;
				case (32):

					$('#spacebar').click();
					$('#startButton').click();
					$('#stopSound').click();
					break;

			}
		});
	});	
}

export function slackKeyPress() {
	$(document).ready(function () {
		$('html').keydown(function (e) {
			var keyCode = e.keyCode;
			switch (keyCode) {
				case(13):
					$('#sendMessage').click();
			}
		});
	});
}