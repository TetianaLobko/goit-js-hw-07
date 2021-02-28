let counterValue = 0;
const decrementButtonRef = document.querySelector('button[data-action="decrement"]');
const incrementButtonRef = document.querySelector('button[data-action="increment"]');
const valueRef = document.querySelector('#value');


const increment = () => {
    counterValue +=1;
    valueRef.textContent = counterValue;
}

const decrement = () => {
    counterValue -=1;
    valueRef.textContent = counterValue;
}

decrementButtonRef.addEventListener('click', decrement);
incrementButtonRef.addEventListener('click', increment);