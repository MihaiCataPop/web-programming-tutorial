function catFacAdunareaNumerelor(a, b) {
    console.info("primul numar este " + a);
    console.info("al doilea numar este " + b);
    var max = b;
    var min = a;
    if(a > b) {
        console.info(a + " este mai mare ca " + b);
        max = a;
        min = b;
    }
    console.info("numarul cel mai mare este " + max);
    console.info("vor numara " + min + " degetele");

    for(min-- ;min > 0; min --){
        //aici vrem sa numaram
        max++;
        console.info("avem " + max + " degetele, au ramas " + min + " degetele")
    }

    return a + b;
}

var rezultat = catFacAdunareaNumerelor(3, 5);

console.info(rezultat);

rezultat=catFacAdunareaNumerelor(7,9);
console.info(rezultat);

// wrong var names
