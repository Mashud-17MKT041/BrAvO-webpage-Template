

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const tBar = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
	tBar.classList.toggle('active');
	
});