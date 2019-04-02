@extends('main/main-master')

@section('content')

<div class="col-lg-5 m-auto">
	<div class="card">

	    <h5 class="card-header info-color white-text text-center py-4">
	        <strong>Sign up</strong>
	    </h5>

{{-- Card content --}}
	    <div class="card-body px-lg-5 mt-3 pt-0">

{{-- Form --}}
	    	{{ Form::open(array('url'=>'main/save','class'=>'text-center','id'=>'register','name'=>'register')) }}
	            <div class="form-row">
	                <div class="col">

{{-- first name --}}
	                    <div class="md-form">
	      					{{ Form::text('fname',null,array('class'=>'form-control','id'=>'fname')) }}
	                        {{ Form::label('fname', 'First Name') }}
	                    </div>
	                </div>
	                <div class="col">
	      				
{{-- last name --}}
	                    <div class="md-form">
	      					{{ Form::text('lname',null,array('class'=>'form-control','id'=>'lname')) }}
	                        {{ Form::label('lname', 'Last Name') }}
	                    </div>
	                </div>
	            </div>

{{-- Email --}}
	            <div class="md-form">
	      			{{ Form::email('email',null,array('class'=>'form-control','id'=>'email')) }}
	                {{Form::label('email','E-mail')}}
	            </div>

{{-- phone number --}}
	            <div class="md-form">
	      			{{ Form::text('phone',null,array('class'=>'form-control','id'=>'phone')) }}
	                {{ Form::label('phone','Phone Number')}}
	            </div>

	            <div class="form-row">
	                <div class="col">

{{-- Password --}}
	                    <div class="md-form">
	      					{{ Form::password('password',array('class'=>'form-control','id'=>'password')) }}
	                        {{Form::label('password','Password')}}
	                    </div>
	                </div>
	                <div class="col">

{{-- Confirm Password --}}
	                    <div class="md-form">
	      					{{ Form::password('repassword',array('class'=>'form-control','id'=>'repassword')) }}
	                        {{ Form::label('repassword','Confirm Password')}}
	                    </div>
	                </div>
	            </div>

{{-- Sign up button --}}
	    		{{ Form::submit('submit',array('class'=>'btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0')) }}

{{-- Log In --}}
	            <p>Already a member?
			    	<a href="login">Log In</a>
			    </p>

	    	{{ Form::close() }}
{{-- !Form --}}

	    </div>

	</div>
</div>

@endsection

@push('js')
	<script type="text/javascript">
		$("form").submit(function(event) {
			event.preventDefault();
			var formData = $(this).serialize();
			$.ajax({
				url: 'register',
				type: 'POST',
				data: formData,
			})
			.done(function(data) {
				toastr.success(data);
				window.location.href = '/profile';
			})
			.fail(function(data) {
				var response = JSON.parse(data.responseText);
		        $.each( response.errors, function( key, value) {
		         toastr.error(value);
		        	return false;
		        });
			});
		});
	</script>
@endpush