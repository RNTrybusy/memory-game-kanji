const emojis = [
    "鳥", "鳥", "猫", "猫", "烏", "烏", "馬", "馬",
    "魚", "魚", "虎", "虎", "鮫", "鮫", "犬", "犬"
];
let openCards = [];

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < shuffleEmojis.length; i++) {
    let box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector('.game').appendChild(box);
}

function handleClick() {
    if (openCards.length < 2) {
        this.classList.add('boxOpen');
        openCards.push(this);
    } 
    if (openCards.length == 2) {  // Corrigido aqui
        setTimeout(checkMath, 500);
    }
    console.log(openCards);
}

function checkMath() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    openCards = [];

    if(document.querySelectorAll(".boxMatch").length === emojis.length) {
        alert('Você Venceu!');
    }
}