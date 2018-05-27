jQuery(document).ready(function() {
    'use strict';
    var win = $(window);
    var doc = $(document);
    var loading = $('#loading');
    var active = $( "#posts" ).is( ".active" );

    // Each time the user scrolls
    win.on('scroll', function() {

    /* If scroll is end of page loading new posts */
    if ( doc.height() - win.height() - 80 < win.scrollTop() && active ) {

    loading.show();



    }
  });
});
