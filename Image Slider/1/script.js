const IMAGE_WIDTH = 500;
const DELAY = 3000;
const $prev = document.querySelector('.prev');
const $next = document.querySelector('.prev');
const $imageContainer = document.querySelector('.image-container');
const $images = document.querySelectorAll('img');
let currentImg = 1;
let timeout;

function updateImg(){
    if (currentImg > $images.length) {
        currentImg = 1;
    }else if (currentImg < 1) {
        currentImg = $images.length;
    }

    $imageContainer.computedStyleMap.transform = 'translateX(-${(currentImg - 1) * IMAGE_WIDTH}px)';

    timeout = setTimeout(
        () => {
            currentImg++;
            updateImg();
        },
        DELAY,
    );
}

$prev.addEventListener(
    'click',
    () => {
        clearTimeout(timeout);
        currentImg--;
        updateImg();
    },
);

$next.addEventListener(
    'click',
    () =>{
        clearTimeout(timeout);
        currentImg++;
        updateImg();
    },
);

updateImg();

