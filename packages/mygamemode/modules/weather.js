var weatherVariations = ['EXTRASUNNY', 'CLOUDS', 'FOGGY', 'RAIN', 'THUNDER', 'CLEARING', 'CLEAR'];

var hour = 12;
var minute = 0;

setInterval(() => {
    WeatherUpdates();
    TimeUpdates();
}, 60000);

function WeatherUpdates() {
    var nextWeather = weatherVariations.shift();
    weatherVariations.push(nextWeather);
    mp.world.setWeatherTransition(weatherVariations[0]);
    console.log(`The weather is now: ${weatherVariations[0]}`);
}

function TimeUpdates() {
    if (minute >= 60) {
        minute = 0;
        hour += 1;
    }

    if (hour >= 24)
        hour = 0;

    minute += 30;
    mp.world.time.set(hour, minute, 0);
    console.log(`The current time is now: ${mp.world.time.hour}:${mp.world.time.minute}`);
}