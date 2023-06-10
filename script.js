let cDateTime=new Date();
let weekObject = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday"
};
let monthObject = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
};  
let apiKey="a052237ff42b4a5c88290441230906";
const greet=function (dateObj){
    let hour=dateObj.getHours()
    if(hour>=0 && hour<5){
        return "Good Night"
    }
    else if(hour>=5 && hour<12){
        return "Good Morning"
    }
    else if(hour>=12 && hour<17){
        return "Good Afternoon"
    }
    else if(hour>=17 && hour<22){
        return "Good Evening"
    }
    else{
        return "Good Night"
    }
}
//updating greeting and time on regular interval of 5sec
const upGreetDate=function(){
    let dateDiv=document.querySelector("#dateTime");
    dateDiv.innerText=`${weekObject[cDateTime.getDay()]}, ${monthObject[cDateTime.getMonth()]} ${cDateTime.getDate()}`
    let greeting = document.querySelector("#greeting");
    greeting.innerText = greet(cDateTime);
}
upGreetDate();
setInterval(upGreetDate, 5*1000);
//setting up search button
searchBut=document.querySelector("#searchBut")
inputLoc=document.querySelector("#location")
searchBut.addEventListener('click',()=>{
    console.log(updateLoc(inputLoc.value))
})
//setting up api call
const updateLoc=function (location){
    let localWeatObj={
        curTemp:undefined,
        maxTemp:undefined,
        minTemp:undefined,
        avgTemp:undefined,
        text:undefined,
        imageUrl:undefined,
        willRain:undefined,
        rainPer:undefined
    };
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&aqi=yes`)
    .then((response)=>{
        console.log("response",response)
        if(response.ok){
            return response.json()
        }
        else{
            throw new Error(`Error Code:${response.status}`)
        }
    })
    .then((data)=>{
        localWeatObj.curTemp=data.current.temp_c;
        localWeatObj.text=data.current.condition.text;
        localWeatObj.imageUrl=data.current.condition.icon;
        localWeatObj.maxTemp=data.forecast.forecastday[0].day.maxtemp_c;
        localWeatObj.minTemp=data.forecast.forecastday[0].day.mintemp_c;
        localWeatObj.avgTemp=data.forecast.forecastday[0].day.avgtemp_c;
        localWeatObj.willRain=data.forecast.forecastday[0].day.daily_will_it_rain;
        localWeatObj.rainPer=data.forecast.forecastday[0].day.daily_chance_of_rain;
        console.log(localWeatObj);
        updateWeather(localWeatObj);
    })
    .catch(e=>{
        updateWeather(localWeatObj)
        console.log("Error Occured",e)
    })
}
//update weather
const updateWeather=function (localWeatObj){
    document.querySelector("#maxTemp .avgValue").innerText=`${localWeatObj.maxTemp} C`;
    document.querySelector("#minTemp .avgValue").innerText=`${localWeatObj.minTemp} C`;
    document.querySelector("#avgTemp .avgValue").innerText=`${localWeatObj.avgTemp} C`;
    document.querySelector("#weatImg img").src=localWeatObj.imageUrl;
    document.querySelector("#curTemp .curValue").innerText=`${localWeatObj.curTemp} C`;
    document.querySelector("#weatText").innerText=`${localWeatObj.text}`;
    document.querySelector("#rainPer .precValue").innerHTML=`${localWeatObj.rainPer} %`;
    if(localWeatObj.willRain==1){
        document.querySelector("#umbrella .precValue").innerHTML=`Yes`;
    }
    else{
        document.querySelector("#umbrella .precValue").innerHTML=`No`;
    }
}