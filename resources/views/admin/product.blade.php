
@extends('admin/admin-master')

@push('css')
@endpush

@section('content')

<main class="mt-5 pt-4">
    <div class="container dark-grey-text mt-5">
      <div class="row wow fadeIn">
        <div class="col-md-6 mb-4">
          <img src="/uploaded/product_image/{{$products->product_image}}" class="img-fluid" alt="">
        </div>
        <div class="col-md-6 mb-4">
          <div class="p-4">
          	{{ $products->product_name }}
            <p class="lead">
              <i class="fa fa-rupee"></i> <span> {{ $products->product_price }}</span>
            </p>
            <p class="lead font-weight-bold">Description</p>
            <p></p>
            <form>
              	<div class="md-form">
					<input type="text" id="description" class="form-control">
					<label for="description">Type Description</label>
				</div>
				<button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <hr>
    </div>
  </main>

@endsection

@push('js')
@endpush