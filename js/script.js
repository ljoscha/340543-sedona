// var modal = document.querySelector("#modal");
// var btn = document.querySelector("#modal-btn");


// btn.addEventListener("click", function (evt) {
//  evt.preventDefault();
//  modal.classList.toggle("modal-hotels-hide");
//  });


var modal = document.querySelector("#modal");
var btn = document.querySelector("#modal-btn");


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