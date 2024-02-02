let compurterchoicedisplay = document.getElementById('computerChoice')
let userschoicedisplay = document.getElementById('usersChoice')
let resultsdisplay = document.getElementById('result')
let allchoices = document.querySelectorAll('button')

let userchoice
let computerChoice
let results

allchoices.forEach(choice => choice.addEventListener('click', (e)=>{
userchoice = e.target.innerHTML
// console.log(e.target)
userschoicedisplay.innerHTML = userchoice
genraterandomchoice()
getresults()
}))

function genraterandomchoice (){
const randomNumber = Math.floor(Math.random() * 3) + 1

// switch (randomNumber) {
//     case 1 :
//         compurterchoicedisplay.innerHTML = "Rock"
//         break;
//     case 2 :
//         compurterchoicedisplay.innerHTML = "Paper"
//         break;
//     case 3 :
//         compurterchoicedisplay.innerHTML = "Scissors"
//         break;

//     default:
//         break;
// }



if(randomNumber === 1){
    computerChoice  = "Rock"
}
if(randomNumber === 2){
    computerChoice = "Paper"
}
if(randomNumber === 3){
    computerChoice = "Scissors"
}
compurterchoicedisplay.innerHTML = computerChoice

}

console.log(computerChoice , userchoice)

function getresults (){
if(computerChoice === userchoice){
    resultsdisplay.innerHTML = "it's a Draw...!!!"
}


if(computerChoice === "Paper" && userchoice === "Rock"){
    resultsdisplay.innerHTML = "You Loosss...!!!"
}
if(computerChoice === "Rock" && userchoice === "Paper"){
    resultsdisplay.innerHTML = "You Winnsss...!!!"
}


if(computerChoice === "Scissors" && userchoice === "Rock"){
    resultsdisplay.innerHTML = "You Winnsss...!!!"
}
if(computerChoice === "Rock" && userchoice === "Scissors"){
    resultsdisplay.innerHTML = "You Loosss...!!!"
}


if(computerChoice === "Paper" && userchoice === "Scissors"){
    resultsdisplay.innerHTML = "You Winnsss...!!!"
}
if(computerChoice === "Scissors" && userchoice === "Paper"){
    resultsdisplay.innerHTML = "You Loosss...!!!"
}


// resultsdisplay.innerHTML = results;
console.log(results)
}