<?php
Route::get('/','MainController@index');
Route::get('/logout','MainController@logout');

Route::middleware('guest')->group(function(){
	Route::get('register'	, 'MainController@register')->name('register');
	Route::get('login'		, 'MainController@login')->name('login');
});

Route::middleware('checkAjax'	, 'guest')->group(function(){
	Route::post('register'		, 'MainController@register_ajax'); 
	Route::post('login'			, 'MainController@login_ajax');
});

Route::middleware('auth')->group(function(){
	Route::get('profile'					,'Admin\ProfileController@index');
	Route::get('website'					,'Admin\WebsiteController@index');
	Route::get('digitalcard'				,'Admin\DigitalCardController@index');
	Route::get('dashboard'					,'Admin\DashboardController@index');
	Route::get('website/product/{product_id}','Admin\WebsiteController@product')->where(['product_id'=>'[0-9]+']);
});

Route::middleware('checkAjax','auth')->group(function(){
	Route::post('profile'			, 'Admin\ProfileController@profile_ajax');
	Route::post('profile_image'		, 'Admin\ProfileController@profile_image');
	Route::post('product_category'	, 'Admin\WebsiteController@product_category');
	Route::post('upload_product'	, 'Admin\WebsiteController@upload_product');
});