
async function searchLocation(a){
    let t = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${a}&days=3`);
    if (t.ok && 400 != t.status) {
    let a = await t.json()
    console.log(a)
    displayData(a.forecast.forecastday,a.location, a.current)
    displayCurrent(a.forecast.forecastday,a.current)

}}
document.getElementById("search").addEventListener('keyup', a=>{
    searchLocation(a.target.value)
});
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function displayCurrent(a,t) {
    if (null != t) {
        var e = new Date(t.last_updated.replace(" ", "T"));
        let n= ``;
        n += `  
        <th scope="col" class="diff-color d-flex justify-content-between">
        <div class="day">${days[e.getDay()]}</div>\n   
        <div class=" date">${e.getDate() + monthNames[e.getMonth()]}</div>
        </th> 
        <th scope="col" >${days[new Date(a[1].date.replace(" ", "T")).getDay()]}</th>
        <th scope="col" class="diff-color">${days[new Date(a[2].date.replace(" ", "T")).getDay()]}</th>`
        
        document.querySelector('thead tr ').innerHTML = n
    }

}


function displayData(a , e ,t){

    var cartoona = ``;
        cartoona += `
        <td  scope="row" class="first-day">
        <div class="forecast-content" id="current">
        <div class="location">${e.name}</div>
        <div class="degree">
        <div class="num">${t.temp_c}<sup>o</sup>C</div>
        <div class="forecast-icon">
        <img src= "https:${t.condition.icon}" alt="" width="90">
        </div>	
    
        </div>
        <div class="custom">${t.condition.text}</div>
        <span><img src="imgs/icon-umberella@2x.png" alt="">20%</span>
        <span><img src="imgs/icon-wind@2x.png" alt="">18km/h</span>
        <span><img src="imgs/icon-compass@2x.png" alt="">East</span>
        </div>
        </td>
        <td scope="row" class="second-day diff-color">
        <div class="forecast-content" id="current">
        <div class="forecast-icon">
        <img src="https:${a[1].day.condition.icon}" alt="" width="50">
        </div>	
        <div class="degree">
        <div class="num">${a[1].day.maxtemp_c}<sup>o</sup>C</div>
        <small>${a[1].day.mintemp_c}<sup>o</sup>C</small>
        </div>
        <div class="custom">${a[1].day.condition.text}</div>
        </div>
        </td>
        
        <td scope="row" class="second-day ">
        <div class="forecast-content" id="current">
        <div class="forecast-icon">
        <img src="https:${a[2].day.condition.icon}" alt="" width="50">
        </div>	
        <div class="degree">
        <div class="num">${a[2].day.maxtemp_c}<sup>o</sup>C</div>
        <small>${a[2].day.mintemp_c}<sup>o</sup>C</small>
        </div>
        <div class="custom">${a[2].day.condition.text}</div>
        </div>
        </td>
        `
    document.querySelector('tbody tr').innerHTML = cartoona}

    searchLocation("cairo");

