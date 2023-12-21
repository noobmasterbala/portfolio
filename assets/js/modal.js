// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
  
    // Get the modal
    var modal = document.getElementById('emailModal');
  
    // Get the button that opens the modal
    var emailButton = document.getElementById('emailButton');
  
    // Get the element that closes the modal
    var closeButton = document.querySelector('.close'); // Use querySelector to be more specific
  
    // When the user clicks the button, open the modal 
    emailButton.onclick = function() {
      modal.style.display = "block";
    }
  
    // When the user clicks on (x), close the modal
    closeButton.onclick = function() {
      modal.style.display = "none";
    }
  
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  
    // When the user clicks on 'Proceed to Email', open the default email client
    var proceedButton = document.getElementById('proceedButton');
    proceedButton.onclick = function() {
      window.location.href = 'mailto:balajirajagur@gmail.com';
    }
  });
  