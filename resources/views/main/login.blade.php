@extends('main/main-master')

@section('content')
<div class="col-lg-5 m-auto">
<!-- Material form login -->
	<div class="card">

	  <h5 class="card-header info-color white-text text-center py-4">
	    <strong>Sign in</strong>
	  </h5>

{{-- Card content --}}
	  <div class="card-body px-lg-5 pt-0">

	    {{-- Form --}}
	    {{ Form::open(array('url'=>'main/update','class'=>'text-center')) }}
	      
{{-- Email --}}
	      <div class="md-form">
	      	{{ Form::email('email',null,array('class'=>'form-control','id'=>'email')) }}
	        {{ Form::label('email', 'Email') }}
	      </div>

{{-- Password --}}
	      <div class="md-form">
	      	{!! Form::password('password',array('class'=>'form-control','id'=>'password')) !!}
	        {{Form::label('password','Password')}}
	      </div>

{{-- Sign in button --}} 
	    	{{ Form::submit('submit',array('class'=>'btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0')) }}
	      
	    {{ Form::close() }}
{{-- !Form  --}}

<!-- Register Link-->
	      <p>Not a member?
	        <a href="register">Register</a>
	      </p>

	  </div>
	</div>
	<!-- Material form login -->
</div>
@endsection

@push('js')
	<script type="text/javascript">
		$("form").submit(function(event) {
			event.preventDefault();
			var formData = $(this).serialize();
			$.ajax({
				url: 'login',
				type: 'POST',
				data: formData,
				dataType:"JSON",
			})
			.done(function(data) {
				if(data === "ok")
				{
					toastr.success('You are logged in please wait for a while.');
					window.location.href = '/profile';
				}		
			})
			.fail(function(data) {
				// alert("e"+data);
				var response = JSON.parse(data.responseText);
				// console.log(data);
		        $.each( response.errors, function( key, value) {
		         toastr.error(value);
		        	return false;
		        });
			});
		});
	</script>
@endpush