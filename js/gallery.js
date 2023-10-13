$.noConflict();
jQuery(document).ready(function($) {
  // Your Magnific Popup initialization code here
  $(".gallery").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    }
  });
});

function disableAutoplay() {
  // Get all video elements on the page.
  var videos = document.querySelectorAll("video");

  // Loop through all videos and set the autoplay attribute to false.
  for (var i = 0; i < videos.length; i++) {
    videos[i].setAttribute("autoplay", "false");
  }
}

// Call the disableAutoplay function when the page loads.
window.onload = disableAutoplay;
