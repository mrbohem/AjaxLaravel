@extends('admin/admin-master')

@push('css')
<link rel="stylesheet" type="text/css" href="/css/owl.carousel.min.css">
<link rel="stylesheet" type="text/css" href="/css/owl.theme.default.min.css">
<style type="text/css">
.owl-carousel{
	cursor: move;
}
</style>
@endpush

@section('content')

<div id="gridSystemModal" class="modal fade mt-5" tabindex="-1" role="dialog" aria-labelledby="gridModalLabel">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h4 class="modal-title" id="gridModalLabel">Add Category</h4>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">×</span>
				</button>
			</div>
			<div class="modal-body">
				<div class="container-fluid">
					{{Form::open(array('url'=>'website','id'=>'product_category','name'=>'product_category'))}}
					<div class="col-lg-12">
						<div class="md-form">
							{{ Form::text('p1',$user->linkedin,array('class'=>'form-control','style'=>'text-transform:capitalize','id'=>'p1','placeholder'=>'Electronics')) }}
							{{ Form::label("p1","1") }}
						</div>
					</div>
					<div class="col-lg-12">
						<div class="md-form">
							{{ Form::text('p2',$user->linkedin,array('class'=>'form-control','style'=>'text-transform:capitalize','id'=>'p2','placeholder'=>'Mobile')) }}
							{{ Form::label("p2","2") }}
						</div>
					</div>
					<div class="col-lg-12">
						<div class="md-form">
							{{ Form::text('p3',$user->linkedin,array('class'=>'form-control','style'=>'text-transform:capitalize','id'=>'p3','placeholder'=>'Micromax')) }}
							{{ Form::label("p3","3") }}
						</div>
					</div>
					<div class="col-lg-12">
						<div class="md-form">
							{{ Form::text('category',$user->category,array('class'=>'form-control','style'=>'text-transform:capitalize','id'=>'category','placeholder'=>'Mobile')) }}
							{{ Form::label("category","Category") }}
						</div>
					</div>
					<div class="col-lg-12 col-sm-12 col-xs-12 text-center">
						{{ Form::submit('Update',array('class'=>'btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0')) }}
					</div>
					{{ Form::close() }}
				</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default waves-effect waves-light" data-dismiss="modal">Close</button>
			</div>
		</div>
	</div>
</div>
<div class="col-lg-12 text-center">
	<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#gridSystemModal">
		Create Category
	</button>
</div>
@foreach($product_category as $category)
<div class="jumbotron pt-3 mt-3">
	@php
	$i 				= 0;
	$category_id 	= $category->id;
	$p1 			= $category->p1;
	$p2 			= $category->p2;
	$p3 			= $category->p3;
	$p1 			= (empty($p1) ? '':''.$p1.' / ');
	$p2 			= (empty($p2) ? '':''.$p2.' / ');

	@endphp
	<h2 class="display-5 text-center mb-3">
		{{ $p1.''.$p2.''.$p3}}
	</h2>
	<div class="col-lg-12 owl-carousel">
		<div class="card-cascade narrower mt-5">
			<div class="view overlay hm-white-slight img">
				<img src="" class="img-fluid category_{{$category_id}}" alt="">
				<a>
					<div class="mask"></div>
				</a>
			</div>
			<div class="card-body">
				{{Form::open(array('url'=>'upload','id'=>'upload_product_image','name'=>'upload_product_image','enctype'=>'multipart/form-data'))}}
				{{ Form::hidden('product_category_id', ''.$category_id.'') }}
				<div class="file-field md-form">
					<div class="btn btn-primary btn-sm">
						<span>Choose file</span>
						<input type="file" class="inputfile" id="category_{{$category_id}}" name="image">
					</div>
					<div class="file-path-wrapper">
						<input class="file-path validate" type="text" placeholder="Image Name">
					</div>
				</div>

				<div class="md-form">
					<i class="fa fa-sort-numeric-asc prefix grey-text"></i>
					{{ Form::text('product_name',null,array('class'=>'form-control','style'=>'text-transform:capitalize','id'=>'product_name_'.$category_id.'')) }}
					{{ Form::label('product_name_'.$category_id.'','Product Name') }}
				</div>

				<div class="md-form">
					<i class="fa fa-rupee prefix grey-text"></i>
					{{ Form::text('product_price',null,array('class'=>'form-control','style'=>'text-transform:capitalize','id'=>'product_price_'.$category_id.'')) }}
					{{ Form::label('product_price_'.$category_id.'','Product Price') }}
				</div>

				<div class="text-center">
					{{ Form::button('Upload',array('class'=>'btn btn-primary product_upload_btn','type'=>'submit')) }}
				</div>
				{{ Form::close() }}
			</div>
		</div>
		@foreach($products as $product)
			@if($product->product_category_id == $category->id )
				<div class="card-cascade narrower">
					<a href="{{url('website/product/'.$product->id.'')}}">
						<div class="view overlay hm-white-slight main-product" id="h_349 " assigned-product-id="349">
							<img src="/uploaded/product_image_250/{{$product->product_image}}" class="img-fluid" alt="Product Image">
								<div class="mask"></div>
						</div>
						<div class="card-body">
							<h5 class="pink-text"></h5>
							<h4 class="card-title"><i class="fa fa-rupee"></i>{{$product->product_price}}</h4>
							<p class="card-text">{{$product->product_name}}</p>
						</div>
					</a>
				</div>
			@endif
		@endforeach

	</div>
</div>
@endforeach

@endsection

@push('js')
<script type="text/javascript" src="/js/owl.carousel.min.js"></script>
<script type="text/javascript" src="/js/website.js"></script>
<script type="text/javascript">
	{{-- Upload Image --}}
	$(document).on('submit', '#upload_product_image', function(e){
		e.preventDefault();
		$('.product_upload_btn').prop("disabled", true);
		$(".product_upload_btn").html('<i class="fa fa-refresh fa-spin"></i> Wait');
		$.ajax({
			url: "upload_product",
			type: "POST",
			data: new FormData(this),
			contentType: false,
			cache: false,
			processData:false,
		})
		.done(function(data) {
			$('.product_upload_btn').prop("disabled",false);
			$(".product_upload_btn").html('Upload');
			console.log(data);
			toastr.success(data);
		})
		.fail(function(data) {
			$('.product_upload_btn').prop("disabled",false);
			$(".product_upload_btn").html('Upload');
			console.log(data);
			var response = JSON.parse(data.responseText);
			$.each( response.errors, function( key, value) {
				toastr.error(value);
				return false;
			});
		});
	});
</script>
@endpush