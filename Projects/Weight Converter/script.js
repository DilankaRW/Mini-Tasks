const lb = document.querySelector('.lb');
const kg = document.querySelector('.kg');
const oz = document.querySelector('.oz');


const convert ={
    lb: (val) =>{
        kg.value = val * 0.45359237;
        oz.value = val * 16;
    },
    kg: (val) =>{
        lb.value = val * 2.2;
        oz.value = val * 35.274;
    },
    oz: (val) =>{
        lb.value = val * 0.0625;
        kg.value = val * 0.02834952;
    }
}

window.addEventListener(
    'input',
    (e) => {
        convert[e.target.classList[0]]
        (e.target.value);
    }
);