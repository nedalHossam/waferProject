
function main() {


    $(document).ready( function() {
        $('.owl-carousel').owlCarousel({
            loop:false,
            autoplay: true,
            autoPlaySpeed: 5000,
            autoPlayTimeout: 5000,
            autoplayHoverPause: true,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
    
                200:{
                    items:2
                },
    
                300:{
                    items:2.5,
                    autoplay: true,
                    autoPlaySpeed: 5000,
                },
                600:{
                    items:5
                },
                1000:{
                    items:5
                },
    
                1024:{
                    items:5
                },

                1300:{
                    items:5
                },

                1500:{
                    items:5
                }
            }
        })
        });
    }
    
    main();

