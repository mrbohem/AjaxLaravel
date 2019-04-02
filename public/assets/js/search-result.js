	$('.city').dropdown({
    allowAdditions: true
  });
	$('.product_category').dropdown({
    allowAdditions: true
  });

function Validate(){
  var product = $("#product_category").val();
  var city = $("#city").val();
  var product_name = $("#product_name").val();
  if(city =="")
  {
  	$('#myModal').modal('show');    
  	$("#validation_msg").html("Please Select City");
    return false;
  }
  else if(product == null && product_name == "")
  {
    $('#myModal').modal('show');    
  	$("#validation_msg").html("Please Select Product or Enter Product Name");
    return false;  
  }
  else if (product !== null || product_name !== ""){
    $("#loding_box1").show();
    return true;
  }
}