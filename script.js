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
    apiObject=undefined
    fetch(`https://api.weatherapi.com/v1/current.json?key=a052237ff42b4a5c88290441230906&q=${location}&aqi=yes`)
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
        apiObject=data
        console.log("Main",data)
        updateWeather(apiObject)
    })
    .catch(e=>{
        console.log("Eroor Occured",e)
    })
}
//update weather
const updateWeather=function (apiObject){
    console.log(apiObject.forecast)
    document.querySelector("#tempPrec").innerHTML=apiObject.current.feelslike_c+apiObject.current.condition.text
}