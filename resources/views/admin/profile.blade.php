@php
$profile_image 	= "images/profile.png";
$fname 			= "";
$lname 			= "";
$email 			= "";
$phone 			= "";
$city 			= "";
$pin 			= "";
$address 		= "";
$facebook 		= "";
$linkedin 		= "";
$instagram 		= "";
$twitter 		= "";
$google 		= "";
$whatsapp 		= "";
$company 		= "";
$website 		= "";
$description 	= "";
$profession 	= "";

if(!is_null($user_profile))
{
	$profile_image 	= $user_profile->profile_image;
	$city 			= $user_profile->city;
	$pin 			= $user_profile->pin;
	$address 		= $user_profile->address;
	$facebook 		= $user_profile->facebook;
	$instagram 		= $user_profile->instagram;
	$twitter 		= $user_profile->twitter;
	$whatsapp 		= $user_profile->whatsapp;
	$google 		= $user_profile->google;
	$company 		= $user_profile->company;
	$linkedin 		= $user_profile->linkedin;
	$website 		= $user_profile->website;
	$profession 	= $user_profile->profession;
	$description 	= $user_profile->description;
	$profile_image = (empty($profile_image) ? 'images/profile.png':'uploaded/profile_image/'.$profile_image.'');

}
if(!empty($user))
{
	$fname = $user->fname; 
	$lname = $user->lname; 
	$email = $user->email; 
	$phone = $user->phone; 
}
@endphp

@extends('admin/admin-master')

@section('content')
<div class="row col-lg-12">

	{{-- upload image card --}}
	<div class="col-lg-4 col-md-4 col-sm-4 co-xs-12">
		<div class="card">
			<div class="card-body ">
				<div class="card-body text-center" style="margin: auto;">
					<div class="col-lg-12" style="text-align: center;top:-70px;padding: 0px;margin: auto;">
						{{ HTML::image(''.$profile_image.'', 'profile image', array('class' => 'img-rounded user_image','style'=>'width:150px;')) }}
					</div>
					{{Form::open(array('url'=>'','id'=>'user-image-form','name'=>'profile','enctype'=>'multipart/form-data'))}}
					<div class="md-form">
						<div class="file-field">
							<div class="float-left">
								<span class="btn btn-primary" onclick="$(this).parent().find('input[type=file]').click();">Select image</span>
								<input name="image" onchange="$(this).parent().parent().find('.form-control').html($(this).val().split(/[\\|/]/).pop());" style="display: none;" id="user_image" type="file" class="inputfile">
							</div>
							<div class="file-path-wrapper">
								<input class="file-path validate" type="text" placeholder="Upload your file">
							</div>
						</div>
					</div>
					<div class="md-form col-6 text-center m-auto" style="text-align: center;">
						<button class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" id="user_image_btn" type="submit">Upload</button>
					</div>
					{{ Form::close() }}
				</div>
			</div>
		</div>
	</div>

	{{-- Edit Profile Card --}}
	<div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
		<div class="card card-cascade narrower">
			<div class="view view-cascade gradient-card-header purple-gradient">
				<h2 class="card-header-title">Edit Profile</h2>
			</div>
			<div class="card-body">
				{{Form::open(array('url'=>'profile','id'=>'profile','name'=>'profile'))}}
				<div class="row">

					{{-- First Name --}}
					<div class="col-lg-6 col-sm-6 col-xs-12">
						<div class="md-form">
							{{ Form::text('fname',$fname,array('class'=>'form-control','readonly'=>'readonly','style'=>'text-transform:capitalize')) }}
							{{ Form::label('fname','First Name') }}
						</div>
					</div>

					{{-- Last Name --}}
					<div class="col-lg-6 col-sm-6 col-xs-12">
						<div class="md-form">
							{{ Form::text('lname',$lname,array('class'=>'form-control','readonly'=>'readonly','style'=>'text-transform:capitalize')) }}
							{{ Form::label('lname','Last Name') }}
						</div>
					</div>

					{{-- Email --}}
					<div class="col-lg-6 col-sm-12 col-xs-12">
						<div class="md-form">
							{{ Form::text('email',$email,array('class'=>'form-control','style'=>'text-transform:capitalize','id'=>'email','readonly'=>'readonly')) }}
							{{ Form::label('email','Email') }}
						</div>
					</div>

					{{-- Phone --}}	
					<div class="col-lg-6 col-sm-6 col-xs-12">
						<div class="md-form">
							{{ Form::text('phone',$phone,array('class'=>'form-control','style'=>'text-transform:capitalize','id'=>'phone','readonly'=>'readonly')) }}
							{{ Form::label('phone','Phone Number') }}
						</div>
					</div>

					{{-- Address --}}	
					<div class="col-lg-12 col-sm-12 col-xs-12">
						<div class="md-form">
							{{ Form::text('address',$address,array('class'=>'form-control','style'=>'text-transform:capitalize','id'=>'address')) }}
							{{ Form::label('address','Address') }}
						</div>
					</div>

					{{-- City --}}	
					<div class="col-lg-6 col-sm-6 col-xs-12">
						<div class="md-form">
							{{ Form::text('city',$city,array('class'=>'form-control','style'=>'text-transform:capitalize','id'=>'city')) }}
							{{ Form::label("city","City") }}
						</div>
					</div>

					{{-- Pin --}}	
					<div class="col-lg-6 col-sm-6 col-xs-12">
						<div class="md-form">
							{{ Form::text('pin',$pin,array('class'=>'form-control','style'=>'text-transform:capitalize','id'=>'pin')) }}
							{{ Form::label("pin","Pin Code") }}
						</div>
					</div>

					{{-- Company --}}	
					<div class="col-lg-6 col-sm-6 col-xs-12">
						<div class="md-form">
							{{ Form::text('company',$company,array('class'=>'form-control','style'=>'text-transform:capitalize','id'=>'company')) }}
							{{ Form::label('company','Company Name') }}
						</div>
					</div>

					{{-- What's App  --}}	
					<div class="col-lg-6 col-sm-6 col-xs-12">
						<div class="md-form">
							{{ Form::text('whatsapp',$whatsapp,array('class'=>'form-control','style'=>'text-transform:capitalize','id'=>'whatsapp')) }}
							{{ Form::label("whatsapp","What's App Number") }}
						</div>
					</div>

					{{-- Facebook  --}}	
					<div class="col-lg-6 col-sm-6 col-xs-12">
						<div class="md-form">
							{{ Form::text('facebook',$facebook,array('class'=>'form-control','style'=>'text-transform:capitalize','id'=>'facebook')) }}
							{{ Form::label("facebook","Facebook") }}
						</div>
					</div>

					{{-- Twitter --}}	
					<div class="col-lg-6 col-sm-6 col-xs-12">
						<div class="md-form">
							{{ Form::text('twitter',$twitter,array('class'=>'form-control','style'=>'text-transform:capitalize','id'=>'twitter')) }}
							{{ Form::label("twitter","Twitter") }}
						</div>
					</div>

					{{-- Instagram --}}	
					<div class="col-lg-6 col-sm-6 col-xs-12">
						<div class="md-form">
							{{ Form::text('instagram',$instagram,array('class'=>'form-control','style'=>'text-transform:capitalize','id'=>'instagram')) }}
							{{ Form::label("instagram","Instagram") }}
						</div>
					</div>

					{{-- Google --}}	
					<div class="col-lg-6 col-sm-6 col-xs-12">
						<div class="md-form">
							{{ Form::text('google',$google,array('class'=>'form-control','style'=>'text-transform:capitalize','id'=>'google')) }}
							{{ Form::label("google","Google Username") }}
						</div>
					</div>

					{{-- LinkedIn --}}	
					<div class="col-lg-6 col-sm-6 col-xs-12">
						<div class="md-form">
							{{ Form::text('linkedin',$linkedin,array('class'=>'form-control','style'=>'text-transform:capitalize','id'=>'linkedin')) }}
							{{ Form::label("linkedin","LinkedIn Username") }}
						</div>
					</div>



					{{-- Website --}}	
					<div class="col-lg-6 col-sm-6 col-xs-12">
						<div class="md-form">
							{{ Form::text('website',$website,array('class'=>'form-control','style'=>'text-transform:capitalize','id'=>'website')) }}
							{{ Form::label("website","Website Link") }}
						</div>
					</div>

					{{-- Profession --}}	
					<div class="col-lg-6">
						<div class="md-form">
							{{ Form::text('profession',$profession,array('class'=>'form-control','style'=>'text-transform:capitalize','id'=>'profession')) }}
							{{ Form::label("profession","Your Profession") }}
						</div>
					</div>

					{{-- Description  --}}	
					<div class="col-lg-12">
						<div class="md-form amber-textarea active-amber-textarea">
							<i class="fa fa-pencil prefix"></i>
							{{Form::textarea('description',$description,['class'=>'md-textarea form-control','row'=>'3','id'=>'description'])}}
							{{Form::label('description','Description')}}
						</div>
					</div>

					{{-- Submit button --}}	
					<div class="col-lg-12 col-sm-12 col-xs-12 text-center">
						{{ Form::submit('Update',array('class'=>'btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0')) }}
					</div>
				</div>
				{{ Form::close() }}
			</div>
		</div>
	</div>
</div>
@endsection

@push('js')

<script type="text/javascript">

	{{-- preview before uploading image --}}
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

	{{-- Update profile --}}
	$("#profile").submit(function(event) {
		event.preventDefault();
		var formData = $(this).serialize();
		$.ajax({
			url: 'profile',
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
			$.each( response.errors, function( key, value) {
				toastr.error(value);
				return false;
			});
		});
	});

	{{-- Upload Image --}}
	$(document).on('submit', '#user-image-form', function(e){
		e.preventDefault();
		$('#user_image_btn').prop("disabled", true);
		$("#user_image_btn").html('<i class="fa fa-refresh fa-spin"></i> Wait');
		$.ajax({
			url: "profile_image",
			type: "POST",
			data: new FormData(this),
			contentType: false,
			cache: false,
			processData:false,
		})
		.done(function(data) {
			$('#user_image_btn').prop("disabled",false);
			$("#user_image_btn").html('Upload');
			console.log(data);
			toastr.success(data);
		})
		.fail(function(data) {
			$('#user_image_btn').prop("disabled",false);
			$("#user_image_btn").html('Upload');
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