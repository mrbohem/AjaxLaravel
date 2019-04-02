$(document).ready(function() {

  $("#register").on('submit',(function(e) {
    e.preventDefault();
    var fname       = $("#fname").val();
    var lname       = $("#lname").val();
    var email       = $("#email").val();
    var phone       = $("#phone").val();
    var password    = $("#password").val();
    var repassword  = $("#repassword").val();
    $('#register_btn').prop("disabled", true);
    $("#register_btn").html('<i class="fa fa-refresh fa-spin"></i> Wait');
    $("#message").html("");
  	$.ajax({
      url: "main/register",
      type: "POST",
      dataType:"JSON",
      data: {fname:fname,lname:lname,email:email,phone:phone,password:password,repassword:repassword},   
      success:function(data) {
        if(data.registered)
        {
          $("#message").css("color","green");
          $("#message").html("You are Registered please wait for a while.");
          location.href = 'profile';
        }
        else{
          $("#message").html(data);
          $('#register_btn').prop("disabled", false);
          $("#register_btn").html('Register');
        }
      }
    });
  }));

$("#login").on('submit',(function(e) {
  e.preventDefault();
  var email       = $("#username").val();
  var password    = $("#login_password").val();
  $('#login_btn').prop("disabled", true);
  $("#login_btn").html('<i class="fa fa-refresh fa-spin"></i> Wait');
  $("#login_message").html("");
  $.ajax({
    url: "main/login",
    type: "POST",
    dataType:"JSON",
    data: {email:email,password:password},   
    success:function(data) {
      if(data.login)
      {
        $("#login_message").css("color","green");
        $("#login_message").html("You are logged in please wait for a while.");
        location.href = 'profile';
      }
      else if(data.error)
      {
        $("#login_message").html(data.error);
        $('#login_btn').prop("disabled", false);
        $("#login_btn").html('Log In');
      }
    }
  });
}));
});
