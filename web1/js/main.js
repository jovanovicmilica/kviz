window.onload=function(){
    
    ispismreze();
    ispisMeni();
    ispisfooter();


}
$("#scroll a").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});

$(window).scroll(function(){
    if(window.pageYOffset>80){
        $("#scroll").removeClass("hide")
        $("#scroll").addClass("show")
    }
    else{
        $("#scroll").removeClass("show")
        $("#scroll").addClass("hide")
    }
})


function ispismreze(){
    var nizmreze=['fa-facebook-f','fa-instagram','fa-youtube','fa-twitter']
    var nizLinkMreze=['https://www.facebook.com','https://www.instagram.com','https://www.youtube.com','https://www.twitter.com/']
    var ispis=''
    ispis+=`<div>`
    for(let i=0;i<nizLinkMreze.length;i++){
        ispis+=`<a target="_blank" href="${nizLinkMreze[i]}"><i class="fab ${nizmreze[i]}"></i></a>`
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
var ispis4=''
ispis4+=`<ul>`
for(let i=0;i<nizNaziv.length;i++){
    ispis4+=`<li><a href="${nizLink[i]}">${nizNaziv[i]}</a></li>`
}
ispis4+=`</ul>`
$("#meni").html(ispis4)
$("#meni").hide()
$("#hamburger").click(function(){
    $("#meni").toggle()
})


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
        ispisKategorije+=`<div class="blok kat">
        <h2>${kategorije[i]}</h2>
        <img alt="${kategorije[i]}" src="img/${slikeKategorije[i]}">
        </div>`
    }

    document.getElementById("kateogorije").innerHTML+=ispisKategorije;

    $(".kat img").mouseover(function(){
        this.animate( {
            boxShadow: "0px 0px 20px #868686"
        },1000)
    })

    var slikeBrendovi=['dreamzone.jpg','emmezeta.jpg','hoie.jpg','kronborg.jpg','formaideale.jpg','jutlandia.jpg']

    var ispis2=''
    for(let i=0;i<slikeBrendovi.length;i++){
        ispis2+=`<div class='item'><img alt="Brend logo" src='img/${slikeBrendovi[i]}'/></div>`
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
    var tekst2=['Više od 20 prodavnica širom Srbije','Kompanija osnovana 1980. godine','10 godina garancije','Niska cena, visok kvalitet']

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

    ispis+=`<div><h3>Korisni linkovi</h3><ul>
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


        var regIme=/^[A-ZČĆŠĐŽ][a-zčćšđž]{2,19}$/
        var regPrezime=/^[A-ZČĆŠĐŽ][a-zčćšđž]{2,29}(\s[A-ZČĆŠĐŽ][a-zčćšđž]{2,29})*$/
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
            $("#greskaMail").html("E-mail mora biti u formatu nikola@gmail.com ili nikola.brzovan.88.18@ict.edu.rs")
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

if(url.indexOf("kupatilo.html")!=-1){
    var proizvodiSlike=['dozer.jpg','dozer2.jpg','drzaccetkica.jpg','drzacsapun.jpg','drzacsapun2.jpg','kanta.jpg','kanta2.jpg','ulje.jpg','ulje2.jpg']

    var proizvodiNaziv=['Dozer za sapun','Dozer za sapun','Držač četkica','Držač za sapun','Držač za sapun','Kanta za smeće','Kanta za smeće','Mirisno ulje lavanda','Mirisno ulje limun']

    var proizvodCena=[300,350,200,300,290,500,540,150,150]
    var ispis=''
    for(let i=0;i<proizvodiNaziv.length;i++){
        ispis+=`<div class='prozvod senka'>
        <img alt='${proizvodiNaziv[i]}' src='img/${proizvodiSlike[i]}'/>
        <p class='pocetak'>${proizvodiNaziv[i]}</p>
        <p>${proizvodCena[i]} din</p>
        </div>`
    }

    $("#proizvodi").html(ispis)
}
if(url.indexOf("sobe.html")!=-1){
    var proizvodiNaziv=['Ugaona garnitura','Kauč','Dvosed','Fotelja','Dvosed','Stočić drveni','Stočić drveni','Stočić drveni','Stočić']

    var proizvodiSlike=['ugaona.jpg','krevet2.jpg','krevet3.jpg','fotelja.jpg','krevet.jpg','stocic.jpg','stocic4.jpg','stocic2.jpg','stocic3.jpg']

    var proizvodCena=[25000,27000,26000,17000,21000,7000,5000,6500,5200]
    var ispis=''
    for(let i=0;i<proizvodiNaziv.length;i++){
        ispis+=`<div class='prozvod senka'>
        <img alt='${proizvodiNaziv[i]}' src='img/${proizvodiSlike[i]}'/>
        <p class='pocetak'>${proizvodiNaziv[i]}</p>
        <p>${proizvodCena[i]} din</p>
        </div>`
    }

    $("#proizvodi").html(ispis)
}

if(url.indexOf("kuhinja.html")!=-1){
    var proizvodiNaziv=['Trpezarijska garnitura','Trpezarijska garnitura','Trpezarijska garnitura','Kuhinjski elementi','Kuhinjskae krpe','Kuhinjske krpe','Kuhinjski elementi','Kuhinjske krpe','Vitrina']

    var proizvodiSlike=['kuhinja1.jpg','kuhinja2.jpg','kuhinja3.jpg','kuhinja4.jpg','krpa.jpg','krpa2.jpg','kuhinja5.jpg','krpa3.jpg','vitrina.jpg']

    var proizvodCena=[17000,15000,13500,35000,200,250,35000,450,1000]
    var ispis=''
    for(let i=0;i<proizvodiNaziv.length;i++){
        ispis+=`<div class='prozvod senka'>
        <img alt='${proizvodiNaziv[i]}' src='img/${proizvodiSlike[i]}'/>
        <p class='pocetak'>${proizvodiNaziv[i]}</p>
        <p>${proizvodCena[i]} din</p>
        </div>`
    }

    $("#proizvodi").html(ispis)
}