document.addEventListener('DOMContentLoaded', function() {
  // Get all sidebar images
  var sidebarImages = document.querySelectorAll('.sidebar-image');

  // Loop through each sidebar image and add click event listener
  sidebarImages.forEach(function(image) {
    image.addEventListener('click', function() {
      // Get the src attribute of the clicked sidebar image
      var newSrc = this.src;

      // Update the src attribute of the main image
      document.getElementById('mainImage').src = newSrc;
    });
  });
});
