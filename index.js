let hScore = 0
let gScore = 0
const winningScore = 21

const homeScore = document.getElementById(`home-score`)

const guestScore = document.getElementById(`guest-score`)

const result = document.getElementById('result')

function isGameOver(){
    if (hScore >= winningScore){
    result.textContent="Winner: Home"
}else if (gScore >= winningScore){
    result.textContent="Winner: Guest"
}}


function addOneHome(){
    if(hScore<winningScore && gScore < winningScore){
        hScore+=1
    homeScore.textContent=hScore
    isGameOver()
}}

function addTwoHome(){
    if(hScore<winningScore && gScore < winningScore){
        hScore+=2
    homeScore.textContent=hScore
    isGameOver()
}}

function addThreeHome(){
    if(hScore<winningScore && gScore < winningScore){
        hScore+=3
    homeScore.textContent=hScore
    isGameOver()
}}

function addOneGuest(){
    if(hScore<winningScore && gScore < winningScore){
        gScore+=1
    guestScore.textContent=gScore
    isGameOver()
}}

function addTwoGuest(){
    if(hScore<winningScore && gScore < winningScore){
        gScore+=2
    guestScore.textContent=gScore
    isGameOver()
}}

function addThreeGuest(){
    if(hScore<winningScore && gScore < winningScore){
        gScore+=3
    guestScore.textContent=gScore
    isGameOver()
}}

function reset(){
    hScore = 0 
    gScore = 0
    homeScore.textContent=hScore
    guestScore.textContent=gScore
    result.textContent=""
}

