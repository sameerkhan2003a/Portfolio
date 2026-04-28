
const fetchWeather = async (lat, lon) => {
    const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
    );
    if(!res.ok) throw new Error("Weather API Failed");
    return res.json();
};

const formatWeather = (data) => {
    return {
        temperature: data.current_weather.temperature,
        windspeed: data.current_weather.windspeed,
        time:data.current_weather.time
    };
};
const getWeather = async () => {
    try {
        console.log("Fetching weather...");
        const lat = 12.9716;
        const lon = 77.5946;
        const raw = await fetchWeather(lat, lon);
        const weather = formatWeather(raw);
        console.log(weather);
    } catch (error) {
        console.log(error);
    }
};

getWeather();