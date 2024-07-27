const b1 = document.querySelector('.b1');
const b2 = document.querySelector('.b2');
const b3 = document.querySelector('.b3');
const b4 = document.querySelector('.b4');
const b5 = document.querySelector('.b5');
const b6 = document.querySelector('.b6');
const b7 = document.querySelector('.b7');
const b8 = document.querySelector('.b8');
const b9 = document.querySelector('.b9');
const blocks = [b1, b2, b3, b4, b5, b6, b7, b8, b9];
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
let arr = new Array(9);
let flag = true;
let count = 0;

function displayValue(btn, idx) {
    if (flag) {
        btn.innerHTML = 'X';
        btn.style.color = "red";
        btn.disabled = true;
        flag = !flag;
        arr[idx] = 'X';
    }
    else {
        btn.innerHTML = 'O';
        btn.style.color = "blue";
        btn.disabled = true;
        flag = !flag;
        arr[idx] = 'O';
    }
    check();
    count++;
}
function result(sign) {
    window.alert(`player ${sign} won`)
    for (let i = 0; i < 9; i++) {
        blocks[i].setAttribute("disabled", "")
    }
}
function check() {
    for(let i=0;i<9;i++){
            if(arr[winPatterns[i][0]]=='X' && arr[winPatterns[i][1]]=='X' && arr[winPatterns[i][2]]=='X'){
                result('X');
                return;
            }
            else if(arr[winPatterns[i][0]]=='O' && arr[winPatterns[i][1]]=='O' && arr[winPatterns[i][2]]=='O'){
                result('O');
                return;
            }
    }
}
const reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
    for (let i = 1; i <= 9; i++) {
        let s = '.b';
        s += i;
        arr[i - 1] = '';
        document.querySelector(s).innerHTML = '';
        document.querySelector(s).disabled = false;
        flag = true;
        count = 0;
    }
})


