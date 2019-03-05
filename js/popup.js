var links = document.querySelectorAll(".button-login");
var popup = document.querySelector(".modal-login");
var loginName = document.querySelector("[name=login]");
var loginMail = document.querySelector("[name=email]");
var loginText = document.querySelector("[name=problems]");
var overlay = document.querySelector(".modal-overlay");
var close = document.querySelectorAll(".modal-close");
var form = popup.querySelector("form");
var formSite = document.querySelector(".login-form");
var logName = document.querySelector("[name=user-name]");
var logMail = document.querySelector("[name=user-mail]");
var errorText = document.querySelector(".modal-error-form");
var popupErrorText = document.querySelector(".modal-error-sending");
var storage = "";
var isStorageSupport = false;



links.forEach(function (element){
	element.addEventListener("click", function (evt) { 
		evt.preventDefault(); 
		popup.classList.add("modal-show"); 
		overlay.classList.add("modal-show"); 
		if (storage) { 
			loginName.value = storage; 
			loginMail.value = storage; 
			loginText.focus(); 
		} if (storage) { 
				loginName.value = storage; 
				loginMail.focus(); 
			} else { 
				loginName.focus(); 
			} 
	});
});
	
	close.forEach(function (element) {
		element.addEventListener("click", function (evt) {
			evt.preventDefault();
			popup.classList.remove("modal-show");
			overlay.classList.remove("modal-show");
		});
	});
	
	try {
		storage = localStorage.getItem("login");
		} catch (err) {
			isStorageSupport = false;
	}
	
	form.addEventListener("submit", function(evt) {
		if (!loginName.value || !loginMail.value) {
			evt.preventDefault();
			popup.classList.add("modal-error");
			popupErrorText.classList.add("modal-show");
		} else {
			if (isStorageSupport) {
				localStorage.setItem("login", login);
			}
		}
	});
	
	formSite.addEventListener("submit", function(evt) {
		if (!logName.value || !logMail.value) {
			evt.preventDefault();
			errorText.classList.add("modal-show");
		} else {
			if (isStorageSupport) {
				localStorage.setItem("login", login);
			}
		}
	});

	
	