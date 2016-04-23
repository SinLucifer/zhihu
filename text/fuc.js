function changeType(whichform) {
	var slider = document.getElementById("slider");
	var login = document.getElementById("login");
	var register = document.getElementById("register");

	if (whichform == 1) {
		slider.style.left = '4em';
		login.className = 'active';
		register.className = '';
		document.getElementById("signup").style.display = 'none';
		document.getElementById("signin").style.display = 'block';
	}
	else{
		slider.style.left = '0';
		login.className = '';
		register.className = 'active';
		document.getElementById("signup").style.display = 'block';
		document.getElementById("signin").style.display = 'none';
	}
}