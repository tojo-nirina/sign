document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('email');
    const closeButton = document.getElementById('closeButton');
  
    nameInput.addEventListener('input', function() {
      if (nameInput.value.trim() !== '') {
        closeButton.style.display = 'block';
      } else {
        closeButton.style.display = 'none';
      }
    });
  
    closeButton.addEventListener('click', function() {
      nameInput.value = '';
      closeButton.style.display = 'none';
    });
  });

e=true;
function changer() {
    if(e) {
        document.getElementById("password").setAttribute("type", "text");
        document.getElementById("eye").src="assets/pictures/afficher.png";
        e=false;
    }
    else {
        document.getElementById("password").setAttribute("type", "password");
        document.getElementById("eye").src="assets/pictures/masquer.png";
        e=true;
    }
}