window.onload = function(){
    const apiKey = "814e605f58e6aaf7e798e6161f0e73fb";
        function createELement(){
            let div = document.createElement("div");
            let node = document.createTextNode("");
            div.setAttribute("id", "city")
            div.appendChild(node);
            document.getElementById('freddie').appendChild(div)
            console.log("element created");
        }

        createELement();
    // Weather
    let usableData, fiveDayForecast, cityElement;
    
    
    async function getData(){
        try {
            const result = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=london&appid=814e605f58e6aaf7e798e6161f0e73fb`);
            const jsonData = await result.json();
            // console.log(jsonData);
            return jsonData
        } catch (error) {
            // console.log(error);
        }
    }
    
    cityElement= document.getElementById("city");
    
    getData().then(data => {
        usableData = data;
        // console.log(usableData)
        return data;
    }).then(data2 => {
        console.log(data2);
        cityElement.innerText = usableData.city.name;
    })

}

