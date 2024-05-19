const $container = document.querySelector('.container');

setInterval(
    () => {
        const $last = $container.firstElementChild;
        $last.remove();
        $container.appendChild($last);
    },
    1000,
);