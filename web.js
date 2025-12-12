function showRecipe(id) {
    document.getElementById("home").style.display ="none";
    document.querySelectorAll('.recipe').forEach(r => r.style.display ="none");
    document.getElementById(id).style.display ="block";
}
function gohome() {
    document.querySelectorAll('.recipe').forEach(r => r.style.display ="none");
    document.getElementById("home").style.display ="block";
}