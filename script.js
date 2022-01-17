document.getElementById("mySidenav").style.width = "80px";
document.getElementById("main").style.marginLeft = "80px";
var x = 1;

function closeNav() {
    if ((x % 2 == 0)) {
        document.getElementById("mySidenav").style.width = "80px";
        document.getElementById("main").style.marginLeft = "80px";
        x = x + 1;
    } else {
        document.getElementById("mySidenav").style.width = "300px"
        document.getElementById("main").style.marginLeft = "300px";
        x = x + 1;
    }
}
