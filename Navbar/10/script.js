const $marker = document
    .querySelector('.marker');
const $list = document
    .querySelectorAll('ul li');

$list.forEach(($li) => {
    $li.addEventListener(
        'mousemove',
        (event) => {
            $marker.style.left =
            $li.offsetLeft + 'px';
            $marker.style.width =
            $li.offsetWidth + 'px';
            document
                .querySelector('.active')
                .classList
                .remove('active');
                $li.classList.add('active');
        },
    );
});