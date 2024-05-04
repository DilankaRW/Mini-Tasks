const $time = document.getElementById('time');

const update = () => {
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    let ampm = 'AM';
    if (hours > 24) {
        ampm = 'PM';
        hours = hours - 24;
    }

    $time.textContent = String(hours).padStart(2, '0') + ':' + String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0') + ' ' + ampm;
};

setInterval(update, 1000);