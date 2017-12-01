var modal = document.querySelector("#modal");
var btn = document.querySelector("#modal-btn");
var form = modal.querySelector("form");
var startdate = modal.querySelector("[name=startdate]");
var enddate = modal.querySelector("[name=enddate]");
var adults = modal.querySelector("[name=adults]");

btn.addEventListener("click", function (evt) {
 evt.preventDefault();
 if	(modal.classList.contains("modal-hotels-hide")){
   	modal.classList.remove("modal-hotels-hide");
 	modal.classList.add("modal-hotels-show");
 	}
	else {
		modal.classList.add("modal-hotels-hide");
		modal.classList.remove("modal-hotels-show");
	}
 });

form.addEventListener("submit", function(evt){
	if (!startdate.value || !enddate.value || !adults.value) {
		evt.preventDefault();
		alert("Проверьте правильность введеных параметров")
	}
});