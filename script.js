const submitBtn =  document.getElementById('submitNumberBtn')
const numInput = document.getElementById('numberInput')
const containerMessage = document.getElementById('msgBox')
const winAudio = new Audio('./sources/music.mp3')
let chanceTakenCount = document.getElementById('chanceTaken')


let randomNumber;
let isGameOver = false;
let chanceTaken = 0;

const generateRandomNumber = () => {
    let randomNumberGenerated = Math.floor(Math.random() * 51);
    randomNumber = randomNumberGenerated;
    console.log (randomNumber)
} 

generateRandomNumber()

const throwAlert = (message) => {

    containerMessage.innerHTML = ''; 
    const p = document.createElement('p');
    p.innerText = message;
    containerMessage.append(p);
   
}


submitBtn.addEventListener('click', () => {
    checkInput()



})

const wonImg = document.querySelector('.wonDiv')


const checkInput = () => {

    
    if (isGameOver) {
        location.reload();
    }
 

    let inputvalue = parseInt(numInput.value)
    if (!inputvalue) {
        return throwAlert('Please type a number')
    }

    if (inputvalue < 0 || inputvalue > 100) {
        return throwAlert('Your number is not in range, pls type 1-100')
    }
  

    if (inputvalue < randomNumber) {
        throwAlert('Sorry, you guess a lesser number')
    }

    if (inputvalue > randomNumber) {
        throwAlert('Sorry, you guess a greater number')
    }

    if (inputvalue == randomNumber){
        numInput.innerText = '';
        wonImg.style.display = 'flex';
        numInput.style.display = 'none';
        throwAlert(`Congratulations!!! You Won, The right number was ${randomNumber}` )
        submitBtn.innerText = 'Play Again'
        isGameOver = true;
        winAudio.play()
        return
    }

    chanceTaken += 1;
    chanceTakenCount.innerHTML = chanceTaken;
    chanceTakenCount.innerHTML = `${chanceTaken} /5 `

    if (chanceTaken == 5) {
        throwAlert('Game Over!, Your tries run out')
        submitBtn.innerText = 'Play Again'
        isGameOver = true;
        document.getElementById('title').innerHTML = `GAME OVER! `
        document.getElementById('reveal').style.display = 'flex'
        document.getElementById('reveal').innerHTML = `The correct number is ${randomNumber} `
        document.querySelector('.container').style.backgroundColor = 'red';
    }
}



