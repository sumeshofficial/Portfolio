document.addEventListener('DOMContentLoaded', function () {
  var navbar1 = document.getElementById('navbar1');

  if (navbar1) {

      window.addEventListener('scroll', function () {
          if (window.scrollY > 10) {
              // Add background color when scrolling down
              navbar1.classList.remove('transparent');
              navbar1.classList.add('solid-bg');
          } else {
              // Remove background color when scrolled back to top
              navbar1.classList.remove('solid-bg');
              navbar1.classList.add('transparent');
          }
      });
  } else {
  }
});

var multipleCardCarousel = document.querySelector(
    "#carouselExampleControls"
  );
  if (window.matchMedia("(min-width: 768px)").matches) {
    var carousel = new bootstrap.Carousel(multipleCardCarousel, {
      interval: false,
    });
    var carouselWidth = $(".carousel-inner")[0].scrollWidth;
    var cardWidth = $(".carousel-item").width();
    var scrollPosition = 0;
    $("#carouselExampleControls .carousel-control-next").on("click", function () {
      if (scrollPosition < carouselWidth - cardWidth * 4) {
        scrollPosition += cardWidth;
        $("#carouselExampleControls .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
    $("#carouselExampleControls .carousel-control-prev").on("click", function () {
      if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        $("#carouselExampleControls .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
  } else {
    $(multipleCardCarousel).addClass("slide");
  }
  $("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbz56OxQ6w2pz0YQ5XoZBId4ee3hh6zmNRn_El5iCdKswU-2bgrJjWaxzcwZXa4-41Md/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})
  