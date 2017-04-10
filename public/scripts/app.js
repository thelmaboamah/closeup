console.log("Sanity Check")

$(document).ready(function(){

	var $video = $('video');
	var video = $video[0]
	var $canvas = $('canvas');
	var canvas = $canvas[0];
	var $snapButton = $('#snapshot');
	var $photo = $('.photo')
	var filter; //Will hold name of applied filter
	canvas.width = 480;
	canvas.height = 360;

	//Give photo data attribute that corresponds with their filter style.
	$photo.each(function() {
		filter = $(this).parent('figure').attr('class');
		$(this).data('filter', filter);
	});

	//Take picture
	$snapButton.click(function () {

		canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
		imgUrl = canvas.toDataURL('image/jpeg', 1);
		
		$photo.attr('src', imgUrl);
		$('.output').show();

	});

	var constraints = {
		audio: false,
		video: true
	};

	function photoCaptureSuccess(stream){
		console.dir(stream)
		video.srcObject = stream;
	}

	function photoCaptureError(error){
		console.log('navigator.getUserMedia error: ', error);
	}

	navigator.mediaDevices.getUserMedia(constraints).
	    then(photoCaptureSuccess).catch(photoCaptureError);

});