$(document).ready(main);

var contador = 1;

function main(){
  $('.menu').click(function(){
    if(contador ==1){
      $('nav').animate({
        left: '0'
      });
      contador = 1;
      $('nav').animate({
        left: '-100%'

      });
    }
  });
  $('.submenu').click(function(){
    $(this).children('.children').slideToggle();

  });
}