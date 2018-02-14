var $frame = $('#photo-viewer');

$(document).on('click','a',function(e){
	var $img,
		src = this.href;

	e.preventDefault();
	$img = $('<img/>');

	$img.attr({
		'src':src,
		'alt':this.title || "
	});

	$frame.empty().append($img);
});