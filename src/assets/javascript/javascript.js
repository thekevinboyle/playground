
;(function ($, root, undefined) {

  $(function () {

    'use strict';

    // DOM ready

    $(window).load(function(){
      // Stuff that needs to happen after things are rendered

      var playerTurn = 'X';

      function checkForWin() {
        if ( horizontalWin() || verticalWin() ) {
          $('#announce-winner').append('Player ' +  playerTurn + ' Won!');
          return true;

        }
        return false;

      }
      function horizontalWin () {
        return $('[data-cell="0"]') ===  playerTurn && $('[data-cell="1"]') === playerTurn && $('[data-cell="2"]') ===  playerTurn;
      }


      function verticalWin () {
        return $('[data-cell="0"]') ===  playerTurn && $('[data-cell="3"]') === playerTurn && $('[data-cell="6"]') ===  playerTurn;
      }

      $('[data-cell="0"]').on('click', function() {
        $(this).text('X');
      });

      $('[data-cell="1"]').on('click', function() {
        $(this).text('X');
      });

      $('[data-cell="2"]').on('click', function() {
        $(this).text('X');
      });
checkForWin();
    });

  });

})

(jQuery, this);

//   var $search = $('#filter-search');      // Get the input element
//   var cache = [];                         // Create an array called cache
//
//   $imgs.each(function() {                 // For each image
//     cache.push({                          // Add an object to the cache array
//       element: this,                      // This image
//       text: this.alt.trim().toLowerCase() // Its alt text (lowercase trimmed)
//     });
//   });
//
//   function filter() {                     // Declare filter() function
//     var query = this.value.trim().toLowerCase();  // Get the query
//     cache.forEach(function(img) {         // For each entry in cache pass image
//       var index = 0;                      // Set index to 0
//
//       if (query) {                        // If there is some query text
//         index = img.text.indexOf(query);  // Find if query text is in there
//       }
//
//       img.element.style.display = index === -1 ? 'none' : '';  // Show / hide
//     });
//   }
//   //
//   // if ('oninput' in $search[0]) {          // If browser supports input event
//   //   $search.on('input', filter);          // Use input event to call filter()
//   // } else {                                // Otherwise
//   //   $search.on('keyup', filter);          // Use keyup event to call filter()
//   // }
// filter();
// }());
//
//
//
//
// });
// });
