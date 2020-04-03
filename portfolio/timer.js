function countDown()
	{
		var today = new Date();
		
		var hour = today.getHours();
		if (hour<10) hour = "0"+hour;
		
		var minute = today.getMinutes();
		if (minute<10) minute = "0"+minute;
		
		var seconds = today.getSeconds();
		if (seconds<10) seconds = "0"+seconds;
		
		document.getElementById("clock").innerHTML = hour+":"+minute+":"+seconds;
		 
		 setTimeout("countDown()",1000);
	}