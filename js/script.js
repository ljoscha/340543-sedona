var modal = document.getElementById('modal');
var btn = document.getElementById('modal-btn');

btn.onclick = function(){
	if(modal.style.display == 'none') {
		modal.style.display = 'block'; 
	} 
	else { 
		modal.style.display = 'none'; 
	}
}