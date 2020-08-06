function doit(){
var Ucount = document.getElementById("ucount").value,
    Bcount = document.getElementById("bcount").value,
    Mcount = document.getElementById("mcount").value,
    Wcount = document.getElementById("wcount").value,
    
    
uCount1 = parseInt(Ucount),
    uCount2 =uCount1 * 5,
    bCount1 = parseInt(Bcount),
    bCount2 = bCount1 * 25,
    mCount1 = parseInt(Mcount),
    
    wCount1 = parseInt(Wcount),
    wCount2 = wCount1 * 5,
    totalNom = uCount2 + bCount2 + wCount2 ;
   

    

    document.getElementById("totNom").innerHTML = totalNom  ;
    document.getElementById("totm").innerHTML = totalNom + mCount1 ;
}
