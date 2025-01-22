function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, slideswrapperSelector, slidesFieldSelector}) {
    //slider

    const slids = document.querySelectorAll(slide),
            slider = document.querySelector(container),
            prev = document.querySelector(prevArrow),
            next = document.querySelector(nextArrow),
            total = document.querySelector(totalCounter),
            current = document.querySelector(currentCounter),
            slidsWrapper = document.querySelector(slideswrapperSelector),
            slidsField = document.querySelector(slidesFieldSelector),
            width = window.getComputedStyle(slidsWrapper).width;
    let slideIndex = 1;
    let ofset = 0;

    if(slids.length > 9) {
        total.textContent = slids.length;
    } else if (slids.length < 10) {
        total.textContent = `0${slids.length}`;
    }

    if(slideIndex > 9) {
        current.textContent = slideIndex;
    } else if (slideIndex < 10) {
        current.textContent = `0${slideIndex}`;
    }

    slidsField.style.width = 100 * slids.length + '%';
    slidsField.style.display = 'flex';
    slidsField.style.transition = '0.5s all';

    slidsWrapper.style.overflow = 'hidden';

    slids.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = 'relative';

    const indicators = document.createElement('ol'),
          dots = [];

    indicators.classList.add('carousel-indicators');
    indicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;

    slider.append(indicators);
   
    for(let i = 0; i < slids.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
        `;

        if(i == 0) {
            dot.style.opacity = 1;
        }

        indicators.append(dot);

        dots.push(dot);
    }

    function ifSlidesLengthHightLowerToTen() {
        if(slids.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
    }

    function forEachDotsAndSetToOpacity() {
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = 1;
    }

    function regularCalcWidth(str) {
        return +width.replace(/\D/g, '');
    }

    next.addEventListener('click', ()=> {
        if(ofset == regularCalcWidth(width) * (slids.length -1)) {
            ofset = 0;
        } else {
            ofset += regularCalcWidth(width);
        }

        slidsField.style.transform = `translateX(-${ofset}px)`;

        if(slideIndex == slids.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        ifSlidesLengthHightLowerToTen();

        forEachDotsAndSetToOpacity();
    });

    prev.addEventListener('click', ()=> {
        if(ofset == 0) {
            ofset = regularCalcWidth(width) * (slids.length -1);
        } else {
            ofset -= regularCalcWidth(width);
        }

        slidsField.style.transform = `translateX(-${ofset}px)`;

        if(slideIndex == 1) {
            slideIndex = slids.length;
        } else {
            slideIndex--;
        }

        ifSlidesLengthHightLowerToTen();

        forEachDotsAndSetToOpacity();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e)=> {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            ofset = regularCalcWidth(width) * (slideTo -1);
            slidsField.style.transform = `translateX(-${ofset}px)`;

            ifSlidesLengthHightLowerToTen();
            forEachDotsAndSetToOpacity();
        });
    });
}

export default slider;