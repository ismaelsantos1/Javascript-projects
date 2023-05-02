/*let date = document.getElementById('date')
let button = document.querySelectorAll('button')
let countdown = document.getElementById('countdown')
let days = document.getElementById('days')
let hours = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')*/


(function (){
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
        
        let today = new Date (),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        /*const*/ nextYear = yyyy + 1,
        /*const*/ dayMonth = "05/08/",
        /*const*/ comming = dayMonth + yyyy;

        today = mm + "/" + dd + "/" + yyyy;
        if (today > comming) {
            comming = dayMonth + nextYear;
        }


    const countDown = new Date(comming).getTime(),
        x = setInterval(function(){

        const now = new Date().getTime(), 
                distance = countDown - now;
    

        document.getElementById("days").innerText = Math.floor(distance / (day)),
        document.getElementById("hours").innerText = Math.floor(distance % (day) / (hour))
        document.getElementById("minutes").innerText = Math.floor(distance % (hour) / (minute))
        document.getElementById("seconds").innerText = Math.floor(distance % (minute) / second)

        if (distance < 0) {
            document.getElementById("headline").innerText = "Ela chegou!!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
        }
    }, 0);
}())
