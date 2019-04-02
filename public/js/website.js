// {{-- Add Product Category --}}
$("#product_category").submit(function(event) {
	event.preventDefault();
	var formData = $(this).serialize();
	$.ajax({
		url: 'product_category',
		type: 'POST',
		data: formData,
	})
	.done(function(data) {
		console.log(data);
		toastr.success(data);
	})
	.fail(function(data) {
		console.log(data);
		var response = JSON.parse(data.responseText);
		$.each(response.errors, function( key, value) {
			toastr.error(value);
			return false;
		});
	});
});

	// {{-- Own Carousel --}}
	$('.owl-carousel').owlCarousel({
		loop:false,
		margin:10,
		nav:false,
		stagePadding:50,
		responsive:{
			0:{
				items:1,
				stagePadding:20,
			},
			600:{
				items:3
			},
			1000:{
				items:4
			}
		}
	})


	// {{-- preview before uploading image --}}
	function readURL(input,file_id) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();

			reader.onload = function (e) {
				$('.'+file_id+'').attr('src', e.target.result);
			}
			reader.readAsDataURL(input.files[0]);
		}
	}
	$(".inputfile").change(function () {
		var file_id = $(this).attr("id");
		readURL(this,file_id);
	});