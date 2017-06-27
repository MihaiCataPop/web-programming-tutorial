/**
 * Created by Mihai-Catalin_Pop on 20.06.2017.
 */


//this is my comment
console.info("salut");

//declarare functie
function getInfo(name){
    var msg = "Hello " + name + ", you are gonna learn programming.";
    return msg;
}

//apelarea functiei
var info = getInfo("Mihai");
console.info(info);

function adunaNumerele(a, b) {
    console.info("priimul numar este" + a);
    console.info("primul numar este" +b)
    var rezultat = a + b;
    rezultat = rezultat *0.9
    return rezultat;
}
var calculat = adunaNumerele(20, 86)
console.info(calculat);


function adunare(a, b){
    console.info("priimul numar este" + a);
    console.info("primul numar este" + b);
    console.info(a-a + b)
    var raspuns = a + b;
    return raspuns
}
var adunarea