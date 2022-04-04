let countom = document.getElementById('countom');
let inp1 = document.getElementById('inp1');
let inp2 = document.getElementById('inp2');
let str = document.getElementById('str');
let selposl1 = document.getElementById('selposl1');

let posledovatelno =document.getElementById('posledovatelno');
let parallelno =document.getElementById('parallelno');
let cardposl = document.querySelector('.cardposl');
let cardpar = document.querySelector('.cardpar');
let inpposl = document.querySelectorAll('.inpposl');
let selposl = document.querySelectorAll('.selposl');

let result = 0;
let inputnew;
let brnew;
let selectnew;
let optionnew;

function addr() {
    let inputnew = document.createElement('input');
    let selectnew = document.createElement('select');
    let optionnew0 = document.createElement('option');
    let optionnew1 = document.createElement('option');
    let optionnew2 = document.createElement('option');
    let brnew = document.createElement('br');
    let imgnew = document.createElement('img');
    

    selectnew.className = 'selposl';
    selectnew.style.marginLeft = '4px';
    optionnew0.text = 'Ом';
    optionnew1.text = 'кОм';
    optionnew2.text = 'МОм';

    inputnew.type = 'text';
    inputnew.placeholder = 'Введите сопротивление';
    inputnew.className = 'inpposl';

    imgnew.setAttribute("src", "image/r4.png");
    imgnew.setAttribute("height", "100");
    imgnew.setAttribute("width", "100");
    posledovatelno.appendChild(inputnew);
    posledovatelno.appendChild(selectnew);
    posledovatelno.appendChild(brnew);
    selectnew.appendChild(optionnew0);
    selectnew.appendChild(optionnew1);
    selectnew.appendChild(optionnew2);
    cardposl.appendChild(imgnew);

    inputnew.innerHTML = '';
}

function multi() {
    result = 0;
    let inpposl = document.getElementsByClassName('inpposl');
    let selposl = document.getElementsByClassName('selposl');

    for (let i=0; i<inpposl.length; i++) {
        if (selposl[i].options[0].selected) {
            result = result + Number(inpposl[i].value);
        } else if (selposl[i].options[1].selected) {
            result = result + Number(inpposl[i].value*1000);
        } else if (selposl[i].options[2].selected) {
            result = result + Number(inpposl[i].value*1000000);
        } 
        str.style.display="block";

        str.innerHTML = result + ' Ом';
    }
}

function addr2() {
    let inputnewpar = document.createElement('input');
    let selectnewpar = document.createElement('select');
    let optionnew0par = document.createElement('option');
    let optionnew1par = document.createElement('option');
    let optionnew2par = document.createElement('option');
    let brnewpar = document.createElement('br');
    let imgnewpar = document.createElement('img');
    

    selectnewpar.className = 'selpar';
    selectnewpar.style.marginLeft = '4px';
    optionnew0par.text = 'Ом';
    optionnew1par.text = 'кОм';
    optionnew2par.text = 'МОм';

    inputnewpar.type = 'text';
    inputnewpar.placeholder = 'Введите сопротивление';
    inputnewpar.className = 'inppar';

    imgnewpar.setAttribute("src", "image/r5.png");
    imgnewpar.setAttribute("height", "100");
    imgnewpar.setAttribute("width", "100");
    parallelno.appendChild(inputnewpar);
    parallelno.appendChild(selectnewpar);
    parallelno.appendChild(brnewpar);
    selectnewpar.appendChild(optionnew0par);
    selectnewpar.appendChild(optionnew1par);
    selectnewpar.appendChild(optionnew2par);
    cardpar.appendChild(imgnewpar);

    inputnewpar.innerHTML = '';
}

function multi2() {
    let result = 0;
    let rparalelno;
    let inppar = document.getElementsByClassName('inppar');
    let selpar = document.getElementsByClassName('selpar');

    for (let i=0; i<inppar.length; i++) {
        if (selpar[i].options[0].selected) {
            result = result + (1/Number(inppar[i].value));
        } else if (selpar[i].options[1].selected) {
            result = result + (1/Number(inppar[i].value*1000));
        } else if (selpar[i].options[2].selected) {
            result = result + (1/Number(inppar[i].value*1000000));
        } 
    }
    rparalelno = 1/result;
    str2.style.display="block";

    str2.innerHTML = rparalelno + ' Ом';
}