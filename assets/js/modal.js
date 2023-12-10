document.getElementById('emailButton').onclick = function() {
    document.getElementById('emailModal').style.display = "block";
  }
  
  document.getElementsByClassName('close')[0].onclick = function() {
    document.getElementById('emailModal').style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == document.getElementById('emailModal')) {
      document.getElementById('emailModal').style.display = "none";
    }
  }
  
  document.getElementById('proceedButton').onclick = function() {
    window.location.href = 'mailto:balajirajagur@gmail.com';
  }
  