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
const upGreetDate=function(){
    let dateDiv=document.querySelector("#dateTime");
    dateDiv.innerText=`${weekObject[cDateTime.getDay()]}, ${monthObject[cDateTime.getMonth()]} ${cDateTime.getDate()}`
    let greeting = document.querySelector("#greeting");
    greeting.innerText = greet(cDateTime);
}
upGreetDate();
setInterval(upGreetDate, 5*1000);