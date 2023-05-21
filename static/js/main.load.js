window.onload = function(){
  var typed = new Typed('.typed', {
    strings: [
    '¡Bienvenid@s! a Pasantías e Involucración con las empresas y Horas sociales.'],
    typeSpeed: 80,
    backSpeed: 40,
    smartBackspace: false,
    loop: true
 });
    var modal = document.getElementById('modal'); 
    var btn = document.getElementById('close');
     if (document.getElementById('close')) {
        btn.onclick = function(){
            modal.style.display = 'none';
        }
    }
    console.info("¡No Pegues nada aquí!, puede que te esten engañando") 
}
// document.onkeydown = ()=>{return false;}
window.addEventListener('scroll', function() {
    var menu = document.getElementById('menu');

    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  
    if (scrolled > 0) {
      menu.style.backgroundColor = "#333";
    } else {
      menu.style.backgroundColor= "#333";
    }
});