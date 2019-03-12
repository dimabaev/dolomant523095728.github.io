// Объявление модуля
var myModale = (function () {

	// Инициализирует наш модуль
	var init = function () {
		_setUpListners();
	};

	// Прослушивает события 
	var _setUpListners = function () {
		
    };

    // =======================
    // Скрипт для акардиона #1
    // =======================
    $('.accordion > li:eq(0) a').addClass('active').next().slideDown();

    $('.accordion a').click(function(j) {
        var dropDown = $(this).closest('li').find('ul');

        $(this).closest('.accordion').find('ul').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $('.accordion__item--title').removeClass('accordion__item--titleMarginBottom', 'accordion__item--arrowRotate')
            $('.accordion__item--title').addClass('accordion__item--arrowRotate')
            $('.accordion__specificationsList').addClass('accordion__listOpacity')
            $(this).removeClass('active');
        } else {
            $('.accordion__item--title').addClass('accordion__item--titleMarginBottom')
            $('.accordion__item--title').removeClass('accordion__item--arrowRotate')
            $('.accordion__specificationsList').removeClass('accordion__listOpacity')
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });

    // =======================
    // Скрипт для акардиона #2
    // =======================
    $('.modificationOptions > li:eq(0) a').addClass('active').next().slideDown();

    $('.modificationOptions a').click(function(j) {
        var dropDown = $(this).closest('li').find('ul');

        $(this).closest('.modificationOptions').find('ul').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            // $('.accordion__ModificationOptions--title').addClass('accordion__listOpacity')
            $(this).removeClass('active');
        } else {
            $(this).closest('.modificationOptions').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });


    // =======================
    // акардион Ответ-вопрос
    // =======================
    $(".accordion").on("click", ".accordion-header", function() {
        $(this).toggleClass("active").next().slideToggle();
    });
    

    // подключаем слайдер OWL
    // $('.owl-carousel').owlCarousel({
    //     loop:true,
    //     margin:20,
    //     nav:true,
    //     dots: false,
    //     slideSpeed : 2000,
    //     autoplay: true,
    //     loop: true,
    //     responsive:{
    //         0:{
    //             items:1
    //         },
    //         600:{
    //             items:3
    //         },
    //         1000:{
    //             items:4
    //         }
    //     }
    // })

    // $('.owl-carousel').owlCarousel({
    //     loop:true,
    //     nav:true,
    //     items:1
    // })

    // тестим скрпит
    $(document).ready(function(){
        var developer = $("#developer");
        var reviews = $("#reviews");

        developer
            .owlCarousel({
                loop:true,
                margin:20,
                nav:true,
                dots: false,
                slideSpeed : 2000,
                autoplay: true,
                loop: true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:4
                    }
                }
            })

        reviews
            .owlCarousel({
                items: 1,
                slideSpeed: 5000,
                slideTransition: 'ease-in-out',
                margin: 10,
                nav: true,
                autoplayHoverPause: true,
                autoplay: true,
                dots: false,
                loop: true
            })

    });

    // // скрипт для ответ-вопрос
    // $(".accordion").on("click", ".accordion-header--block", function() {
    //     $(this).toggleClass("active").next().slideToggle();
    // });

    // =============================
    // скрипт для табов
    // =============================
    // $(document).ready(function(){
    //     $('.tabs__control-link').on('click', function(e){
    //         e.preventDefault();
    //         var item = $(this).closest('.tabs__controls-item'),
    //             contentItem = $('.tabs__item'),
    //             itemPosition = item.index();
    //         contentItem.eq(itemPosition)
    //             .add(item)
    //             .addClass('active')
    //             .siblings()
    //             .removeClass('active'); 
    //     })
    // });


	// Возвращаем объект (публичные методы) 
	return {
		init: init
	};

})();

// Вызов модуля
myModale.init();