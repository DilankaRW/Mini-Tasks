function syncPointer({ x: pointerX, y: pointerY})

{
    const x = pointerX.toFixed(2);
    const y = pointerY.toFixed(2);
    const xp = (pointerX / window.innerWidth).toFixed(2);
    const yp = (pointerY / window.innerHeight).toFixed(2);
    const {style} = document.documentElement;
    style.setProperty('--x', x)
    style.setProperty('--xp', xp)
    style.setProperty('--y', y)
    style.setProperty('--yp', yp)
};

document.body.addEventListener(
    'pointermove',
    syncPointer,
);