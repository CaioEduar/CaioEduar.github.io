$(document).ready(function(){
    // Inicializar o Slick Slider
    $('.slider').slick();
  
    // Validar o formulário de contato
    $("#contact-form").submit(function(event) {
      var name = $("#name").val();
      var email = $("#email").val();
      var message = $("#message").val();
      
      if (!name || !email || !message) {
        alert("Por favor, preencha todos os campos.");
        event.preventDefault();
      }
    });
  
    // Controlar o Modal Popup
    var modal = document.getElementById("modal");
    var btn = document.getElementById("modal-btn");
    var span = document.getElementsByClassName("close")[0];
  
    btn.onclick = function() {
      modal.style.display = "block";
    }
  
    span.onclick = function() {
      modal.style.display = "none";
    }
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  });
  