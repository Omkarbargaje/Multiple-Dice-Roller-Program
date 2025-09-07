

function rollDice(){
const numOfDice= document.getElementById('diceCount').value;
const rollButton = document.getElementById('rollButton');
const resultDiv = document.getElementById('result');
const values=[];
const images=[];


for(let i=0; i<numOfDice;i++)

    {
let value=Math.floor(Math.random()*6)+1;

values.push(value);
let img=`<img src="public/${value}.png" alt="Dice ${value}" class="dice-image"
style="width:80px; height:80px;margin:10px;">`;
images.push(img);
    };
    resultDiv.innerHTML=images.join(' ');
    rollButton.innerText='Roll Again';
}