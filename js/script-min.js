var mainsearch=document.querySelector(".main-search"),modalhotels=document.querySelector(".modal-hotels"),form=modalhotels.querySelector("form"),startdate=modalhotels.querySelector("[name=startdate]"),enddate=modalhotels.querySelector("[name=enddate]"),adults=modalhotels.querySelector("[name=adults]");modalhotels&&modalhotels.classList.add("js-form-close"),mainsearch&&mainsearch.addEventListener("click",function(e){form.classList.remove("modal-error"),e.target.classList.contains("button")&&(event.preventDefault(),modalhotels.classList.toggle("js-form-close"),modalhotels.classList.toggle("js-form-show"))}),form.addEventListener("submit",function(e){startdate.value&&enddate.value&&adults.value||(e.preventDefault(),form.classList.remove("modal-error"),form.offsetWidth=form.offsetWidth,form.classList.add("modal-error"))});