const b1 = document.querySelector('.b1');
const b2 = document.querySelector('.b2');
const b3 = document.querySelector('.b3');
const b4 = document.querySelector('.b4');
const b5 = document.querySelector('.b5');
const b6 = document.querySelector('.b6');
const b7 = document.querySelector('.b7');
const b8 = document.querySelector('.b8');
const b9 = document.querySelector('.b9');
// const winPatterns = [
//     [0, 1, 2],
//     [0, 3, 6],
//     [0, 4, 8],
//     [1, 4, 7],
//     [2, 5, 8],
//     [2, 4, 6],
//     [3, 4, 5],
//     [6, 7, 8],
// ];
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

function check() {
    if (arr[0] == 'X' && arr[1] == 'X' && arr[2] == 'X') window.alert('player X won')
    else if (arr[0] == 'X' && arr[3] == 'X' && arr[6] == 'X') window.alert('player X won')
    else if (arr[0] == 'X' && arr[4] == 'X' && arr[8] == 'X') window.alert('player X won')
    else if (arr[1] == 'X' && arr[4] == 'X' && arr[7] == 'X') window.alert('player X won')
    else if (arr[2] == 'X' && arr[5] == 'X' && arr[8] == 'X') window.alert('player X won')
    else if (arr[2] == 'X' && arr[4] == 'X' && arr[6] == 'X') window.alert('player X won')
    else if (arr[3] == 'X' && arr[4] == 'X' && arr[5] == 'X') window.alert('player X won')
    else if (arr[6] == 'X' && arr[7] == 'X' && arr[8] == 'X') window.alert('player X won')

    else if (arr[0] == 'O' && arr[1] == 'O' && arr[2] == 'O') window.alert('player O won')
    else if (arr[0] == 'O' && arr[3] == 'O' && arr[6] == 'O') window.alert('player O won')
    else if (arr[0] == 'O' && arr[4] == 'O' && arr[8] == 'O') window.alert('player O won')
    else if (arr[1] == 'O' && arr[4] == 'O' && arr[7] == 'O') window.alert('player O won')
    else if (arr[2] == 'O' && arr[5] == 'O' && arr[8] == 'O') window.alert('player O won')
    else if (arr[2] == 'O' && arr[4] == 'O' && arr[6] == 'O') window.alert('player O won')
    else if (arr[3] == 'O' && arr[4] == 'O' && arr[5] == 'O') window.alert('player O won')
    else if (arr[6] == 'O' && arr[7] == 'O' && arr[8] == 'O') window.alert('player O won')

    else if (count == 9) window.alert('no one won');
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


