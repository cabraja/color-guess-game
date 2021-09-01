const startButton = document.getElementById('start-button');
const welcomeScreen = document.getElementById('welcome-screen');

startButton.addEventListener('click',e => {
    e.preventDefault();
    welcomeScreen.style.opacity = '0%';
    setTimeout(() => {
        welcomeScreen.style.display = 'none';
    }, 600);
    
})