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
    });

    'use strict';

    var modal = $('.coba-modal');

    if (modal) {
        var modalTriggers = $('[data-modal]');
        modalTriggers.on('click', function() {
            var actionType = $(this).data('modal');

            if (actionType === 'open') {
                openModal();
            } else {
                closeModal();
            }
        });

        function openModal() {
            modal.addClass('-open');
            $('body').addClass('-hideOverflow');
        }

        function closeModal() {
            modal.removeClass('-open');
            $('body').removeClass('-hideOverflow');
        }
    }

    var targets = $('[data-target]');
    var content = $('[data-content]');

    targets.on('click', function(event) {
        event.preventDefault();

        var $this = $(this);
        var targetIndex = $this.data('target');

        targets.removeClass('-active');
        content.removeClass('-active');
        $this.addClass('-active');

        content.filter(function(){
            return $(this).data('content') === targetIndex;
        }).addClass('-active');        
    });
};

module.exports = Header;
