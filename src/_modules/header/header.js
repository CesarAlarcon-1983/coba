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

    var houses = {
        laprida: {
            room1: [
                {
                    'url':'/images/house/laprida/laprida-hab3-1.jpg',
                }
            ],
            room2: [
                {
                    'url':'/images/house/laprida/laprida-hab2-1.jpg',
                },
                {
                    'url':'/images/house/laprida/laprida-hab1-1.jpg',
                }
            ],
            room3: [
            ],
            room4: [
            ]
        },
        anexo: {
            room1: [
                {
                    'url':'/images/house/anexo/anexo-hab1-1.jpg',
                },
                {
                    'url':'/images/house/anexo/anexo-hab1-2.jpg',
                }
            ],
            room2: [
                {
                    'url':'/images/house/anexo/anexo-hab2-1.jpg',
                },
                {
                    'url':'/images/house/anexo/anexo-hab2-2.jpg',
                },
                {
                    'url':'/images/house/anexo/anexo-hab2-3.jpg',
                },
                {
                    'url':'/images/house/anexo/anexo-hab2-4.jpg',
                }
            ],
            room3: [
            ],
            room4: [
                {
                    'url':'/images/house/anexo/anexo-hab4-1.jpg',
                },
                {
                    'url':'/images/house/anexo/anexo-hab4-2.jpg',
                },
                {
                    'url':'/images/house/anexo/anexo-hab4-3.jpg',
                },
                {
                    'url':'/images/house/anexo/anexo-hab4-4.jpg',
                }
            ]
        },
        thames: {
            room0: [
            ],
            room1: [
                {
                    'url':'/images/house/thames/thames-hab1-1.jpg',
                },
                {
                    'url':'/images/house/thames/thames-hab1-2.jpg',
                },
                {
                    'url':'/images/house/thames/thames-hab1-3.jpg',
                },
                {
                    'url':'/images/house/thames/thames-hab1-4.jpg',
                }
            ],
            room2: [
                {
                    'url':'/images/house/thames/thames-hab2-1.jpg',
                },
                {
                    'url':'/images/house/thames/thames-hab2-2.jpg',
                }
            ],
            room3: [
                {
                    'url':'/images/house/thames/thames-hab3-1.jpg',
                },
                {
                    'url':'/images/house/thames/thames-hab3-2.jpg',
                }
            ],
            room4: [
                {
                    'url':'/images/house/thames/thames-hab4-1.jpg',
                },
                {
                    'url':'/images/house/thames/thames-hab4-2.jpg',
                }
            ],
            room5: [
            ],
            room6: [
                {
                    'url':'/images/house/thames/thames-hab6-1.jpg',
                }
            ],
            room7: [
                {
                    'url':'/images/house/thames/thames-hab7-1.jpg',
                },
                {
                    'url':'/images/house/thames/thames-hab7-2.jpg',
                },
                {
                    'url':'/images/house/thames/thames-hab7-3.jpg',
                },
                {
                    'url':'/images/house/thames/thames-hab7-4.jpg',
                },
                {
                    'url':'/images/house/thames/thames-hab7-5.jpg',
                }
            ],
            room8: [
                {
                    'url':'/images/house/thames/thames-hab8-1.jpg',
                },
                {
                    'url':'/images/house/thames/thames-hab8-2.jpg',
                }
            ],
            room9: [
            ],
            room10: [
                {
                    'url':'/images/house/thames/thames-hab10-1.jpg',
                },
                {
                    'url':'/images/house/thames/thames-hab10-2.jpg',
                },
                {
                    'url':'/images/house/thames/thames-hab10-3.jpg',
                }
            ],
        },
        pellegrini: {
            room1: [
                {
                    'url':'/images/house/pellegrini/pellegrini-hab1-1.jpg',
                },
                {
                    'url':'/images/house/pellegrini/pellegrini-hab1-2.jpg',
                }
            ],
            room2: [
                {
                    'url':'/images/house/pellegrini/pellegrini-hab2-1.jpg',
                },
                {
                    'url':'/images/house/pellegrini/pellegrini-hab2-2.jpg',
                }
            ],
            room3: [
                {
                    'url':'/images/house/pellegrini/pellegrini-hab3-1.jpg',
                },
                {
                    'url':'/images/house/pellegrini/pellegrini-hab3-2.jpg',
                }
            ],
            room4: [
                {
                    'url':'/images/house/pellegrini/pellegrini-hab4-1.jpg',
                },
                {
                    'url':'/images/house/pellegrini/pellegrini-hab4-2.jpg',
                }
            ]
        }
    }

    var rooms = $('.house__availability__room')
    var houseName = $('.house__availability__container').attr('data-houseName');

    rooms.on('click', function() {
        var room = $(this).attr('data-room');
        
        if(houses[houseName][room].length > 0) {
            $(this).iLightBox(houses[houseName][room]); 
        } else {
            var alert = '<div class="center" style="background: #fff; padding: 50px; text-align: center">' + 
                '<h2>No Photos available</h2>' +
                '<h2>for this room</h2>' +
                '</div>';
            $.iLightBox([{url:alert, type: 'html'}])
        }
    });
};

module.exports = Header;
