    // ********** start script for slideshow ********************* 
    var slides = document.querySelectorAll('#slides .cl-ss-slide');
    var currentSlide = 0;
    var slideTimer = setInterval(nextSlide,1500); 

    function autoSlide(n){
        slides[currentSlide].className = 'cl-ss-slide';
        currentSlide = (n+slides.length)%slides.length; 
        slides[currentSlide].className = 'cl-ss-slide showing';
    }

    var playing = true;
    var pauseBtn = document.getElementById('pause');

    function pauseSS() {                
        pauseBtn.innerHTML = '<i class="fas fa-play-circle"></i>';
        playing = false;
        clearInterval(slideTimer);
    }
    function playSS(){
        playing = true;
        pauseBtn.innerHTML = '<i class="fas fa-pause-circle"></i>';
        slideTimer = setInterval(nextSlide,1500);
    }

    //add event to pause/play
    pauseBtn.addEventListener('click', function(){
        if(playing){    
            pauseSS();
        }else{
            playSS();
        }
    });

    //for next and previous buttons
    function nextSlide() {
                autoSlide(currentSlide + 1);
    }
    function prevSlide() {
                autoSlide(currentSlide - 1);
    }
    //add event to next and prev buttons
    var nextBtn = document.getElementById('next');
    var prevBtn = document.getElementById('prev');
    nextBtn.addEventListener('click', function(){
        pauseSS();
        nextSlide();
    })
    prevBtn.addEventListener('click', function(){
        pauseSS();
        prevSlide();
    })
            
// ********** end script for slideshow ********************* 