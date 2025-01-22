# Slider Module

A lightweight, customizable slider module for web applications. Perfect for showcasing images, content, or other media in an interactive way.

## Features
- Fully responsive
- Touch and mouse support
- Customizable with JavaScript
- Supports navigation dots
- Lightweight and fast

##Arguments(selector)
 container - this argument is responsible for the container of the entire slider.
 slide - this argument is responsible for the slides.
 nextArrow and prevArrow - this argument is responsible for the arrow.
 totalCounter and currentCounter - this argument is responsible for the counter slides.
 slideswrapperSelector -  this argument is responsible for the slides that will be cropped to width.
 slidesFieldSelector - this argument is responsible for the wrapper with slides.

HTML example

<div class="offer__slider">
                <div class="offer__slider-counter">
                    <div class="offer__slider-prev">
                        <img src="icons/left.svg" alt="prev">
                    </div>
                    <span id="current">03</span>
                    /
                    <span id="total">04</span>
                    <div class="offer__slider-next">
                        <img src="icons/right.svg" alt="next">
                    </div>
                </div>
                <div class="offer__slider-wrapper">
                    <div class="offer__slider-inner">
                        <div class="offer__slide">
                            <img src="img/slider/pepper.jpg" alt="pepper">
                        </div>
                        <div class="offer__slide">
                            <img src="img/slider/food-12.jpg" alt="food">
                        </div>
                        <div class="offer__slide">
                            <img src="img/slider/olive-oil.jpg" alt="oil">
                        </div>
                        <div class="offer__slide">
                            <img src="img/slider/paprika.jpg" alt="paprika">
                        </div>
                    </div>
                </div>
            </div>
