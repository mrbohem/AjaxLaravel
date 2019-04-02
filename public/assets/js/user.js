var base_url = $('#baseUrl').val(); 
 /*-----------------------------------------------------------------------------------
              for changing password
------------------------------------------------------------------------------------*/

  $(document).on('submit', '#setting-change-password', function(e){
  e.preventDefault();
    var crt_pwd= $("#crt-pwd").val();
    var nw_pwd= $("#nw-pwd").val();
    var cfm_nw_pwd= $("#cfm-nw-pwd").val();
    var n = nw_pwd.length;
    if(crt_pwd==""){
        toastr.error('Please enter current password');
    }
    else if(nw_pwd=="" ){
        toastr.error('Please enter new password');
    }
    else if(cfm_nw_pwd=="") 
    {
        toastr.error('Please enter confirm new password');
    }
    else if(n<7)
    {
      toastr.error('Minimum length of password should be 7');
    }
    else if(nw_pwd !== cfm_nw_pwd)
    {
      toastr.error('Password Does Not Match');
    }
    else{
      $('#user_password_btn').prop("disabled", true);
      $("#user_password_btn").html('<i class="fa fa-refresh fa-spin"></i> Wait');
    $.ajax({
      type:'POST',
      url:"admin/change_password",
      data:{
        crt_pwd:crt_pwd,
        nw_pwd:nw_pwd,
        cfm_nw_pwd:cfm_nw_pwd
      },
      success: function(data){
        $("#loding_box1").hide();
        $('#user_password_btn').prop("disabled", false);
        $("#user_password_btn").html('Update');
        if(data=="ok"){
          toastr.success("Password changed.");
        }
        else{
          toastr.error(data);
        }
        
      }
    })
  }
});
 /*-----------------------------------------------------------------------------------
              for upadate user detail
------------------------------------------------------------------------------------*/
  $(document).on('submit', '#user-detail', function(e){
  e.preventDefault();
//  $("#loding_box1").show();
  var fname = $("#fname").val();

    var lname = $("#lname").val();

    var email = $("#email").val();

    var phone = $("#phone").val();

    var city = $("#city").val();

    var pin_code = $("#pin_code").val();

    var address = $("#address").val();

    var company = $("#company").val();
    var facebook = $("#facebook").val();
    var instagram = $("#instagram").val();
    var twitter = $("#twitter").val();
    var google = $("#google").val();
    var linkedin = $("#linkedin").val();
    var whatsapp = $("#whatsapp").val();
    var website = $("#website").val();
    var profession = $("#profession").val();

    var description = $("#description").val();
    
    if(fname=='' || lname=='' || pin_code=='' || city=='' || address=='')
    {
      $("#loding_box1").hide();
      toastr.error("please enter all field");
    }
    else{
      $('#user_detail_btn').prop("disabled", true);
      $("#user_detail_btn").html('<i class="fa fa-refresh fa-spin"></i> Wait');
      $.ajax({
      url: "admin/dashboard_home",
      type: "POST",
      data: {fname:fname,lname:lname,pin_code:pin_code,city:city,address:address,company:company,facebook:facebook,twitter:twitter,google:google,instagram:instagram,website:website,whatsapp:whatsapp,linkedin:linkedin,profession:profession,description:description},
      success:function(data) {
//        $("#loding_box1").hide();
        $('#user_detail_btn').prop("disabled", false);
        $("#user_detail_btn").html('Update');
        if(data=="ok"){
          toastr.success('Updated');
        }
        else{
          toastr.error(data);
        }
      },
      error: function (request, status, error) {
        console.log(request.responseText);
    }
    });
  }
});


/* ---------------------- preview before uploading image ------------- */
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
/* ---------------------- upload user image ------------- */
  $(document).on('submit', '#user-image-form', function(e){
  e.preventDefault();
  $('#user_image_btn').prop("disabled", true);
  $("#user_image_btn").html('<i class="fa fa-refresh fa-spin"></i> Wait');
    $.ajax({
    url: "admin/dashboard_user_image",
    type: "POST",
    data: new FormData(this),
    contentType: false,
    cache: false,
    processData:false,
    success:function(data) {
      $('#user_image_btn').prop("disabled",false);
      $("#user_image_btn").html('Upload');
      if(data=="ok"){
        toastr.success("Image Uploaded")
      }
      else{
        toastr.error(data);
        }
    }
  });
});

