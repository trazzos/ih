(function($) {

    "use strict";


    /* FIXED NAVIGATION */

    $(window).scroll(function() {
        if ($(this).scrollTop() > 90) {
            $(".themeix-header-navigation").addClass("fixed-navigation");
        } else {
            $(".themeix-header-navigation").removeClass("fixed-navigation");
        }
    });
    /* PRELOADER */

    function themeix_preloader() {
        setTimeout(function() {
            $('body').addClass('themeix-loaded');
        }, 1000);
    }
    themeix_preloader();

    /* WOW JS*/

    var wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: true, // default
        live: true // default
    })
    wow.init();

    /* NAVIGATION MENU */

    $('.slimmenu').slimmenu({
        resizeWidth: '800',
        collapserTitle: 'Main Menu',
        animSpeed: 'medium',
        indentChildren: true,
    });

    /* THEMEIX CLIENT CAROUSEL */

    $('.themeix-client-carousel').owlCarousel({
        autoplay: true,
        loop: true,
        margin: 30,
        nav: false,
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    })
    /* ABOUT AUTHOR INFO CAROUSEL */


    $('.about-author-info-carousel').owlCarousel({
        autoplay: true,
        loop: true,
        margin: 30,
        nav: false,
        responsive: {
            0: {
                items: 1,
            },
            1000: {
                items: 2,
            }
        }
    })

    /* TESTIMONIAL INSTRUCTOR CAROUSEL */

    $('.testimonial-instructor-carousel').owlCarousel({
        autoplay: true,
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 3,
            },
            1000: {
                items: 4,
            }
        }
    })




    /* ISOTOP FILTERS */

    $(document).ready(function() {
        var $grid = $('.gallery-filter-wrapper').imagesLoaded( function() {
          // init Isotope after all images have loaded
          $grid = $('.gallery-filter-wrapper').isotope({
            itemSelector: '.gallery-item',
            layoutMode: 'fitRows',
          });
        });

        var filterFns = {
            numberGreaterThan50: function() {
                var number = $(this).find('.number').text();
                return parseInt(number, 10) > 50;
            }
        };
        $('#gallery-filter').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            filterValue = filterFns[filterValue] || filterValue;
            $grid.isotope({
                filter: filterValue
            });
        });
    });




    /*  infinite-scroll */

    $('.infinite-scroll').infiniteScroll({
        path: function path() {
            var pageNumber = this.loadCount + 2;
            return '/pages/' + pageNumber + '/index.html';
        },
        append: '.post-card-item',
        button: '.loadmore-button',
        scrollThreshold: false

    });

    /*  infinite-scroll two*/

    $('.posts-card').infiniteScroll({
        path: function path() {
            var pageNumber = this.loadCount + 2;
            return '/pages/' + pageNumber + '/index.html';
        },
        append: '.post-card',
        button: '.loadmore-button',
        scrollThreshold: false

    });

    // search
    var sjs = SimpleJekyllSearch({
        searchInput: document.getElementById('search-input'),
        resultsContainer: document.getElementById('results-container'),
        json: '/search.json',
        searchResultTemplate: '<div class="search-results"><div class="post-image"><a href="{url}"><img src="{post_image}" alt="{{title}}"></a></div><div class="search-content"><h3><a href="{url}">{title}</a></h3><p>{excerpt}</p></div></div>'
    });


    $('[data-toggle="tooltip"]').tooltip()


        hljs.initHighlightingOnLoad();



})(jQuery);