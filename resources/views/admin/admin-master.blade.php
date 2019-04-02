<?php
if(!empty($user))
{
	$fname = $user->fname; 
	$lname = $user->lname; 
	$email = $user->email; 
	$phone = $user->phone; 
}
?>
<!DOCTYPE html>
<html>
<head>
	<title></title>

	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="{{ asset('assets/css/material.css') }}">
	<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet">
	@stack('css')
</head>
<body>
	<nav class="navbar navbar-expand-lg navbar-dark indigo">
		<a class="navbar-brand" href="#">RYodel</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
		aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	</button>

	<div class="collapse navbar-collapse" id="navbarTogglerDemo02">
		<ul class="navbar-nav ml-auto nav-flex-icons">
			<li class="nav-item">
				<a class="nav-link waves-effect waves-light" href="digitalCard">
					<i class="fa fa-id-card"></i> Digital Card
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link waves-effect waves-light" href="website">
					<i class="fa fa-globe"></i> Website
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link waves-effect waves-light" href="dashboard">
					<i class="fa fa-dashboard"></i> Dashboard
				</a>
			</li>
			<li class="nav-item dropdown">
				<a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown" aria-haspopup="true"
				aria-expanded="false">
				{{ $fname }}
			</a>
			<div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink-333">
				<a class="dropdown-item" href="logout"><i class="fa fa-power-off"></i> Log Out</a>
			</div>
		</li>
	</ul>
</div>
</nav>
<div class="wrapper mt-5">
	@yield('content')
	@yield('main')
</div>
<script type="text/javascript" src="{{ asset('assets/js/material.js') }}"></script>
@stack('js')
</body>
</html>