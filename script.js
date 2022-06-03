function swapStyleSheetRed(sheet){
    document.getElementById('style').setAttribute('href', sheet);
    var img = document.getElementById("red").style.display = "block";
    var img = document.getElementById("blue").style.display = "none";
}

function swapStyleSheetBlue(sheet){
    document.getElementById('style').setAttribute('href', sheet);
    var img = document.getElementById("red").style.display = "none";
    var img =  document.getElementById("blue").style.display = "block";
    
}