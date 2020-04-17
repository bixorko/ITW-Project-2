function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}

function changeSizeToMobile() {
    var el = document.getElementById("resizeme");
    if (el) {
        el.style.width = "480px";
    }

    return false;
}

function changeSizeToPC() {
    var el = document.getElementById("resizeme");
    if (el) {
        el.style.width = "auto";
    }

    return false;
}
