const $ = (selector) => {
    return document.querySelector(selector);
}
const hours = $('.hours');
const minutes = $('.minutes');
const seconds = $('.seconds');


const month = $('.month');
const day = $('.day');
const year = $('.year');

function setDate(){
    const now = new Date();
    const mm = now.getMonth();
    const dd = now.getDate();
    const yyyy = now.getFullYear();
    const secs = now.getSeconds();
    const mins = now.getMinutes();
    const hrs = now.getHours();
    const monthName = [
        'January','February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',
    ];

    if (hrs > 12) {
        hours.innerHTML = hrs - 12;
    }else{
        hours.innerHTML = hrs;
    }

    seconds.innerHTML = String(secs).padStart(2, '0');
    minutes.innerHTML = String(mins).padStart(2, '0');
    month.innerHTML = monthName[mm];
    day.innerHTML = dd;
    year.innerHTML = yyyy;
}

setInterval(setDate, 1000);