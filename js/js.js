window.onload = function () {
    document.getElementById("num").value = localStorage.getItem("numero");
    document.getElementById("radi").value = (localStorage.getItem("diametre") / 2);
    document.getElementById("num").onchange = updateNum;
    document.getElementById("radi").onchange = updateRadi;
    updateNum();
    updateRadi();
}

function updateNum() {
    document.getElementById("textNum").innerHTML = document.getElementById("num").value;
    localStorage.setItem("numero", document.getElementById("num").value);
}
function updateRadi() {
    document.getElementById("textRadi").innerHTML = document.getElementById("radi").value;
    localStorage.setItem("diametre", document.getElementById("radi").value * 2);

}