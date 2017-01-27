$(document).ready(function (event){
     $("#buttom-left-menu-up").bind("click", menuUp);
     $("#buttom-left-menu-down").bind("click", menuDown);
});

function menuUp() {
    var menuLeft = document.getElementById("leftMenu");
    var buttom = $("#buttom-menu-up");
        buttom = buttom.style;

            menuLeft.className = "left-menu left-menu-up";
            buttom.display = "none";
}
function menuDown() {
    var menuLeft = document.getElementById("leftMenu");
    var buttom = $("#buttom-menu-down");
        
        buttom = buttom.style;
        menuLeft.className = "left-menu left-menu-down";
}