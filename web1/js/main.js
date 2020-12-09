window.onload=function(){
    
    ispismreze();
    ispisMeni();
    ispisfooter();


}
function ispismreze(){
    var nizmreze=['fa-facebook-f','fa-instagram','fa-youtube','fa-twitter']
    var nizLinkMreze=['https://www.facebook.com','https://www.instagram.com','https://www.youtube.com','https://www.twitter.com/']
    var ispis=''
    ispis+=`<div>`
    for(let i=0;i<nizLinkMreze.length;i++){
        ispis+=`<a href="${nizLinkMreze[i]}"><i class="fab ${nizmreze[i]}"></i></a>`
    }
    ispis+=`</div>`

    document.getElementById("goreDrzac").innerHTML+=ispis;
}

var nizNaziv=['Početna','Sobe','Kupatilo','Kuhinja', 'Kontakt']
var nizLink=['index.html','sobe.html','kupatilo.html','kuhinja.html','kontakt.html']

function ispisMeni(){
    var ispis=''
    ispis+=`<ul>`
    for(let i=0;i<nizNaziv.length;i++){
        ispis+=`<li><a href="${nizLink[i]}">${nizNaziv[i]}</a></li>`
    }
    ispis+=`</ul>`

    document.getElementById("nav").innerHTML+=ispis
}

let url=location.href;

if(url.indexOf("index.html")!=-1){
    var divSlajder=document.getElementById("slikaSlajder")
    var slike=['img/slajder1.jpg','img/slajder2.jpg','img/slajder3.jpg','img/slajder4.jpg']
    var i=0;
    function slajder(){
        divSlajder.src=slike[i];
        if(i<slike.length-1) i++;
        else i=0;
        setTimeout(slajder, 3000);
    };
    slajder();


    var poruke=['fa-map-marker-alt','fa-store','fa-shopping-cart','fa-lightbulb']
    var naslovi=['Svuda sa Vama','Ponuda','Online kupovina','Inspiracija']
    var tekst=['Radnje širom Srbije','Celokupnu ponudu možete pogledati na sajtu','Uskoro dostupna online kupovina','Napravite dom iz snova']

    var ispis=''
    for(let i=0;i<poruke.length;i++){
        ispis+=`<div><i class="fas ${poruke[i]}"></i>
        <p class="pocetak">${naslovi[i]}</p>
        <p>${tekst[i]}</p>
        </div>`
    }

    document.getElementById("poruke").innerHTML+=ispis

    var kategorije=['Spavaća soba','Kupatilo','Dnevna soba','Kuhinja','Trpezarija','Odlaganje']
    var slikeKategorije=['spavaca.jpg','kupatilo.jpg','dnevna.jpg','kuhinja.jpg','trpezarija.jpg','odlaganje.jpg']

    var ispisKategorije=''
    for(let i=0;i<kategorije.length;i++){
        ispisKategorije+=`<div class="blok">
        <h2>${kategorije[i]}</h2>
        <img src="img/${slikeKategorije[i]}">
        </div>`
    }

    document.getElementById("kateogorije").innerHTML+=ispisKategorije;

    var slikeBrendovi=['dreamzone.jpg','emmezeta.jpg','hoie.jpg','kronborg.jpg','formaideale.jpg','jutlandia.jpg']

    var ispis2=''
    for(let i=0;i<slikeBrendovi.length;i++){
        ispis2+=`<div class='item'><img src='img/${slikeBrendovi[i]}'/></div>`
    }

    document.getElementById("brendovi").innerHTML+=ispis2

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            60:{
                items:3
            },
            100:{
                items:5
            }
        }
    })


    var nizBrojke=['fa-check','fa-globe-europe','fa-certificate','fa-percent']
    var naslovi2=['40 godina odličnih ponuda','Evropski koreni','Garancija','Uvek niska cena']
    var tekst2=['Više od 100 prodavnica širom Srbije','Svetska kompanija osnovana 1980. godine','10 godina garancije na sve proizvode','Pažljivo odabrani artikli sa niskom cenom']

    var ispis3=''
    for(let i=0;i<nizBrojke.length;i++){
        ispis3+=`<div><i class="fas ${nizBrojke[i]}"></i>
        <p class="pocetak">${naslovi2[i]}</p>
        <p>${tekst2[i]}</p>
        </div>`
    }

    document.getElementById("poruke2").innerHTML+=ispis3
}

function ispisfooter(){
    var ispis=''
    ispis+=`<div><h3>Meni</h3><ul>`
    for(let i=0;i<nizNaziv.length;i++){
        ispis+=`<li><a href="${nizLink[i]}">${nizNaziv[i]}</a></li>`
    }
    ispis+=`</ul></div>`

    ispis+=`<div class="kontakt"><h3>Kontakt</h3><ul>
    <li>Sedište: Zdravka Čelara br. 12</li>
    <li>Call centar: 065-563-56-56</li>
    <li>E-mail: fotelja@gmail.com</li></ul></div>
    `

    ispis+=`<div><h3>Korisni linkovi i mreže</h3><ul>
    <li><a href="sitemap.xml">Sitemap</a></li>
    <li><a href="autor.html">Autor</a></li>
    <li><a href="doc.pdf">Dokumentacija</a></li>
    </ul></div>`

    document.getElementById("footer").innerHTML+=ispis
}
if(url.indexOf("kontakt.html")!=-1){
    $("#posalji").click(function(){
        var ime=$("#ime").val()
        var prezime=$("#prezime").val()
        var email=$("#email").val()
        var telefon=$("#telefon").val()
        var poruka=$("#poruka").val()


        var regIme=/^[A-ZČĆŠĐŽ][a-zčćšđž]{2,18}$/
        var regPrezime=/^[A-ZČĆŠĐŽ][a-zčćšđž]{2,28}(\s[A-ZČĆŠĐŽ][a-zčćšđž]{2,28})*$/
        var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        var regTelefon=/^06[012345679]\d{6,7}$/;

        var greske=0;

        if(!regIme.test(ime)){
            $("#greskaIme").html("Ime mora početi velikim slovom i ima najmanje 3, a najviše 20 slova")
            greske++
        }
        else{
            $("#greskaIme").html("")
        }
        if(!regPrezime.test(prezime)){
            $("#greskaPrezime").html("Prezime mora početi velikim slovom i ima najmanje 3, a najviše 30 slova")
            greske++
        }
        else{
            $("#greskaPrezime").html("")
        }
        if(!regEmail.test(email)){
            $("#greskaMail").html("E-mail bla bla")
            greske++
        }
        else{
            $("#greskaMail").html("")
        }
        if(!regTelefon.test(telefon)){
            $("#greskaTelefon").html("Broj mora biti u formatu 06XXXXXXX(X)")
            greske++
        }
        else{
            $("#greskaTelefon").html("")
        }
        if(poruka.split(" ").length<10){
            $("#greskaPoruka").html("Poruka mora imati bar 10 reči")
            greske++
        }
        else{
            $("#greskaPoruka").html("")
        }

        if(greske==0){
            $("#poslata").html("Poruka je poslata")
            $("input[type=text]").val("")
            $("textarea").val("")
        }
        else{
            $("#poslata").html("Nisu sva polja ispravno popunjena")
        }
    })

    var lokacije=['Beograd','Novi Sad','Nis','Jagodina','Leskovac','Čačak']

    var adrese=['Zdravka Čelara br. 12', 'Bulevar oslobođenja br. 78','Nikole Tesle br. 5','27.marta br. 65','Vojislava Ilića br. 40','Vojvode Stepe br. 50']

    var ispis=''
    for(let i=0;i<lokacije.length;i++){
        ispis+=`<div><h3><i class="fas fa-map-marker-alt"></i> ${lokacije[i]}</h3>
        <p>${adrese[i]}</p></div>
        `
    }

    document.getElementById("divLokacije").innerHTML+=ispis
}