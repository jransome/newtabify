window.onload = function(){
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


        createELement("div", "#freddie", "", "id", "city");
    // Weather
    let usableData, fiveDayForecast, cityElement;
    
    
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
    
    getData().then(data => {
        usableData = data;
        // console.log(usableData)
        return data;
    }).then(data2 => {
        console.log(data2);
        cityElement.innerText = usableData.name;
    })

}

