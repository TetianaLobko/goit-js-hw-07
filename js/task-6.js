const inputRef = document.querySelector('#validation-input');

const addClass = (event) => {
    (Number(inputRef.dataset.length) === event.target.value.length)
        ? (inputRef.classList.add('valid'), inputRef.classList.remove('invalid'))
        : (inputRef.classList.add('invalid'), inputRef.classList.remove('valid'));
    if (event.target.value === '') inputRef.classList.remove('invalid');
};

inputRef.addEventListener('blur', addClass);