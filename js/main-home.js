/* Section slider-first + slider "Команда мечты Womazing" */

const prev = document.querySelector('.screen__prev'),
      next = document.querySelector('.screen__next'),
      slides = document.querySelectorAll('.screen__slide'),

      slidesUp = document.querySelectorAll('.slider__image'),
      offers = document.querySelectorAll('.offer'),

      dots = document.querySelectorAll('.dot'),
      points = document.querySelectorAll('.point'),
      slidesWrap = document.querySelectorAll('.slider-wrapper');

let index = 0;

const activeSlide = n => {
    for(slide of slides){
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');

    for(slide of slidesUp){
        slide.classList.add('d-none');
    }
    slidesUp[n].classList.remove('d-none');

    for(offer of offers){
        offer.classList.add('d-none');
    }
    offers[n].classList.remove('d-none');
}

const activeDot = n => {
    for(dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const activePoint = n => {
    for(point of points) {
        point.classList.remove('active');
    }
    points[n].classList.add('active');
}

const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
    activePoint(ind);
}

const nextSlide = () => {
    if(index == slides.length - 1){
        index = 0;
        prepareCurrentSlide(index);
    }else{
        index++;
        prepareCurrentSlide(index);
    }
};
const prevSlide = () => {
    if(index == 0){
        index = slides.length - 1;
        prepareCurrentSlide(index);
    }else{
        index--;
        prepareCurrentSlide(index);
    }
};

dots.forEach((item,indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
        clearInterval(interval);
    })
});

points.forEach((item,indexPoint) => {
    item.addEventListener('click', () => {
        index = indexPoint;
        prepareCurrentSlide(index);
        clearInterval(interval);
    })
});

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

const interval = setInterval(nextSlide, 2500);