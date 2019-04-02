/*-----------------------------------------------------------------------------------
              shows product on scroll in product.php
------------------------------------------------------------------------------------*/
$(document).ready(function(){
    var product_id = $(".header").attr("id");
    var id = $(".navbar").attr("id");
    var base_url = $("#baseUrl").val();
 var limit = 12;
 var start = 0;
 function load_pro(limit, start,product_id,id)
 {
  $('#product_data_message').html('<img src="'+base_url+'assets/images/small_loding.gif">');
  $.ajax({
   url:base_url+"user/sidebar_main_product_scroll",
   method:"POST",
   data:{limit:limit, start:start,product_id:product_id,id:id},
   dataType:"json",
   success:function(data)
   {
    if("ok" in data)
    {
      var base_url = $('#baseUrl').val();
      delete data['ok'];
      $.each(data, function(key, value) {
          $("#best").append('<div class="col-lg-4 col-md-12 mt-5" id="b'+value.assigned_product_id+'" > <div class="card  narrower"  style="box-sizing: border-box;height:100%;"> <a href="'+value.product_href+'" class="view overlay hm-white-slight main-product" assigned-product-id="'+value.assigned_product_id+'" id="h_'+value.assigned_product_id+'" style="margin-left:auto;margin-right:auto;cursor:pointer;"><img src="'+base_url+'/assets/images/lazy.jpg" data-src="'+value.image+'" class="lazy img-fluid" alt="" style="max-height: 250px;width: auto;"> <div class="card-body"><!--Title--> <h5 class="card-title"><i class="fa fa-rupee"></i> '+value.rs+'<div class="float-right">'+value.status+'</div></h5></a> <p class="card-text">'+value.product_name+'</p></div> </div> </div>');
      });
      $('#product_data_message').html('<button type="button" class="btn btn-primary" id="load_more_data">Load More Data</button>');
    }
    else
    {
      $('#product_data_message').html("<button type='button' class='btn btn-info'>No More Products Found</button>");
    }
   }
  });
 }

load_pro(limit, start,product_id,id);

$(document).on('click','#load_more_data',function(e){
  start = start + limit;
  load_pro(limit, start, product_id,id);
});

 setInterval(function(){ 
var lazyImage = document.getElementsByClassName('lazy');
      for(var i=0;i<lazyImage.length;i++){
          lazyImage[i].setAttribute('src',lazyImage[i].getAttribute('data-src'));
      }
}, 500);
});