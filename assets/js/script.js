$(document).ready(function(){

    /* # Show spinner untill everything's loaded. */
    $('.spinner').show();

    /* # Make videos responsive. */
    $('.post').fitVids();

    /* # Open/close menu. */
	$('.nav-control').click(function(){
		$('body').toggleClass('nav-open');
	});

    /* Make specific links open in a new window in a HTML5 valid way */
	$('a[rel*="external"]').click(function(){
		$(this).attr('target', '_blank');
	})
	
    /* Since Ghost does not support a post featured image yet, make an specific image the featured one. Thanks to Thomas Cullen (@ThomasCullen92) for this workaround. */ 
    mainImage = $('img[alt*="cover-image"]');

    if ( mainImage.length > 0){
        mainImageSource = mainImage.attr('src');
        $('#main-sidebar').css('background', 'url('+mainImageSource+')');        
    }

    /* If you only use 'cover-image' as your alt text, then it is used only as a cover image and will not appear in your post.  Otherwise, combine 'cover-image' with another alt text and it will appear in your post body. */
    if (mainImage.attr('alt')=='cover-image'){
        mainImage.remove();
    }	
});

$(window).load(function(){

    /* # All loaded, hide spinner. */
	$('.spinner').hide();

});