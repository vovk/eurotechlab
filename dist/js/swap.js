$(document).ready(function () {
	if($(window).width()<'1001'){
		$('.swap-img').prependTo('.wrapper-portfolio>.description');
		$('.swap-text').css('padding-top', '50px');

		// $('.swap2-img').prependTo('.wrapper-reviews>.full-set:first-child>.description');

		//
		$('.half:first-child').each(function() {
			// var next = $(this).next('.half');
			$(this).parent('.full-set').append($(this));
		});


		// portfolio
        if ($('.img-swap-port1')){
        	$('.img-swap-port1').prependTo('.swap-port1');
        }
        if ($('.img-swap-port2')){
        	$('.img-swap-port2').prependTo('.swap-port2');
        }

        if('.half.reverse>img'){
        	$('.half.reverse-text>.title').prependTo('.half.reverse');
        }

	}
});