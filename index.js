
const wantedColor = document.getElementById('wanted-color');
const wantedIndex = Math.floor(Math.random()*5);

const boxes = document.querySelectorAll('.color');

boxes.forEach((box,index) => {

    const num1 = Math.floor(Math.random() * 255);
    const num2 = Math.floor(Math.random() * 255);
    const num3 = Math.floor(Math.random() * 255);
    box.style.backgroundColor=`rgb(${num1},${num2},${num3})`;

    if(index == wantedIndex){
        wantedColor.innerHTML = `RGB(${num1},${num2},${num3})`;
    }
})