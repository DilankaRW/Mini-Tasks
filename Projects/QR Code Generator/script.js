const wrapper = document.querySelector('.wrapper');
const input = wrapper.querySelector('input');
const button = wrapper.querySelector('button');
const img = wrapper.querySelector('img');


img.addEventListener(
    'load',
    () => {
        wrapper.classList.add('active');
        button.innerText = 'Generate QR Code';
    }
)

button.addEventListener(
    'click',
    () => {
        const value = input.value.trim();
        button.innerText = 'Generating QR Code...';
        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=200&data=${value}`;
    }
)

input.addEventListener(
    'keyup',
    () => {
        if (input.value.trim()) {
            wrapper.classList.remove('active');
        }
    }
)