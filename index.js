
const wantedColorText = document.getElementById('wanted-color');
const newButton = document.getElementById('new-colors');
const scoreBox = document.getElementById('score-box');
const failMessages = ['Nope','Bad Luck','Oopsie','Really?','No','Try Again','Nein'];
let score = 0;

const newColors = () => {
    const wantedIndex = Math.floor(Math.random()*5);

    const boxes = document.querySelectorAll('.color');

    boxes.forEach((box,index) => {

    const num1 = Math.floor(Math.random() * 255);
    const num2 = Math.floor(Math.random() * 255);
    const num3 = Math.floor(Math.random() * 255);
    box.style.backgroundColor=`rgb(${num1},${num2},${num3})`;

    if(index == wantedIndex){
        wantedColorText.innerHTML = `RGB(${num1},${num2},${num3})`;
        
    }

    box.addEventListener('click',e => {
        if(index == wantedIndex){
            box.innerHTML='<h6>Correct</h6>';
            score++;
            scoreBox.innerHTML=`Score: ${score}`;
        }else{
            const message = failMessages[Math.floor(Math.random()*6)];

            box.innerHTML=`<h6>${message}</h6>`;
        }
    })

    

})
}

newColors();

newButton.addEventListener('click',newColors);