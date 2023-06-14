let btn = document.createElement(`button`);
btn.id = `btn`;
btn.className = `btn`;
btn.innerHTML = `Weather`;
btn.addEventListener(`click`, function() {
    let result = document.createElement(`div`);
    result.id = `result`;
    result.className = `result`;
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19`).then((response) => 
    // console.log(response.data);
    result.innerHTML = `<p><img src=http://openweathermap.org/img/w/10d.png></p>
    <p>City: ${response.data.name}</p>
    <p>Temperature: ${Math.round(response.data.main.temp_min)}&#176 ${Math.round(response.data.main.temp_max)}&#176</p>
    <p>Pressure: ${response.data.main.pressure} mm</p>
    <p>Humidity: ${response.data.main.humidity} %</p>
    <p>Wind speed: ${response.data.wind.speed} m/s</p>
    <p>Wind degree: ${response.data.wind.deg}&#176</p>`
    );
    document.body.appendChild(result);
});
document.body.appendChild(btn);
