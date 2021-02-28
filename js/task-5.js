const inputRef = document.getElementById('name-input');
const titleRef = document.querySelector('#name-output');

const changeName = () => {
    (inputRef.value) ? titleRef.textContent = inputRef.value : titleRef.textContent = 'незнакомец';
}

inputRef.addEventListener('input', changeName);