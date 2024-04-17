const $copied = document.getElementById('copied');
const $button = document.getElementById('btn');

const $copy = document.getElementById('copy');

$button.addEventListener(
    'click',
    () =>{
        $copy.select();
        $copy.setSelectionRange(0, 99999);
        document.execCommand('copy');

        $copied.style.top = '-55px';
        $copied.style.opacity = '1';
        setTimeout(
            () => {
                $copied.style.top = '-40px';
                $copied.style.opacity = '0';
            },
            1000,
        );
    },
);