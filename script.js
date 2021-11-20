let timer = document.getElementById('timer');

let startBtn = document.getElementById('startBtn');

startBtn.addEventListener('click',() => {
    startBtn.remove();
    timer.innerHTML= 10;
    setTimeout(function() {
        timer.innerHTML= 9;
        setTimeout(function() {
            timer.innerHTML= 8;
            setTimeout(function() {
                timer.innerHTML= 7;
                setTimeout(function() {
                    timer.innerHTML= 6;
                    setTimeout(function() {
                        timer.innerHTML= 5;
                        setTimeout(function() {
                            timer.innerHTML= 4;
                            setTimeout(function() {
                                timer.innerHTML= 3;
                                setTimeout(function() {
                                    timer.innerHTML= 2;
                                    setTimeout(function() {
                                        timer.innerHTML= "Happy Independance Day";
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
});