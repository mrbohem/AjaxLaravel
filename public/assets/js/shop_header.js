$(document).ready(function() {
  //to activate tool tip
  var base_url  =  $("#baseUrl").val();
  $('[data-toggle="tooltip"]').tooltip()

  //don't stop on hover
  $("#carouselExampleIndicators").carousel({pause: "false"});

  // cart detail
  $(document).on('click','#cart_button',(function(e) {
    e.preventDefault();
    var base_url  =  $("#base_url").val();
    var a         = 1;
    $("#cart_table_body").html('<div class="text-center"><img src="'+base_url+'/assets/images/small_loding.gif"></div>');
    $.ajax({
      url: base_url+"user/cart_detail",
      method: "POST",
      data:{a:a},
      dataType:"json",
      success:function(data) {
        $("#cart_table_body").html('');
        if("ok" in data)
        {
          var base_url = $('#baseUrl').val();
          delete data['ok'];
          $.each(data, function(key, value) {
            $("#cart_table_body").prepend('<tr id="'+value.product_id+'"> <th scope="row"> <a href="https://www.google.com"> <img src="'+value.product_image+'" alt="" class="img-fluid z-depth-0"> </a> </th> <td> <strong style="white-space: nowrap;"><i class="fa fa-rupee"></i>'+value.product_price+'</strong> </td> <td> <a href="https://www.google.com"> '+value.product_name+'</a> </td> <td>'+value.shop_name+'</td> <td>'+value.shop_address+'</td> <td style="white-space: nowrap;"><i class="fa fa-phone"></i>'+value.phone+'</td> <td> <button type="button" class="btn btn-sm btn-danger remove_cart_items" data-toggle="tooltip" data-placement="top" title="Remove from Cart" productId="'+value.product_id+'">X </button> </td> </tr>');
          });
        }
        else{
          $("#cart_table_body").html("<div class='text-center'><button class='btn btn-primary'>Your Cart is Empty</button><div>");
        }
      }
    });
  }));

  //remove item from cart 
  $(document).on('click','.remove_cart_items',(function(e) {
    e.preventDefault();
    var base_url  =  $("#baseUrl").val();
    var productID = $(this).attr('productID');
    $("#"+productID).remove();
    $.ajax({
      url: base_url+"user/remove_cart",
      method: "POST",
      data:{product_id:productID},
      success:function(data) {
        toastr.success(data);
      }
    });
  }));

  setInterval(function(){ 
var lazyImage = document.getElementsByClassName('lazy');
      for(var i=0;i<lazyImage.length;i++){
          lazyImage[i].setAttribute('src',lazyImage[i].getAttribute('data-src'));
      }
}, 500);
});





$("#shop_search_product").on('submit',(function(e) {
  e.preventDefault();
  var base_url  =  $("#baseUrl").val();
  var search_text = $("#search_text").val();
  var shop        = $("#shop").val();
  $('#search_product_modal_body').html("");
  if(search_text=="" || shop=="")
  {
    toastr.error("Please type product name");
    $('#search_product_modal_body').html("Plesase type product name");
  }
  else{
      $.ajax({
      url: base_url+"user/shop_search_product",
      type: "POST",
      data: {shop:shop,search_text:search_text},
      dataType: "json", 
      success:function(data) {
        if("ok" in data)
        {
          var base_url = $('#baseUrl').val();
          delete data['ok'];
          $.each(data, function(key, value) {
              $("#search_product_modal_body").append('<div class="col-lg-12 col-md-12 mt-5" id="b'+value.assigned_product_id+'" > <div class="card  narrower"  style="box-sizing: border-box;height:100%;"> <a href="'+value.product_href+'" class="view overlay hm-white-slight main-product" assigned-product-id="'+value.assigned_product_id+'" id="h_'+value.assigned_product_id+'" style="margin-left:auto;margin-right:auto;cursor:pointer;"><img src="'+base_url+'/assets/images/lazy.jpg" data-src="'+value.image+'" class="lazy img-fluid" alt="" style="max-height: 250px;width: auto;"> <div class="card-body"><!--Title--> <h5 class="card-title"><i class="fa fa-rupee"></i> '+value.rs+'<div class="float-right">'+value.status+'</div></h5></a> <p class="card-text">'+value.product_name+'</p></div> </div> </div>');
          });
        }  
        else{
          toastr.error("no");
        }
      },
      error: function (request, status, error) {
        console.log(request.responseText);
      }
    });
  }
}));