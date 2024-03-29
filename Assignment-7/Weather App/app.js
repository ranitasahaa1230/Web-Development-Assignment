const api = {
    apiKey: '687323c4b6d49653323ab7e2574d10f4',
    url: 'api.openweathermap.org/data/2.5/'
}

// Fetching button, input and diffrent h1 tags

const btn = document.getElementById('btn');
const input = document.getElementById('input');
const ul = document.querySelector('ul');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');
const h4 = document.querySelector('h4');
const img = document.querySelector('img');
const p = document.querySelector('p');

btn.addEventListener('click', ajaxFun);

// for enter key

input.addEventListener('keypress',function (e) {
    if (e.keyCode === 13) {
        ajaxFun();
    }
});

// Declaring ajaxFun function

function ajaxFun() {
    let cityName = input.value;
    fetch(`https://${api.url}weather?q=${cityName}&units=metric&APPID=${api.apiKey}`)
        .then((apiData) => {
            console.log(apiData);
            return apiData.json();
        }).then((realData) => {

            h3.innerText = `${realData.name}, ${realData.sys.country}`;
            h1.innerHTML = `${Math.round(realData.main.temp)}<span>&#176;C </span>`;
            p.innerText = currentDate();
            h2.innerText = realData.weather[0].main;
            h4.innerHTML = `${Math.round(realData.main.temp_min)}<span>&#176;C </span> /  ${Math.round(realData.main.temp_max)}<span>&#176;C </span>`;
            input.value = "";
        }).catch((err) => {
            console.log(err);
        });
}

// Declaring ajaxFun function

function currentDate() {
    var WeekDay = new Date;
    let week = ["Sunday", "Monday", "Tuesday", "Wednday", "Thrusday", "Friday", "Saturday"];
    let month = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let day = WeekDay.getDate();
    return `${week[WeekDay.getDay()]}/ ${day}  ${month[WeekDay.getMonth()]} / ${WeekDay.getFullYear()}`;
}

         
