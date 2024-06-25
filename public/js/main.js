const myApiKey = 'd6c76a165bf1ff60120220e4ede5d296';


const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const country = document.getElementById('country');
const day = document.getElementById('day');
const date = document.getElementById('date');

const d = new Date();

const curDate = d.getDate();
const curMonth = d.getMonth();
const curDay = d.getDay();

const month = ["January", "February", "March", "April", "May", "June", "July", "August", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

date.innerText = curDate + " " + month[curMonth];
day.innerText = days[curDay];


const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = cityName.value;

    if(cityVal == "")
    {
        city_name.innerText = "Plz write the city name before search";
    }
    else{
        try{
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&units=metric&appid=${myApiKey}&q=${cityVal}`;
            const response = await fetch(url)
            const data = await response.json();
            city_name.innerText = data.name;
            temp.innerText = data.main.temp;
            temp_status.innerText = data.weather[0].main;
            country.innerText = data.sys.country;
        }
        catch{
            city_name.innerText = "Plz enter the city name properly";
        }
    }
}

submitBtn.addEventListener('click', getInfo);