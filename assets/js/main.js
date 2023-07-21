(function($) {
    "use strict";

    gsap.to(".process_one",  {y: -40, duration: 2, ease: "power1.in", repeat: -1, yoyo: true});
    gsap.to(".process_two",  {y: -20, duration: 2.5, ease: "power1.out", repeat: -1, yoyo: true});

    

})($);