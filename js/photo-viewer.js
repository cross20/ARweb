var $frame = $('#photo-viewer');
	$thumb = $('.thumb');

$(document).on('click','.thumb',function(e){
	var $img,
		src = this.href;

	e.preventDefault();
	$img = $('<img/>');
	
	$thumbs.removeClass('active');
	$(this).addClass('active');

	$img.attr({
		'src':src,
		'alt':this.title || ''
	});

	$frame.empty().append($img);
});

$('.thumb').eq(0).click();
