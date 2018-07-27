window.onload = function(){
    function createWeatherBlock(){
        const apiKey = "814e605f58e6aaf7e798e6161f0e73fb";
    
        function createELement(tag, parent, text = "" ,attributeTag, attributeInfo){
            let element = document.createElement(tag);
            let node = document.createTextNode(text);
            if (attributeTag) {
                element.setAttribute(attributeTag, attributeInfo)
            }
            element.appendChild(node);
            document.querySelector(parent).appendChild(element)
        }

        function createApiBlock(){
            createELement("div", ".wrapper", "", "class", "api-block");
        }

        createApiBlock();

        createELement("div", "#freddie", "", "id", "city");
        // createELement("div", "#freddie", "Todays Forecast")
        createELement("div", "#freddie", "", "id", "forecast");
        createELement("div", "#freddie", "", "id", "min-temp");
        createELement("div", "#freddie", "", "id", "max-temp");
        // Weather
        let usableData, fiveDayForecast, cityElement, forecastElement, minElement, maxElement;
        
        
        async function getData(){
            try {
                const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=london&appid=814e605f58e6aaf7e798e6161f0e73fb`);
                const jsonData = await result.json();
                // console.log(jsonData);
                return jsonData
            } catch (error) {
                // console.log(error);
            }
        }
        
        cityElement= document.getElementById("city");
        forecastElement= document.getElementById("forecast");
        minElement= document.getElementById("min-temp");
        maxElement= document.getElementById("max-temp");
        
        getData().then(data => {
            usableData = data;
            // console.log(usableData)
            return data;
        }).then(data2 => {
            console.log(data2);
            cityElement.innerText = usableData.name;
            forecastElement.innerText = `Todays Forecast: ${usableData.weather[0].main}`;
            minElement.innerText = `Min: ${usableData.main.temp_min - 273.15 }C`;
            maxElement.innerText = `Max: ${usableData.main.temp_max - 273.15 }C`
        })

    }
    createWeatherBlock();
}
/*
TODO

* add an event listener that listens for changes in the location box and makes an api call then updates the relevant DOM elements
* be able to save the location persistence (chrome extension)


*/