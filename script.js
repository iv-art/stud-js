const b1 = document.querySelector('.b-1')

f1 = () => {
    const i1 = +document.querySelector('.i-1').value;
    if ( i1 == 4 ) {

    document.querySelector('.out-1').innerHTML = true;
}
else {
    document.querySelector('.out-1').innerHTML = false;
}
};

b1.onclick = f1;

const a21 = 36;
const a22 = 31;
let aMaximum;

f2 = () => {
    if ( a21 > a22 ) {
        aMaximum = a21;
    } else {
        aMaximum = a22;
    }
    document.querySelector('.out-2').innerHTML = aMaximum
};

const b2 = document.querySelector('.b-2');
b2.onclick = f2;



let max3; 
f3 = () => {
    const i31 = +document.querySelector('.i-31').value;
    const i32 = +document.querySelector('.i-32').value;
    if (i31 > i32) {
        max3 = i31;
    }
    else if (i31 == i32) {
        max3 = 'значения равны друг другу';
    }
    else {
        max3 = i32;
    }
    document.querySelector('.out-3').innerHTML = max3;
};


const b3 = document.querySelector('.b-3');
b3.onclick = f3;

let i4Out;
f4 = () => {
    const i4 = +document.querySelector('.i-4').value;
    if (2022 - i4 > 18) {
        i4Out = 1;
    }
    else if (2022 - i4 == 18) {
        i4Out = 'вам 18';
    }
    else {
        i4Out = 0;
    }
    document.querySelector('.out-4').innerHTML = i4Out;
};

const b4 = document.querySelector('.b-4');
b4.onclick = f4;


let i6Out;
f6 = () => {
    const i6 = +document.querySelector('.i-6').value;
    if (i6 % 2 == 0) {
        i6Out = 'Число четное';
    }
    else {
        i6Out = 'Число нечетное';
    }
    document.querySelector('.out-6').innerHTML = i6Out;
};
const b6 = document.querySelector('.b-6');
b6.onclick = f6;

let i7Out;
f7 = () => {
i7Out = (+document.querySelector('.i-71').value) ** (+document.querySelector('.i-72').value);
document.querySelector('.out-7').innerHTML = i7Out;
};
const b7 = document.querySelector('.b-7');
b7.onclick = f7;

f8 = () => {
    const f8Choosen = document.querySelector('.i-8').value;

    let b8Out;
    switch (f8Choosen) {
        case '1':
            b8Out = 'one';
            alert('Проверяем 1');
            break;
        case '2':
            b8Out = 'two';
            alert('Проверяем 2');
            break;
        case '3':
            b8Out = 'tree';
            alert('Проверяем 3');
            break;
    };

    document.querySelector('.out-8').innerHTML = b8Out;
};
const b8 = document.querySelector('.b-8');
b8.onclick = f8;

f9 = () => {
    const flatNumber = document.querySelector('.i-9').value;
    let i9Out;
    if (flatNumber > 0 && flatNumber < 33) {
        i9Out = 1;
    }
    else if (flatNumber > 32 && flatNumber < 44) {
        i9Out = 2;
    }
    else if (flatNumber > 43 && flatNumber < 65) {
        i9Out = 3;
    }
    else {i9Out = 'в другом доме'};
    document.querySelector('.out-9').innerHTML = i9Out;
}
const b9 = document.querySelector('.b-9');
b9.onclick = f9;

f10 = () => {
    
    let i10out;
    i10out = document.querySelector('.i-10').value;
    
    document.querySelector('.out-10').innerHTML = i10Out;
};

const b10 = document.querySelector('.b-10');
b10.onclick = f10;