const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

  $(function() {
    $("#dishtv").slice(0, 4).show();
    $("#loadMore").on('click', function(e) {
      e.preventDefault();
      $("#dishtv:hidden").slice(0, 4).slideDown();
      if ($("#dishtv:hidden").length == 0) {
        $("#loadLess").fadeIn('slow');
        $("#loadMore").hide();
        // $("#loadMore").text('Load only the first 4');
      }
      $('html,body').animate({
        scrollTop: $(this).offset().top
      }, 1500);
    });
  
    $("#loadLess").on('click', function(e) {
      e.preventDefault();
      $('#dishtv:not(:lt(4))').fadeOut();
      $("#loadMore").fadeIn('slow');
      $("#loadLess").hide();
  
      desiredHeight = $(window).height();
  
      $('html,body').animate({
        scrollTop: $(this).offset().top + desiredHeight
      }, 1500);
    });
  
  });