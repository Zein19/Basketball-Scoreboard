let hScore = 0
let gScore = 0

const homeScore = document.getElementById(`home-score`)

const guestScore = document.getElementById(`guest-score`)


function addOneHome(){
    hScore+=1
    homeScore.textContent=hScore
}

function addTwoHome(){
    hScore+=2
    homeScore.textContent=hScore
}

function addThreeHome(){
    hScore+=3
    homeScore.textContent=hScore
}

function addOneGuest(){
    gScore+=1
    guestScore.textContent=gScore
}

function addTwoGuest(){
    gScore+=2
    guestScore.textContent=gScore
}

function addThreeGuest(){
    gScore+=3
    guestScore.textContent=gScore
}

function reset(){
    hScore = 0 
    gScore = 0
    homeScore.textContent=hScore
    guestScore.textContent=gScore
}