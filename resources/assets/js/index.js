function Validate(){
  var product = $("#product_category").val();
  var city = $("#city").val();
  var product_name = $("#product_name").val();
  if(city == null)
  {

    $('#myModal').modal('show');
    $(".search-data").html("Please Select City");

    return false;
  }
  else if(product == null && product_name == "")
  {
    $('#myModal').modal('show');
    $(".search-data").html("Please Select Product or Enter Product Name");
    return false;  
  }
  else if (product !== null || product_name !== ""){
    $("#loding_box1").show();
    return true;
  }
}




	$('.close').click(function(e){

		e.preventDefault();

		$("#myModal").css("display","none");

	});

	var modal = document.getElementById('myModal');

	window.onclick = function(event) {

    if (event.target == modal) {

        modal.style.display = "none";

        $('.search-data')[0].reset();
    }
}

