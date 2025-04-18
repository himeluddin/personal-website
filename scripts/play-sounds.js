document.addEventListener('DOMContentLoaded', () => {
    const keys = document.querySelectorAll('.key-img');

    keys.forEach(key => {
        key.addEventListener('click', () => {
            const sound = new Audio('assets/sounds/singleKeyboardSound01.mp3');
            sound.play();
        });
    });
});
