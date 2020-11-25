$(document).ready(function(){
    $("#pocni").click(pocni)
})

function pocni(){
    $.ajax({
        url:"js/pitanja.json",
        method:"get",
        success:function(data){
            pitanja(data,0)
        },
        error:function(err){
            console.log(err)
        }
    })
}

var tacno=0;
function pitanja(data,brojpitanja){
    var ukupnoPitanja=data.length
    if(brojpitanja<=ukupnoPitanja){
        
    var ispis=''
    ispis+=`<img class='img-fluid' src='${data[brojpitanja].slika.src}' alt='${data[brojpitanja].slika.alt}'>`
    
    ispis+=`<div class='col-sm-12 col-md-7 mx-auto progres my-1 d-flex'>`
    var br=1;
    for(let i=0;i<data.length;i++){
        ispis+=`<div class='col-1 jedan `
        if(br-1==brojpitanja){
            ispis+=`trenutno `
        }
        if(br-1<brojpitanja){
            ispis+=`proslo`
        }
        ispis+=` mx-1'>
            <p>${br}</p>
        </div>`
        br++
    }
    ispis+=`</div>
        <h3 class='col-12 p-1'>${data[brojpitanja].tekst}</h3>
        <div class='d-flex justify-content-between flex-wrap col-sm-12 col-md-7 mx-auto'>
    `
    var odgovori=data[brojpitanja].odgovor
    for(let o of odgovori){
        ispis+=`
            <a class='col-6 link text-decoration-none text-secondary odgovori href='index.php' data-id='${o.id}'>${o.naziv}</a>
        `
    }
    ispis+=`</div>
    `
    $("#pitanje").html(ispis)

    $(".link").click(function(){
        var izbor=this.dataset.id
        if(odgovori[izbor].tacan){
            tacno++;
            console.log(tacno)
            console.log("Tacno")
            this.classList.add("bg-success")
            this.classList.add("text-light")
        }
        else{
            this.classList.add("bg-danger")
        }
        var sledece=brojpitanja+1
        if(brojpitanja+1==ukupnoPitanja){
            document.getElementById("pitanje").innerHTML+=`<form action="#" method="#">
            <input class="btn btn-primary mt-2" id="rezultat"  type="button" value="Rezultat">
            </form>`
        }
        else{
            document.getElementById("pitanje").innerHTML+=`<form action="#" method="#">
            <input class="btn btn-primary mt-2" id="sledece"  type="button" value="Sledece">
            </form>`
        }
        document.getElementsByClassName("link").disabled=true

        $("#sledece").click(function(){
            pitanja(data,sledece)
        })

        $("#rezultat").click(function(){
            var ispis2=''
            var procenat=tacno/ukupnoPitanja*100
            if(procenat<51){
                ispis2+=`<h2>Nažalost znanje ti je slabo, kec</h2>`
            }
            else if(procenat>50 && procenat< 61){
                ispis2+=`<h2>Moze bolje, dvojka</h2>`
            }
            else if(procenat>60 && procenat< 71){
                ispis2+=`<h2>Potrudi se vise, dvojka</h2>`
            }
            else if(procenat>70 && procenat< 81){
                ispis2+=`<h2>Moze bolje, trojka</h2>`
            }
            else if(procenat>80 && procenat< 91){
                ispis2+=`<h2>Nije lose, cetvorka</h2>`
            }
            else if(procenat>91){
                ispis2+=`<h2>Svaka cast, petica</h2>`
            }
            ispis2+=`<img class="img-fluid" src="img/kraj.png" src="Slika kraj"/>`
            ispis2+=`<form action="#" method="#">
            <input class="btn btn-primary mt-2" id="opet"  type="button" value="Počni opet">
            </form>`
            $("#pitanje").html(ispis2)
            
            $("#opet").click(function(){
                location.reload()
            })
        })

    })
    }
}


