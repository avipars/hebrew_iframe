function reload() {
    var first = document.getElementById("input").value;
    var argument = first;
    console.log(first);
    if (first.length > 0) {
        document.getElementById('frame1').src =
            'https://context.reverso.net/translation/hebrew-english/' + argument;
        document.getElementById('frame2').src = 'https://www.morfix.co.il/' + argument;
        return true;
    } else {
        alert("Text field is blank");
        return false;
    }
}

function fnsearch() {
    if (event.keyCode == 13) {
        event.preventDefault();
        reload();
        return true;
    }
    else {
        return false;
    }
}

function hideAdReverso() {
    var iframe = document.getElementById("frame1");
    var elmnt = iframe.contentWindow.document.getElementById("home-badges-background");
    elmnt.style.display = "none";
}

