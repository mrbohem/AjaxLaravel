<!DOCTYPE html>
<html>
<head>
	<title></title>

	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="{{ asset('assets/css/material.css') }}">
</head>
<body>
	<div class="container">
		@yield('content')
		@yield('main')
	</div>
	<script type="text/javascript" src="{{ asset('assets/js/material.js') }}"></script>
	@stack('js')
</body>
</html>