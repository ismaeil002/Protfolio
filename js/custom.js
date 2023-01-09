$(function(){

    "use strick"

    $(".back2top i").on('click',function(){
        $("html,body").animate({
            scrollTop: 0
        },1200)
    })

    $(window).on('scroll',function(){
        var scrolling = $(this).scrollTop()

        if(scrolling > 20){
            $(".back2top i").fadeIn(500)
        }else{
            $(".back2top i").fadeOut(500)
        }

        if( scrolling > 80){
            $(".menu").addClass("nav_bg")
        }else{
            $(".menu").removeClass("nav_bg")
        }
    })


    $(".typed").typed({
		strings: ["Designer", "Developer", "Coder"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 2,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 1000,
		// show cursor
		showCursor: true,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});

	// text slide
	$('.txt_main').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows:false,
		autoplay: true,
        autoplaySpeed: 1200,
	    fade:true,
		speed:1200,
	  });

	//   counter part
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

	// progress bar
	$('.circlechart').circlechart();

	// blog slick
	$('.blog_main').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows:false,
		autoplay: true,
        autoplaySpeed: 1200,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: true,
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		  ]
	  });

	//   preloader
	  $(window).preloader({
		delay: 1000
	  });

	//   kursor
	// new kursor({
	// 	type: 4,
	// 	removeDefaultCursor: true,
	// 	color: '#cf1f1f'
	// })


	// wow js
	new WOW().init();


})