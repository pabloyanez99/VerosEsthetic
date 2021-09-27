
document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){

  document.getElementById("move-content").classList.toggle('move-container-all');
  document.getElementById("move-content-2").classList.toggle('move-logo_main');
  document.getElementById("show-menu").classList.toggle('show-lateral');
  
}