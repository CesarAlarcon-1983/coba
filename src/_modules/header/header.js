'use strict';

// Constructor
var Header = function() {
    var header = $('.header');
    var body = $('body');
    var menuOpen = $('.header__hamburguer');

    menuOpen.on('click', function(){
        header.toggleClass('-open');
        body.toggleClass('-hideOverflow');
    });

    //faq's functionality

    var questionsContainer = $('.faq__container');

    questionsContainer.on('click', function(e) {
        e.preventDefault();

        var answer = $(this).find($('.faq__answer'));
        answer.toggleClass('-open');
    })
};

module.exports = Header;
