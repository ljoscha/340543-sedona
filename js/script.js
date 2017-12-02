var mainsearch = document.querySelector(".main-search");
var modalhotels = document.querySelector(".modal-hotels");
var form = modalhotels.querySelector("form");
var startdate = modalhotels.querySelector("[name=startdate]");
var enddate = modalhotels.querySelector("[name=enddate]");
var adults = modalhotels.querySelector("[name=adults]");


if (modalhotels) {
  modalhotels.classList.add("js-form-close");
}

if (mainsearch) {
  mainsearch.addEventListener("click", function(evt) {
  	form.classList.remove("modal-error");
    var target = evt.target;

    if (target.classList.contains("button")) {
      evt.preventDefault();
      modalhotels.classList.toggle("js-form-close");
      modalhotels.classList.toggle("js-form-show");
    }
  });
}

form.addEventListener("submit", function(evt){
	if (!startdate.value || !enddate.value || !adults.value) {
		evt.preventDefault();
		form.classList.remove("modal-error");
      	form.offsetWidth = form.offsetWidth;
		form.classList.add("modal-error");
	}
});