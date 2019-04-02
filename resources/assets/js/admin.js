/* ---------------------- preview before uploading image ------------- */
var base_url = $('#baseUrl').val();

function readURL(input,file_id) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('.'+file_id+'').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$(".inputfile").change(function () {
var file_id = $(this).attr("id");
    readURL(this,file_id);
});
/* ---------------------- upload form of shop name ------------- */
$("#form_shop_name").on('submit',(function(e) {
	$("#loding_box1").show();
	var input_text_shop_name = $("#input_text_shop_name").val();
  if(input_text_shop_name=="")
  {
    toastr.error("Please Fill Shop Name");
  }
  else{
    $(".shop_name").html();
    $(".shop_name").html(input_text_shop_name);
    	e.preventDefault();
    	$.ajax({
      url: "admin/update_shop_name",
      type: "POST",
      data: {input_text_shop_name:input_text_shop_name},   
      success:function(data) {
      	$("#loding_box1").hide();
      	if(data=="ok"){
      		toastr.success('Shop Name has been updated.');
      	}
      	else{
      		toastr.error(data);
      	}
      }
    });
  }
}));

/*---------------------- upload form of shop image ---------------*/
$(document).on('submit', '#form_input_slider_image', function(e){  
   $("#loding_box1").show();
  e.preventDefault();
  $.ajax({
    url: "admin/form_input_slider_image",
    type: "POST",
    data: new FormData(this),
    contentType: false,
    cache: false,
    processData:false,
    success:function(data) {
    	if(data =="ok"){
        location.href = 'website';
    		toastr.success("Image uploaded, Please wait for a while.");
        $('.input_slider_image').attr("src","");
        $('#form_input_slider_image')[0].reset();
    	}
    	else{
    		toastr.error(data);
    	}
//      $('#best-loder').append(data);
 //     $('#uploadimage1')[0].reset();
 //     $('#previewing').attr("src","icon/product.png");
 //     $('.remove-best').remove();
    $("#loding_box1").hide();
    }
  });
});
/*---------------------- delete form shop image ---------------*/
$(".delete_slider_images").on('click',(function(e) {
	$("#loding_box1").show();
  var delet_id = $(this).attr('name');
  var delet_id = delet_id.split("_");
  $("#delete-shop-image_"+delet_id[1]).remove();
  var delet_button_id = $(this).attr('id');
	var delet_button_id = delet_button_id.split(";");
	var delet_slider_image = delet_button_id[1];
  	$.ajax({
    url:  base_url +"admin/delete_slider_images",
    type: "POST",
    data: {delet_slider_image:delet_slider_image},   
    success:function(data) {
    	$("#loding_box1").hide();
    	if(data=="ok"){
        location.href = 'website';
    		toastr.success('Image Deleted, Please wait for a while.');
    	}
    	else{
    		toastr.error(data);
    	}
    }
  });
}));

 /*-------------------------------------------------------------------------------------
                            Toggle for sidebar
 --------------------------------------------------------------------------------------*/
$(".menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});
$("#cross").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});
$("#bar").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});
$(".tc").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});
$(function() {
        
  $('.list-group-item').on('click', function() {
    $('.sidebar_arrow_change', this)
      .toggleClass('fa-chevron-right')
      .toggleClass('fa-chevron-down');
  });
});


 /*-------------------------------------------------------------------------------------
                            Sidebar Product Modal
 --------------------------------------------------------------------------------------*/
$(document).on('click', '#best-modal-button', function(){
	 $("#product_upload_lable").html("Best");
 });
$(document).on('click', '#deal-modal-button', function(){
   $("#product_upload_lable").html("Deal");
 });
$(document).on('click', '#recent-modal-button', function(){
   $("#product_upload_lable").html("Recent");
 });
window.onclick = function(event) {
  var modal = document.getElementById('product-modal');
  if (event.target == modal) {
    $("#product_upload_lable").html("");
    $("#product_upload_body").html('<button class="btn btn-primary btn-lg" style="margin-top:50px;" data-toggle="modal" data-target="#Modal">Select Product Category</button>');
  }
}
 
 
$(document).ready(function(){

    function reset(){

      var_root=0;

      $("#product_list_body").empty();

      $(".header-product-board").empty();

      var product_catagory = ["Appliances","Baby","Bags","Beauty","Books","Car & Motorbike","Clothing & Accessories","Computers & Accessories","Electronics","Fashion","Grocery & Gourmet Foods","Health & Personal Care","Home & Kitchen","Home Improvement","Industrial & Scientific","Jewellery","Movies & TV Shows","Musical Instruments","Office Products","Outdoor Living","Shoes & Handbags","Software","Sports, Fitness & Outdoors","Toys & Games","Video Games"];

      var j=product_catagory.length;

      for(i=0;i<j;i++)

      {

        var variable = '<div class="col-md-6"><label class="contain">'+product_catagory[i]+'<input type="radio" class="product_list_name" value="'+product_catagory[i]+'" name="product_list_name"><span class="checkmark"></span></label></div>';

        $(".product-modal-body").append(variable);



      }

    }

    var var_root=0;

    var product_catagory = ["Appliances","Baby","Bags","Beauty","Books","Car & Motorbike","Clothing & Accessories","Computers & Accessories","Electronics","Fashion","Grocery & Gourmet Foods","Health & Personal Care","Home & Kitchen","Home Improvement","Industrial & Scientific","Jewellery","Movies & TV Shows","Musical Instruments","Office Products","Outdoor Living","Shoes & Handbags","Software","Sports, Fitness & Outdoors","Toys & Games","Video Games"];

    var j=product_catagory.length;

    for(i=0;i<j;i++)

    {

      var variable = '<div class="col"><label class="contain">'+product_catagory[i]+'<input type="radio" class="product_list_name" value="'+product_catagory[i]+'" name="product_list_name"><span class="checkmark"></span></label></div>';

      $(".product-modal-body").append(variable);



    }

    $(".modal-next-product").click(function(){

      var header_product_board="";

      var product_list_name = $("input[name='product_list_name']:checked").val();

        var other_category = $("#other-category").val();

        if (other_category!==undefined && other_category!=="") {

          var header_product_board = $('.header-product-board').text();

          var final_product_name = header_product_board.split("→");

          $.ajax({

            type:'POST',

            url:'product_list.php',

            data:{other_category:other_category,final_product_name:final_product_name},

            success: function(result){
              alert(result);

              if(result=="ok"){
                alert("Thank you for product listing, Our staff will add your product into product list as soon as possible then you are able to upload product.");
                
                $('#Modal').modal('hide');
                
                reset();
              }

            }
          });

        }
        if(product_list_name!==undefined){

          $(".header-product-board").append("&#8594;"+product_list_name);

        var header_product_board = $('.header-product-board').text();

        var final_product_name = header_product_board.split("→");

          var_root++;


          if(product_list_name=="Other"){

            $("#product_list_body").empty();

            $("#product_list_body").html('<div class="col-lg-12" style="text-align:center;" ><input type="text" placeholder="Name Of Company" id="other-category" size="30"></div>');
            
          }

          else{
            $.ajax({

            type:'POST',

            url:'product_list.php',

            data:{product_list_name:product_list_name,final_product_name:final_product_name},

            success: function(result){

              $("#product_list_body").empty();

              var product_catagory = result.split(";");

              var j=product_catagory.length;

          if(product_catagory[0]=="ok")
		      {
			
      
			     product_upload_modal = $("#product_upload_lable").text();
           
           if(product_upload_modal!="")
           {
            $("#product_upload_body").html('<form id="uploadimage3" method="POST" enctype="multipart/form-data"><input type="hidden" name="pruduct_category_no" value="'+product_catagory[1]+'"><div class="col-lg-12"><div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 product-box2"><div class="inner-product-box2"><div id="image_previewr" class="" ><img id="previewingr" class="img-responsive"  src="icon/product.png"></div><input type="file" name="filer" id="filer" class="inputfile" accept=".png, .jpg, .jpeg"/><label for="filer">Select Product photo</label><div class="price"><input type="text" name="rsr" id="text" placeholder="enter here price of product" value=""></div><div class="product-name"><input type="text" name="namr" placeholder="etere here product name"></div></div></div></div><input type="submit" id="myr" value="Upload"/></form>');
           }

            $("#side-product-referesh").empty();

            $("#side-product-referesh").load("php_require_echo_product_list.php");

            $('#Modal').modal('hide');

            var header_product_board = $('.header-product-board').text();

            reset();

           /* var final_product_name = header_product_board.split("→");

            final_product_name_under = $.map(final_product_name,function(value){
              return value.replace(/ /g, '_');
            });

            var p=final_product_name.length;

            if(document.getElementById(final_product_name_under[p-3])) {

              if(document.getElementById(final_product_name_under[p-2])) {

                if(document.getElementById(final_product_name_under[p-1])) {

                  alert("You have already select.");

                }
                else{

                  $('#'+final_product_name_under[p-2]).append('<li id="'+final_product_name_under[p-1]+'">'+final_product_name[p-1]+'</li>');

                }

              }
              else{
                alert(final_product_name);
                $('#'+final_product_name_under[p-3]).append('<li id="'+final_product_name_under[p-2]+'">'+final_product_name[p-2]+'<ul><li id="'+final_product_name_under[p-1]+'">'+final_product_name[p-1]+'</li></ul></li>');
              }
            }
            else{

              $('#product_catagory_name').append('<ul><li>'+final_product_name[p-3]+'<ul id="'+final_product_name_under[p-3]+'"><li>'+final_product_name[p-2]+'<ul id="'+final_product_name_under[p-2]+'"><li id="'+final_product_name_under[p-1]+'">'+final_product_name[p-1]+'</li></ul></li></ul></li></ul>');

            }*/
  
          }


            for(i=0;i<j;i++)

            {
                var variable = '<div class="col-lg-6"><label class="contain">'+product_catagory[i]+'<input type="radio" class="product_list_name" value="'+product_catagory[i]+'" name="product_list_name"><span class="checkmark"></span></label></div>';

                $(".product-modal-body").append(variable);

            }

          

              //$(".wait").hide();

            }

          });
        }

      }

      });

      $("#back").click(function(){

    reset();

  });

});


/*-----------------------------------------------------------------------------------
on click fuction on sidebar product to product and change the background-color of navbar
------------------------------------------------------------------------------------*/
 $(document).on('click', '.side-to-product', function(){
    var product_id = $(this).attr("id");
    
    $("#loding_box1").show();
        $.ajax({
            type:'POST',
            url: "admin/sidebar_product",
            cache:false,
            data:{product_id:product_id},
            success: function(result){
            $("#page-content-wrapper").html(result);
            $("#loding_box1").hide();
        }});
    });

 /*-----------------------------------------------------------------------------------
remove form best/deal/recent
------------------------------------------------------------------------------------*/
 $(document).on('click', '.lable_remove', function(){
    var product_id = $(this).attr("id");
    product_id = product_id.split("_");
    var remove_lable = product_id[1];
    $(".ajax").show();

    $('#b'+remove_lable+'').hide('slow');
    var assigned_product_id = $(this).attr("assigned-product-id");
        $.ajax({
            type:'POST',
            url: "admin/lable_remove",
            data:{remove_lable:remove_lable,assigned_product_id:assigned_product_id},
            success: function(data){
            	if(data=="ok"){
            		toastr.success('Removed');
              }
            	else{
            		toastr.error(data);
            	}
    $(".ajax").hide();

        }
    });
});
 /*-----------------------------------------------------------------------------------
              for loding home page
------------------------------------------------------------------------------------*/
$(document).on('click', '#home', function(e){
  e.preventDefault();
  var product_id = $(this).attr("class");
    $("#loding_box1").show();
        $.ajax({
            type:'POST',
            url: "admin/website_home",
            data:{product_id:product_id},
            success: function(result){
            $("#page-content-wrapper").html(result);
            $("#loding_box1").hide();
        }});
    });

 /*-----------------------------------------------------------------------------------
              for loding setting page
------------------------------------------------------------------------------------*/
$(document).on('click', '#settings', function(){
    var product_id = $(this).attr("id");
    $("#loding_box1").show();
        $.ajax({
            type:'POST',
            url: "admin/website_settings",
            data:{product_id:product_id},
            success: function(result){
            $("#page-content-wrapper").html(result);
            $("#loding_box1").hide();
        }});
    });

/*-----------------------------------------------------------------------------------
              for update contact us
------------------------------------------------------------------------------------*/
$("#address-form").on('submit',(function(e) {
  e.preventDefault();
  $("#loding_box1").show();
  var address= $('#contact-address').val();
  var city= $('#contact-city').val();
  var website= $('#contact-website').val();
  var email = $('#contact-email').val();
  var phone = $('#contact-phone').val();
  $.ajax({
    url: "admin/update_contact",
    type: "POST",
    data:{address:address,city:city,website:website,email:email,phone:phone},
    success:function(data) {
         $("#loding_box1").hide();
         if(data=="ok"){
          toastr.success("Your Contact has been updated.");
         }
         else{
          toastr.error(data);
         }
    },
    error: function (request, status, error) {
        console.log(request.responseText);
    }
  });
}));
/*-----------------------------------------------------------------------------------
              product to main product
------------------------------------------------------------------------------------*/
$(document).on('click', '.main-product', function(){
  $("#loding_box1").show();
var product_no = $(this).attr("id");
product_no = product_no.split("_");
var product_id = product_no[1];
var assigned_product_id = $(this).attr("assigned-product-id");
    $.ajax({
        type:'POST',
        url: "admin/product_to_main_product",
        data:{product_id:product_id,assigned_product_id:assigned_product_id},
        success: function(result){
        $("#page-content-wrapper").html(result);
        $("#loding_box1").hide();
    }});
});
/*-----------------------------------------------------------------------------------
              product lable add to best/deal/recent product in product.php
------------------------------------------------------------------------------------*/
$(document).on('click', '.product_lable', function(){
  $("#loding_box1").show();
  var product_id_lable= $(this).attr('id');
  var product_lable_text = $('#'+product_id_lable+'').text();
  var product_lable_text_array = product_lable_text.split(" ");
  var product_lable = product_id_lable.split("_");
  var product_lable_name = product_lable[2];
  var product_no = product_lable[3];
  if(product_lable_name=="best"){
    //$('#'+product_id_lable+'').html("s");
    if(product_lable_text_array[0] =="Add"){
      $('#'+product_id_lable+'').html("Remove from Best Product");
    }
    else if(product_lable_text_array[0] == "Remove" ){
      $('#'+product_id_lable+'').html("Add to Best Product");
      product_lable_name="";
    }
    $('#product_lable_deal_'+product_no+'').html("Add to Deal");
    $('#product_lable_recent_'+product_no+'').html("Add to Recent Product");
  }
  else if(product_lable_name=="deal"){
    if(product_lable_text_array[0] =="Add"){
      $('#'+product_id_lable+'').html("Remove from Deal");
    }
    else if(product_lable_text_array[0] == "Remove" ){
      $('#'+product_id_lable+'').html("Add to Deal of the day");
      product_lable_name="";
    }
    $('#product_lable_best_'+product_no+'').html("Add to Best Product");
    $('#product_lable_recent_'+product_no+'').html("Add to Recent Product");
  }
  else if(product_lable_name=="recent"){
    if(product_lable_text_array[0] =="Add"){
      $('#'+product_id_lable+'').html("Remove from Recent Product");
    }
    else if(product_lable_text_array[0] == "Remove" ){
      $('#'+product_id_lable+'').html("Add to Recent Product");
      product_lable_name="";
    }
    $('#product_lable_best_'+product_no+'').html("Add to Best Product");
    $('#product_lable_deal_'+product_no+'').html("Add to Deal");
  }
  var assigned_product_id = $(this).attr('assigned-product-id');

  $.ajax({
      type:'POST',
      url:"admin/product_lable",
      data:{product_no:product_no,product_lable_name:product_lable_name,assigned_product_id:assigned_product_id},
      success: function(data){
        $("#loding_box1").hide();
        if(data=="ok"){
          toastr.success('Added');
        }
        else{
          toastr.error('Not Added')
        }
      }
    })
  });
  /*---------------------------------------------------------------------------------
                    product add to out of stock in product.php
-----------------------------------------------------------------------------------*/
$(document).on('click', '.product-available', function(){
  $("#loding_box1").show();
  var file= this.id;
  var producta = $('#'+file).text();
  var producta = producta.split(" ");
  var producta = producta[2];
  productos = file.replace(/[^0-9]+/ig,"");
  if(producta=="Out"){
  var productav=0;
  $('#'+file).text('Add to In Stock');
  $('#pink_'+productos).html('Out of stock');
  }
  else if(producta=="In"){
   var productav=1;
   $('#'+file).text('Add to Out of Stock');
   $('#pink_'+productos).html('');
  }
  var assigned_product_id = $(this).attr('assigned-product-id');
  $.ajax({
      type:'POST',
      url:"admin/product_available",
      data:{productav:productav,productos:productos,assigned_product_id:assigned_product_id},
      success: function(data){
        $("#loding_box1").hide();
        
        if(data=="ok"){
          toastr.success("Updated");
        }
        else{
          toastr.error(data);
        }
        
      }
    })
  });
/*---------------------------------------------------------------------------------
                  delete product text from admin-main-product.php
-----------------------------------------------------------------------------------*/
          $(document).on("click", ".product-text-delete", function(e) {
          e.preventDefault();
          var product_id = $("#product_detail_text").attr("class");
        product_id = product_id.split("_");
        var product_id = product_id[1];
          var text_id = $(this).attr("id");
        text_id = text_id.split("_");
        var text_id = text_id[1];
        $("#remove_text"+text_id).hide('slow');
          var mainproductdetailtext_id = $(this).attr("mainproductdetailtext-id");
          $.ajax({
            url:"admin/product_text_delete",
            type: "POST",
            data:{product_id:product_id,text_id:text_id,mainproductdetailtext_id:mainproductdetailtext_id},
            success:function(data) {
                 if(data=="ok"){
                  toastr.success("Deleted");
                 }
                 else{
                  toastr.error(data);
                 }
            }
          });
      });
/*-----------------------------------------------------------------------------------
              Delete product form database for sidebar product
------------------------------------------------------------------------------------*/
$(document).on('click', '.trash-product', function(){
    assigned_product_id = $(this).attr('assigned-product-id');
    product_image       = $(this).attr('product-image');
    product_model_id    = $(this).attr('product-model-id');
    var button_id = $(this).attr("id");   
    $('#b'+button_id+'').hide('slow');
    $.ajax({
      type:'POST',
      url:"admin/trash_product",
      data:{product_image:product_image,assigned_product_id:assigned_product_id,product_model_id:product_model_id},
      success: function(data){
        if(data=="ok"){
          toastr.success('Deleted');
        }
        else{
          toastr.error(data);
        }
      }
    })
  });
/*-----------------------------------------------------------------------------------
              Edit product form database for sidebar product
------------------------------------------------------------------------------------*/
$(document).on('click', '.edit_product_button', function(){  
  var product_id = $(this).attr("id");
  product_id = product_id.split("_");
  var product_id = product_id[1];
  $("#edit_product_id").html(product_id);
});



 setInterval(function(){ 
var lazyImage = document.getElementsByClassName('lazy');
      for(var i=0;i<lazyImage.length;i++){
        //if(elementInViewport(lazyImage[i]))
        //{
          lazyImage[i].setAttribute('src',lazyImage[i].getAttribute('data-src'));
        //}
      }
}, 500);