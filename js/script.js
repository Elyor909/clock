// Часы
let secondArrow = document.querySelector('.s'),
    minuteArrow = document.querySelector('.m'),
    hourArrow = document.querySelector('.h'),
    hourNumber = document.querySelector('.hours'),
    minuteNumber = document.querySelector('.minutes');

function clock() {
    let time = new Date(),
        seconds = time.getSeconds() * 6,
        minutes = time.getMinutes() * 6,
        hours = time.getHours() * 30;
        
        secondArrow.style = `transform: rotate(${seconds}deg);`
        minuteArrow.style = `transform: rotate(${minutes}deg);`
        hourArrow.style = `transform: rotate(${hours}deg);`
        
        hourNumber.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
        minuteNumber.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
        
        setTimeout(() => clock(), 1000);
    
}

clock()

//////////////////////////////////////////////////////////////////

// Секундомер
let timerHour = document.querySelector('.stopwatch__hours'),
    timerMinute = document.querySelector('.stopwatch__minutes'),
    timerSecond = document.querySelector('.stopwatch__seconds'),
    timerBtn = document.querySelector('.stopwatch__btn'),
    timerSpan = document.querySelector('.tabsLink__span');

timerBtn.addEventListener('click', () => {
    if(timerBtn.innerHTML == 'start') {
        timerSpan.classList.add('active');
        timerBtn.innerHTML = 'stop';
        setTimeout(() => startTimer())
    } else if(timerBtn.innerHTML == 'stop') {
        timerSpan.classList.remove('active');
        timerSpan.classList.add('active_clear');
        timerBtn.innerHTML = 'clear';
    } else {
        timerSpan.classList.remove('active_clear');
        timerBtn.innerHTML = 'start';
        timerHour.innerHTML = '0';
        timerMinute.innerHTML = '0';
        timerSecond.innerHTML = '0';
    }
})

function startTimer() {
    if(timerBtn.innerHTML == 'stop') {
        timerSecond.innerHTML++;
        if(timerSecond.innerHTML == '60') {
            timerSecond.innerHTML = '0';
            timerMinute.innerHTML++;
            if(timerMinute.innerHTML == '60') {
                timerMinute.innerHTML = '0';
                timerHour.innerHTML++;
                if(timerHour.innerHTML == '24') {
                    timerHour.innerHTML = '0';
                }
            }
        }
    } else {
        return
    }

    setTimeout(() => startTimer(), 1000);
}

/////////////////////////////////////////////////////////////////////


let links = document.querySelectorAll('.tabsItem'),
    tabs = document.querySelectorAll('.tabsContentItem');
    
for(let i = 0; i < links.length;i++) {
    links[i].addEventListener('click', function() {
        for(let x = 0; x < tabs.length;x++) {
            tabs[x].classList.remove('active')
            links[x].classList.remove('active')
        }
        links[i].classList.add('active')
        tabs[i].classList.add('active')
    })
}


