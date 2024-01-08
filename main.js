let daysCount = document.getElementById('days');
let hoursCount = document.getElementById('hours');
let minutesCount = document.getElementById('minutes');
let secondsCount = document.getElementById('seconds');

let dateEvent = new Date('29 feb, 2024 23:59:59').getTime()


    let eventInterval = setInterval(() => {
        let dateNow = new Date().getTime()

        let dateDiff = dateEvent - dateNow


        let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
        let hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24)  / (1000 * 60 * 60));
        let minutes = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60)) ;
        let seconds = Math.floor(dateDiff % (1000 * 60 ) / 1000);


        hours < 10 ? hours = '0' + seconds :  hours = hours;
        minutes < 10 ? minutes = '0' + minutes :  minutes = minutes;
        seconds < 10 ? seconds = '0' + seconds :  seconds = seconds;
        daysCount.innerHTML = days;
        hoursCount.innerHTML = hours;
        minutesCount.innerHTML = minutes;
        secondsCount.innerHTML = seconds

        console.log(seconds)
        
    }, 1000);

