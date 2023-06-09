let cDateTime=new Date();
let dateDiv=document.querySelector("#dateTime");
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
dateDiv.innerText=`${weekObject[cDateTime.getDay()]}, ${monthObject[cDateTime.getMonth()]} ${cDateTime.getDate()}`
console.log(cDateTime.getHours())
const greet=function (dateObj){
    hour=dateObj.getHours()
    if(hour>=0 && hour<5){
        return "Good Night"
    }
    else if(hour>=5 && hour<12){
        return "Good Morning"
    }
    else if(hour>=12 && hour<17){
        return "Good Afternoon"
    }
    else{
        return "Good Night"
    }
}
greeting=document.querySelector("#greeting");
greeting.innerText=greet(cDateTime);