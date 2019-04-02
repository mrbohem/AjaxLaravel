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
    $('.fa', this)
      .toggleClass('fa-chevron-right')
      .toggleClass('fa-chevron-down');
  });
});


var overlay = document.getElementById("loding_box3");
window.addEventListener('load',function(){
  overlay.style.display = "none";
});