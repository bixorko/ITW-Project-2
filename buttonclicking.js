function showDropDown() {
    document.getElementById("dropdowmenu").classList.toggle("show");
}

window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("dropdowmenu");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}

/**
NA ZAKLADE TOHO JS KODU FUNGUJU (AKO PODLA PREDLOHY) PREPINANIA MEDZI MOBILNYM A DESKTOP VZHLADOM...
HTML + CSS AUTOMATICKY ROZLISUJE ZARIADENIE NA KTOROM JE STRANKA SPUSTENA, ALE UZIVATEL MA MOZNOST
ZAPNUT DESKTOP VERZIU NA MOBILE A OPACNE -> MOBILNU VERZIU NA DESKTOPE
 */

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
