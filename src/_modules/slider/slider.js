'use strict';

// Constructor
var Slider = function() {
    var slider = $('._slider');
    var sliderMulti = $('._slidermulti');

    if (slider) {
        slider.each(function(){
            $(this).slick({
                dots: false,
                fade: true,
                arrows:  true,
                autoplay: false
            });
        });
    }

    if (sliderMulti) {
        sliderMulti.each(function(){
            $(this).slick({
                dots: false,
                infinite: true,
                speed: 300,
                arrows: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: false,
                responsive: [
                    {
                        breakpoint: 900,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            centerMode: false,
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        });
    }    
};

module.exports = Slider;
