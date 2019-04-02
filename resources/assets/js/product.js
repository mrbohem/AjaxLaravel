/*-----------------------------------------------------------------------------------
                          Upload product to database for sidebar product
------------------------------------------------------------------------------------*/
$("#uploadproduct").on('submit',(function(e) {
  
   $("#loding_box1").show();
  e.preventDefault();
  $.ajax({
    url: "admin/upload_product",
    type: "POST",
    data: new FormData(this),
    contentType: false,
    cache: false,
    processData:false,
    dataType:"json",
    success:function(data) {
      $("#loding_box1").hide();
      if(data.error)
      {
        toastr.error(data.error);
      }
      else
      {

        if(data.uploaded){
          
          var images = $('.mainpropuct_preview').attr('src');

          delete data['uploaded'];
          
          toastr.success('Product uploaded');
          
            
            $("#best").append('<div class="col-lg-4 col-md-12 mt-5" id="b'+data.assigned_product_id+'" > <div class="card narrower"  style="box-sizing: border-box;height:100%;" > <div class="view overlay hm-white-slight main-product" id="h_'+data.assigned_product_id+'" style="margin-left:auto;margin-right:auto;" assigned-product-id="'+data.assigned_product_id+'"> <img src="'+images+'" class="img-fluid" alt="" style="max-height: 250px;width: auto;"> <a> <div class="mask"></div> </a> </div> <div class="card-body"> <h5 class="pink-text" id="pink_'+data.assigned_product_id+'"></h5> <h5 class="card-title"><i class="fa fa-rupee"></i> '+data.product_price+'</h5> <div class="dropdown" style="position:absolute;float:right;right:15px;top:15px;"> <button class="btn btn-info" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="fa fa-cog"></i> </button> <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu2"> <a class="dropdown-item product_lable" id="product_lable_best_'+data.assigned_product_id+'" assigned-product-id="'+data.assigned_product_id+'">Add to Best Product</a> <a class="dropdown-item product_lable" id="product_lable_deal_'+data.assigned_product_id+'" assigned-product-id="'+data.assigned_product_id+'">Add to Deal of the day</a> <a class="dropdown-item product_lable" id="product_lable_recent_'+data.assigned_product_id+'" assigned-product-id="'+data.assigned_product_id+'">Add to recent product</a> <div class="dropdown-divider"></div> <a class="dropdown-item product-available" id="productavailable'+data.assigned_product_id+'" assigned-product-id="'+data.assigned_product_id+'">Add to Out of stock </a> <div class="dropdown-divider"></div> <a class="dropdown-item edit_product_button" id="c_'+data.assigned_product_id+'" data-toggle="modal" data-target="#editmodal">Edit</a> <a class="dropdown-item trash-product" id="'+data.assigned_product_id+'" assigned-product-id="'+data.assigned_product_id+'" product-image="'+data.rename+'" product-model-id="0">Delete</a> </div> </div> <p class="card-text">'+data.product_name+'</p> <p class="card-text">Product Id. - '+data.assigned_product_id+'</p> </div> </div> </div>');
            
            $('#uploadproduct')[0].reset();
            $('.mainpropuct_preview').attr("src","");
        }
      }
    }
  });
}));
  /*-----------------------------------------------------------------------------------
              shows product on scroll in product.php
------------------------------------------------------------------------------------*/
$(document).ready(function(){
  var limit = 12;
  var start = 0;
  function load_pro(limit, start)
  {
    var category_number = $("#category_number").val();
    $('#product_data_message').html('<img src="'+base_url+'assets/images/small_loding.gif">');
    $.ajax({
    url:"admin/sidebar_main_product_scroll",
    method:"POST",
    cache: false,
    async: true,
    data:{limit:limit, start:start,category_number:category_number},
    dataType:"json",
    success:function(data)
    {
      if("ok" in data)
      {
        var base_url = $('#baseUrl').val();
      delete data['ok'];
      $.each(data, function(key, value) {
          $("#best").append('<div class="col-lg-4 col-md-12 mt-5" id="b'+value.assigned_product_id+'" > <div class="card  narrower"  style="box-sizing: border-box;height:100%;"> <div class="view overlay hm-white-slight main-product" assigned-product-id="'+value.assigned_product_id+'" id="h_'+value.assigned_product_id+'" style="margin-left:auto;margin-right:auto;"> <img src="'+base_url+'/assets/images/lazy.jpg" data-src="'+value.product_image+'" class="lazy img-fluid" alt="" style="max-height: 250px;width: auto;"> <a> <div class="mask"></div> </a> </div> <div class="card-body"> <h5 class="pink-text" id="pink_'+value.assigned_product_id+'">'+value.status+'</h5> <!--Title--> <h5 class="card-title"><i class="fa fa-rupee"></i> '+value.rs+'</h5> <div class="dropdown" style="position:absolute;float:right;right:15px;top:15px;"> <button class="btn btn-info" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="fa fa-cog"></i> </button> <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu2"> <a class="dropdown-item product_lable" id="product_lable_best_'+value.assigned_product_id+'" assigned-product-id="'+value.assigned_product_id+'">'+value.lable_best+'</a> <a class="dropdown-item product_lable" id="product_lable_deal_'+value.assigned_product_id+'" assigned-product-id="'+value.assigned_product_id+'">'+value.lable_deal+'</a> <a class="dropdown-item product_lable" id="product_lable_recent_'+value.assigned_product_id+'" assigned-product-id="'+value.assigned_product_id+'">'+value.lable_recent+'</a> <div class="dropdown-divider"></div> <a class="dropdown-item product-available" id="productavailable'+value.assigned_product_id+'" assigned-product-id="'+value.assigned_product_id+'">'+value.product_available+'</a> <div class="dropdown-divider"></div> <a class="dropdown-item edit_product_button" id="c_'+value.assigned_product_id+'" data-toggle="modal" data-target="#editmodal">Edit</a> <a class="dropdown-item trash-product" assigned-product-id="'+value.assigned_product_id+'" product-image="'+value.product_image+'" product-model-id="'+value.product_model_id+'" id="'+value.assigned_product_id+'">Delete</a> </div> </div> <p class="card-text">'+value.product_name+'</p> <p class="card-text">Product Id. - '+value.assigned_product_id+'</p> </div> </div> </div>');
      });
      $('#product_data_message').html('<button type="button" class="btn btn-primary" id="load_more_data">Load More Products</button>');
    }
    else
    {
      $('#product_data_message').html("<button type='button' class='btn btn-info'>No More Products Found</button>");
    }
   }
    });
 }

load_pro(limit, start);

$(document).on('click','#load_more_data',function(e){
  start = start + limit;
  load_pro(limit, start);
});


});
/*-----------------------------------------------------------------------------------
              shows product image before upload 
------------------------------------------------------------------------------------*/
  function readURL(input,file_id) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('.'+file_id+'').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$(".inputfile").change(function (){
var file_id = $(this).attr("id");
    readURL(this,file_id);
});

$("#editproduct").on('submit',(function(e) {
  e.preventDefault();  
  var assigned_product_id   = $('#edit_product_id').text();
  var name                  = $('#new_name').val();
  var rs                    = $('#new_rs').val();
  $("#loding_box1").show();
  $.ajax({
    url: "admin/update_name_price",
    type: "POST",
    data:{assigned_product_id:assigned_product_id,name:name,rs:rs},
    success:function(data) {
         $("#loding_box1").hide();
         if(data=="ok"){
          toastr.success("Product has been updated. You have to refressh your page.");
         }
         else{
          toastr.error(data);
         }
    }
  });
}));