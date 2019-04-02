$(document).ready(function() {

  $(document).on('click','.loding-button',(function(e) {
    $(".loding-button").html('<i class="fa fa-refresh fa-spin"></i> Wait');
  }));

  $(document).on('click','#add_cart',(function(e) {
  e.preventDefault();
  $("#loding_box1").show();
  var product_id = $("#product_id").val();
  var base_url = $("#base_url").val();
  $('#add_cart').prop("disabled", true);
  $.ajax({
    url: base_url+"user/add_cart",
    type: "POST",
    data:{product_id:product_id},
    success:function(data) {
      toastr.success(data);
      $('#add_cart').prop("disabled",false);
      $(".cart_status").html('<button class="btn btn-danger loding-button" id="remove_cart" > <i class="fa fa-shopping-cart mr-1"></i> Remove From Cart</button>');
    }
  });
}));

$(document).on('click','#remove_cart',(function(e) {
  e.preventDefault();
  $("#loding_box1").show();
  var product_id = $("#product_id").val();
  var base_url = $("#base_url").val();
  $('#remove_cart').prop("disabled", true);
  $.ajax({
    url: base_url+"user/remove_cart",
    type: "POST",
    data:{product_id:product_id},
    success:function(data) {
      toastr.success(data);
      $(".cart_status").html('<button class="btn btn-primary loding-button" id="add_cart"> <i class="fa fa-shopping-cart mr-1"></i> add to cart</button>');
    }
  });
}));
});