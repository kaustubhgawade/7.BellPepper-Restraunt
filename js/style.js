//menu
function openMenu() {
    document.getElementById("menu").style.display = "block";
}
function closeMenu() {
    document.getElementById("menu").style.display = "none";
}

//contact
function openContact() {
    document.getElementById("contact").style.display = "block";
}

function closeContact() {
    document.getElementById("contact").style.display = "none";
}

//restraunt time
let date = document.getElementById('date');
let d = new Date();
let currentDay = d.getDay();
let currentTime = d.getHours();
if(currentDay == 1 || currentDay == 6){
    date.innerText = 'CLOSED FOR NOW'
}else if(currentTime == 23 || currentTime == 0 || currentTime == 1 || currentTime == 2 || currentTime == 3 || currentTime == 4 || currentTime == 5 || currentTime == 6 || currentTime == 7 || currentTime == 8 || currentTime == 9 ){
    date.innerText = 'CLOSED FOR NOW'
}

//footers changing year
let incrYear = document.getElementById('incr-year')
let currentYear = d.getFullYear();
incrYear.innerText = currentYear;

