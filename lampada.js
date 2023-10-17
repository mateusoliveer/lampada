const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById ('lamp');
const consertar = document.getElementById('consertar');

function isLampBroken () {
    return lamp.src.indexOf ( 'quebrada' ) > -1
}

function lampOn () {
    if ( !isLampBroken () ) {
        lamp.src = './img/ligada.png';

    }  

}


function lampOff () {
    if ( !isLampBroken () ) {
        lamp.src = './img/desligada.png';

    }

}


function lampBroken () {
    lamp.src = './img/quebrada.png';
}


function consertarLampada () {
    lamp.src = './img/desligada.png'
 
}



turnOn.addEventListener ( 'click', lampOn );
turnOff.addEventListener ( 'click', lampOff );
lamp.addEventListener ( 'mouseover', lampOn );
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener ('dblclick', lampBroken);
consertar.addEventListener ( 'click', consertarLampada );
