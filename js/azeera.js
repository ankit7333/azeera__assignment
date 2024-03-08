const saleElement = document.getElementById('sale');
const dayElement = document.getElementById('sale__days');
const hrsElement = document.getElementById('sale__hrs');
const minsElement = document.getElementById('sale__mins');
const secsElement = document.getElementById('sale__sec');

// const dateTimer = () => {
//     let date = new Date();
//     let day = date.getDay();
//     let hrs = date.getHours();
//     let min = date.getMinutes();
//     let sec = date.getSeconds();
//     dayElement.innerHTML = day;
//     hrsElement.innerHTML = hrs;
//     minsElement.innerHTML = min;
//     secsElement.innerHTML = sec;
// }

// dateTimer();

const dateInput = (userDate) => {
    const separateString = userDate.split('-');
    const formatDate = new Date(`${separateString[2]}-${separateString[1]}-${separateString[0]}`);
    return formatDate;
}
dateInput('04-01-2024');
// const uDate = dateInput('04-01-2024');
// console.log(uDate);

const addZero = (i) => {
    if(i < 10 && i >= 0){
        return `0${i}`
    }else{
        return `${i}`
    }
}

const userInputDate = dateInput('05-01-2024');

const countDownTimer = () => {
    const endSale = new Date(userInputDate);
    const now = new Date();
    const diff = (endSale - now) / 1000;
    if(diff < 0) return;
    dayElement.innerHTML = addZero(Math.floor(diff / 3600 / 24));
    hrsElement.innerHTML = addZero(Math.floor(diff / 3600) % 24);
    minsElement.innerHTML = addZero(Math.floor(diff / 60) % 60);
    secsElement.innerHTML = addZero(Math.floor(diff) % 60);
}
countDownTimer();


$(document).ready(function() {
    setInterval(function(){countDownTimer()},1000);

    setInterval(function(){
        $('#sale').addClass('invisible');
        setTimeout(function(){
            $('#sale').removeClass('invisible'); 
        },2000)
    }, 4000)
});