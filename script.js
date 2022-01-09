// const parent = document.querySelector('.move'),
//     child = document.querySelector('.move__element'),
//     point = document.querySelector('.move__place');

//     let offsetY;
//     let offsetX;

// child.addEventListener('dragstart', function(e) {
//     offsetY = e.offsetY;
//     offsetX = e.offsetX;
//     // console.log(offsetY, offsetX);
// })

// child.addEventListener('dragend', function(e) {
//     child.style.top = (e.pageY - offsetY) + 'px';
//     child.style.left = (e.pageX - offsetX) + 'px';
//     // console.log(e.pageY, e.pageX);
// })


//////////////////////////////   сайт: keycode.info   /////////////////////////////////

// document.querySelector('.keyboard').onkeypress = function (event) {
//     console.log('keyPress');
//     console.log('charCode: ' + event.charCode);
//     console.log('code: ' + event.code);
//     console.log('key: ' + event.key);
//     console.log('keyCode: ' + event.keyCode);
//     // console.log(event);
// }

/* Клавиша нажата и опущена */

document.querySelector('.keyboard').onkeypress = function (event) {
    // console.log('keyDown');
    // console.log('charCode: ' + event.charCode);
    // console.log('code: ' + event.code);
    // console.log('key: ' + event.key);
    // console.log('keyCode: ' + event.keyCode);

    const shake = {
        q:'f',
        w:'t',
        e:'c',
        r:'s',
        t:'d',
        y:'a',
        u:'b',
        i:'w',
        o:'x',
        p:'e',
        a:'v',
        s:'z',
        d:'h',
        f:'r',
        g:'q',
        h:'u',
        j:'y',
        k:'o',
        l:'j',
        z:'g',
        x:'l',
        c:'k',
        v:'i',
        b:'n',
        n:'m',
        m:'p'
    }

    document.querySelector('.keyboard').value += shake[event.key]

    return false;
}

/* Клавиша только нажата */

// document.querySelector('.keyboard').onkeyup = function (event) {
//     console.log('keyUp');
//     console.log('charCode: ' + event.charCode);
//     console.log('code: ' + event.code);
//     console.log('key: ' + event.key);
//     console.log('keyCode: ' + event.keyCode);
// }

/* Когда клавиша опущена */