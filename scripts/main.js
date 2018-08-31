// Create Index of H2s

$(document).ready(function() {
  $("h2").each(function(i) {
    var current = $(this);

    var $section = current.closest('section');
    $section.attr('id', 'link-' + i);
    $(".sidebar ol").append("<li><a id='link" + i + "' href='#link-" + i + "' title='" + current.attr("tagName") + "'>" + current.html() + "</a></li>");
  });
});

// Anchor Link Scroll Page

$(document).ready(function() {
  //Smooth scrolling when click to nav
  $('.sidebar > ol > li > a').click(function(e) {
    e.preventDefault();
    var curLink = $(this);
    var scrollPoint = $(curLink.attr('href')).position().top;
    $('body,html').animate({
      scrollTop: scrollPoint
    }, 300);
  })

  $(window).scroll(function() {
    onScrollHandle();
  });

  function onScrollHandle() {
    //Get current scroll position
    var currentScrollPos = $(document).scrollTop();
    //Iterate through all node
    $('.sidebar > ol > li > a').each(function() {
      var curLink = $(this);
      var refElem = $(curLink.attr('href'));
      //Compare the value of current position and the every section position in each scroll
      if (refElem.position().top - 5 <= currentScrollPos && refElem.position().top + refElem.height() > currentScrollPos) {
        //Remove class active in all nav
        $('.sidebar > ol > li').removeClass("active");
        //Add class active
        curLink.parent().addClass("active");
      } else {
        curLink.parent().removeClass("active");
      }
    });
  }
});

// Dropdown Buttons

$('.btn-dropdown').click(function(e){
  $(this).parent().toggleClass('open');
});
