// Make sure we wait to attach our handlers until the DOM is fully loaded.
// $(function() {
//     $(".change-dev").on("click", function(event) {
//       var id = $(this).data("id");
//       var newDev = $(this).data("newdev");
  
//       var newDevState = {
//         devoured: newDev
//       };
  
//       // Send the PUT request.
//       $.ajax("/api/burgers/" + id, {
//         type: "PUT",
//         data: newDevState
//       }).then(
//         function() {
//           console.log("changed devoured to", newDev);
//           // Reload the page to get the updated list
//           location.reload();
//         }
//       );
//     });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurg = {
        burger_name: $("#bu").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/cats", {
        type: "POST",
        data: newBurg
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  