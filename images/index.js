

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const tBar = document.getElementsByClassName('bar')[0];

toggleButton.addEventListener('click', () => {
	tBar.classList.toggle('active');
	alert('We are really Sorry to say that this menu bar is currently not Working. We are trying to fix this Problem as soon as possible. Thank You.');
	
	
});