function color(z) {
    var a = getComputedStyle(z);
    var b = a.backgroundImage;
    document.getElementsByTagName("body")[0].style.backgroundImage=b;
    
}