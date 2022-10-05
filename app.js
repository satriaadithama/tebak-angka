let newgame = document.getElementById('newgame');
let newhead1 = document.getElementById('newhead');
let inputBox = document.getElementById('input');
let prevGuess = document.querySelector('.guesses');
let guessRem = document.getElementById('remaining');
let numGuesses = 1;

const toggle = document.getElementById('toggle');
toggle.addEventListener("change",(e) =>{
    document.body.classList.toggle("dark",e.target.checked);
})

function modal(string = '') {
    document.querySelector('.modal-body').innerHTML = `<p class="mb-1">${string}</p>`;
    document.getElementById('modal1').classList.toggle('show');
}


    

function startGame() {
    let acak = Math.round(Math.random()*100)
    random = acak;
    
    function compare(x,y) {
        if (x===y) {
            modal(`tebakan kamu benar`)
            
            // newhead1.classList.add('heading1');
            // newhead1.innerHTML="Tebakan Kamu benar";
            inputBox.setAttribute('disabled','');
            newgame.classList.add('head');
            newgame.innerHTML="Start New Game"
        }
        else if(x < y){
            newhead1.classList.add('heading1');
            newhead1.innerHTML="Terlalu rendah! tebak lagi";
        }
        else if (x > y) {
            newhead1.classList.add('heading1');
            newhead1.innerHTML="Terlalu Tinggi! Tebak lagi";
        }
    }
    function limitnum(){
        // newhead1.classList.add('heading1');
        // newhead1.innerHTML=`Oh SORRY! Kamu tidak dapat menebak angka dengan benar !!! Angka yang sebenarnya adalah  ${random}`;
        modal(`UPPSS!! Kamu Gagal menebak angka dengan benar !!! Angka yang sebenarnya adalah  ${random} `)
        inputBox.setAttribute('disabled', '');
        newgame.classList.add('head');
        newgame.innerHTML="Start New Game!";
    }

    function displayGuess() {
      
        numGuesses++;
        guessRem.innerHTML = `${2 - numGuesses}`;
        if (numGuesses === 2) {
            limitnum();
        }
        
    }

    function myFunc(e) {
        e.preventDefault();
        let input2 = inputBox.value;
        input2=Number(input2);
        if (input2===0) {
            
        }
        if ((input2 < 1 || input2 > 100) && input2 !== 0){
            alert('Masukan Nomor yang valid')
            
        }
        else if(input2 !==0){
            compare(input2, random);
            inputBox.value="";
            prevGuess.innerHTML +=`${input2} `
            displayGuess()
        }
        
    }
    document.getElementById('button').addEventListener('click', myFunc)
}
startGame()
document.getElementById('close').addEventListener('click',()=>{
    modal()
})

newgame.addEventListener('click', function () {
    startGame();
    modal()
    newgame.classList.remove('head');
    newhead1.innerHTML="";
    newhead1.classList.remove('heading1');
    numGuesses = 1;
    guessRem.innerHTML = `${2 - numGuesses}  `;
    prevGuess.innerHTML = "";
    inputBox.removeAttribute('disabled');
})


