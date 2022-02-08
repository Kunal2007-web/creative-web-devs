// Getting Element
const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');

// Event Listener for Toggling Navigation
toggle.addEventListener('click', () => {
	toggle.classList.toggle('active-toggle');
	navigation.classList.toggle('active-navigation');
});
