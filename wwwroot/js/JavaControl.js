//GEÇİŞ DEĞİŞKENLERİ 
var HAKKINDAGECIS = false;
var BLOKGECIS = false;
var OYUNGECIS = false;
var Background_Sabit = false;
var background = document.querySelector('body');
//URL ROUTER CONTROL
var currentUrl = window.location.href;
var DefaultPanel = "https://playscribe.sigorta.teklifi.al/Home/HomeMain";
var SecondaryPanel = "https://playscribe.sigorta.teklifi.al/Home/HomeSecondary";
if (currentUrl == SecondaryPanel || currentUrl == DefaultPanel) {
    // BÖLÜMLER DEĞİŞKENİ

    var ABOUTSECTION = document.getElementById('ABOUTSECTION');
    var BLOCKSECTION = document.getElementById('BLOCKSECTION');
    var GAMESECTION = document.getElementById('GAMESECTION');
    // arka plan efekt ayarlama 
    var baslangıc_ekranı_Kapansın;
    var INCEPTION = document.getElementById('INCEPTION');
    var SECONDARY = document.getElementById('SECONDARY');

    //(ANA SAYFA) ROUTİNG İŞLEMLERİ
    // BAŞ BUTON GEÇİŞ EFEKTİ
    var NEON_BAS = document.getElementById('BASBUTON');
    NEON_BAS.addEventListener('click', () => {
        dongu_durdur = true;
        LoadingGecisElement()
    })
    // HAKKINDA BÖLÜMÜNE GEÇİŞ 
    var HAKKINDA_GECIS_BUTON = document.getElementById('HAKKINDABUTON');
    HAKKINDA_GECIS_BUTON.addEventListener('click', e => {
        e.preventDefault();
        ABOUT();
    })
    function ABOUT() {
        dongu_durdur = true;
        HAKKINDAGECIS = true;
        SayfaYukleme('~/PLAYSCRIBE_Frontend/HakkındaHtml.html', ABOUTSECTION);

        LoadingGecisElement()
    }

    // BLOK BÖLÜMÜ
    var BLOK_GECIS_BUTON = document.getElementById('BLOKBUTON');

    BLOK_GECIS_BUTON.addEventListener('click', e => {
        e.preventDefault();
        BLOCK()

    })
    function BLOCK() {
        dongu_durdur = true;
        BLOKGECIS = true;
        SayfaYukleme('~/PLAYSCRIBE_Frontend/Blokhtml.html', BLOCKSECTION);
        LoadingGecisElement();
    }

    // OYUN BÖLÜMÜ
    var OYUN_GECIS_BUTON = document.getElementById('OYUNBUTON');
    OYUN_GECIS_BUTON.addEventListener('click', e => {
        e.preventDefault();
        GAME();
    })
    function GAME() {
        dongu_durdur = true;
        OYUNGECIS = true;
        SayfaYukleme('~/PLAYSCRIBE_Frontend/AIRBORNERIVALSHtml.html', GAMESECTION);
        
        LoadingGecisElement();

    }
    var dongu_durdur = false;

}
else {
    if (currentUrl.includes("/About/AboutMain") || currentUrl.includes("/Game/GameMain") || currentUrl.includes("/Blog/BlogMain") || currentUrl.includes("/Home/Login")) {
        countEscapeButtons();
    }
    else if (currentUrl.includes("/Identity/Account"))
    {
        var dongu_durdur = false;
    }
    else {
        window.location.href = DefaultPanel;
    }
  
}
if (!currentUrl.includes("/Game/GameMain") && !currentUrl.includes("/Blog/BlogMain"))
{
    // BAŞLANGIÇ EKRANI PARTİKÜL EFEKTİ
    var partıkuller = document.getElementById('AnimateControl');
    var partikul_children = partıkuller.children;
    for (let index = 0; index < partıkuller.childElementCount; index++) {

        var random_cıkma = Math.random() * 30;
        var partikul = partikul_children[index];
        partikul.style.animationDelay = random_cıkma + 's';
    }


    var partikul_yenileme = () => {

        for (let index = 0; index < partikul_children.length; index++) {
            var random_cıkma = Math.random() * 30;
            var partikul = partikul_children[index];

            partikul.style.animationDelay = random_cıkma + 's';
        }

    }
}
//NEON DIV AYARLAMA 
var Neon_divler = document.getElementsByClassName("NEONDIV");
NeonDivAyar();
function NeonDivAyar() {
    for (let index = 0; index < Neon_divler.length; index++) {
        var h1Elements = Neon_divler[index].querySelector('h1');
        var font_degeri = 0;
        font_degeri = parseInt(getComputedStyle(h1Elements).fontSize);
        Neon_divler[index].style.webkitBoxReflect = " below -20px linear-gradient(transparent, #0008)";
        h1Elements.style.lineHeight = font_degeri + "px";
        //if (font_degeri > 70) {

        //    Neon_divler[index].style.webkitBoxReflect = " below -90px linear-gradient(transparent, #0008)";
        //}
        //else if (font_degeri <= 70 && font_degeri > 30) {

        //    Neon_divler[index].style.webkitBoxReflect = " below -40px linear-gradient(transparent, #0008)";
        //}

        //else {

        //    Neon_divler[index].style.webkitBoxReflect = " below 0px linear-gradient(transparent, #0008)";
        //}

    }
}

//BACKGROUND DEVİNİM İŞLEMLERİ
function LOADROUTE() {
    if (!currentUrl.includes("/About/AboutMain") || !currentUrl.includes("/Game/GameMain") || !currentUrl.includes("/Blog/BlogMain")) {

        if (dongu_durdur == false && Background_Sabit == false) {
            if (background.classList.contains('element') || background.classList.contains('geciselement')) {
                background.classList.add('digerelement');
                background.classList.remove('element');
            }
            else {
                background.classList.add('element');
                background.classList.remove('digerelement');
            }
        }
    }
}
LOADROUTE(); 

setInterval(LOADROUTE, 1500);


setInterval(e => {
    if (dongu_durdur) {

        if (background.classList.contains('geciselement')) {
            background.classList.add('digerelement');
            background.classList.remove('geciselement');
            baslangıc_ekranı_Kapansın = true;
            if (baslangıc_ekranı_Kapansın && HAKKINDAGECIS == false && OYUNGECIS == false && BLOKGECIS == false) {
                INCEPTION.classList.add('DisplayNone');
                SECONDARY.classList.remove('DisplayNone');
                Background_Sabit = false;
                window.location.href = SecondaryPanel;
            }
            else if (baslangıc_ekranı_Kapansın && HAKKINDAGECIS) {

                window.location.href = '/About/AboutMain';
                //Background_Sabit = true;
                //baslangıc_ekranı_Kapansın = false;
                //background.style.width = ABOUTSECTION.style.width;
                //INCEPTION.classList.add('DisplayNone');
                //SECONDARY.classList.add('DisplayNone');
                //ABOUTSECTION.classList.remove('DisplayNone');
                //if (!BLOCKSECTION.classList.contains('DisplayNone') || !GAMESECTION.classList.contains('DisplayNone')) {
                //    BLOCKSECTION.classList.add('DisplayNone');
                //    GAMESECTION.classList.add('DisplayNone');
                //}
                //background.classList.add('HAKKINDABACK');
                //background.classList.remove('OYUNBACK');
                //background.classList.remove('BLOKBACK');
                //background.classList.remove('geciselement');
                //background.classList.remove('digerelement');

               
            }
            else if (baslangıc_ekranı_Kapansın && BLOKGECIS) {
                window.location.href = '/Blog/BlogMain';
                //Background_Sabit = true;
                //baslangıc_ekranı_Kapansın = false;
                //INCEPTION.classList.add('DisplayNone');
                //SECONDARY.classList.add('DisplayNone');
                //BLOCKSECTION.classList.remove('DisplayNone');
                //if (!GAMESECTION.classList.contains('DisplayNone') || !ABOUTSECTION.classList.contains('DisplayNone')) {
                //    ABOUTSECTION.classList.add('DisplayNone');
                //    GAMESECTION.classList.add('DisplayNone');
                //}
                //background.classList.add('BLOKBACK');
                //background.classList.remove('OYUNBACK');
                //background.classList.remove('HAKKINDABACK');
                //background.classList.remove('geciselement');
                //background.classList.remove('digerelement');
                //partıkuller.innerHTML = ``;
                //partıkuller.style.height = "0px";
               
            }
            else if (baslangıc_ekranı_Kapansın && OYUNGECIS) {
                window.location.href = '/Game/GameMain';
                //Background_Sabit = true;
                //baslangıc_ekranı_Kapansın = false;
                //INCEPTION.classList.add('DisplayNone');
                //SECONDARY.classList.add('DisplayNone');
                //GAMESECTION.classList.remove('DisplayNone');
                //if (!BLOCKSECTION.classList.contains('DisplayNone') || !ABOUTSECTION.classList.contains('DisplayNone')) {
                //    BLOCKSECTION.classList.add('DisplayNone');
                //    ABOUTSECTION.classList.add('DisplayNone');
                //}
                //background.classList.add('OYUNBACK');
                //background.classList.remove('BLOKBACK');
                //background.classList.remove('HAKKINDABACK');
                //background.classList.remove('geciselement');
                //background.classList.remove('element');
                //background.classList.remove('digerelement');
                //partıkuller.innerHTML = ``;
                //partıkuller.style.height = "0px";
               
            }

            dongu_durdur = false;
        }
    }
}, 3000)
function LoadingGecisElement() {
    if (background.classList.contains('element') || background.classList.contains('digerelement')) {
        background.classList.add('geciselement');
        background.classList.remove('digerelement');
        background.classList.remove('element');
    }
}

//GERİ GELME BUTONU
var EscapeButon;
function countEscapeButtons() {
    setTimeout(() => {
        EscapeButon = document.querySelector('.ESCAPE_BTN');
        EscapeButon.addEventListener('click', () => {
            //Background_Sabit = false;
            //dongu_durdur = false;
            //background.classList.add('element');
            //SECONDARY.classList.remove('DisplayNone');
            //background.classList.remove('BLOKBACK');
            //background.classList.remove('OYUNBACK');
            //background.classList.remove('HAKKINDABACK');
            //ABOUTSECTION.classList.add('DisplayNone');
            //BLOCKSECTION.classList.add('DisplayNone');
            //GAMESECTION.classList.add('DisplayNone');
            //if (HAKKINDAGECIS) {

            //    HAKKINDAGECIS = false;
            //}
            //scripts.forEach(e => {
            //    if (OYUNGECIS && e.src.includes("ARControls.js")) {
            //        e.remove();
            //        OYUNGECIS = false;
            //    }
            //    if (BLOKGECIS && e.src.includes("BlokJs.js")) {
            //        e.remove();
            //        BLOKGECIS = false;
            //    }
            //})
            if (currentUrl != DefaultPanel && currentUrl != SecondaryPanel) {
                window.location.href = SecondaryPanel;
            }
        })
    }, 1000)

}

//SAYFA YÜKLEME 
var scripts = [];
function SayfaYukleme(message, element) {
    setTimeout(() => {
        fetch(message)
            .then(response => response.text())
            .then(htmlContent => {
                //if(ABOUTSECTION.innerHTML != "" && ABOUTSECTION != element)
                //{
                //    ABOUTSECTION.innerHTML = "";
                //}
                //if(GAMESECTION.innerHTML != ""  && GAMESECTION != element)
                //{
                //    GAMESECTION.innerHTML = "";
                //}
                //if(BLOCKSECTION.innerHTML != ""  && BLOCKSECTION != element)
                //{
                //    BLOCKSECTION.innerHTML = "";
                //}
                //element.innerHTML = htmlContent;
                handleViewportChange(mediaQuery);
            });

        setTimeout(() => {

            if (OYUNGECIS) {

                var CS_JS = document.createElement("script");
                CS_JS.src = "~/PLAYSCRIBE_Frontend/js/ARControls.js";
                document.body.append(CS_JS);
                scripts.push(CS_JS);
            }
            else if (BLOKGECIS) {
                var Blok_JS = document.createElement("script");
                Blok_JS.src = "~/PLAYSCRIBE_Frontend/js/BlokJs.js";
                document.body.append(Blok_JS);
                scripts.push(Blok_JS);
            }
            else if (HAKKINDAGECIS) {
                var Hakkında_Js = document.createElement("script");
                Hakkında_Js.src = "HAKKINDAJS.js";
                document.body.append(Hakkında_Js);
                scripts.push(Hakkında_Js);
            }
            Neon_divler = document.getElementsByClassName("NEONDIV");
            NeonDivAyar()
        }, 1000);
    }, 500);
}
// RESPONSIVE GORUNTU JAVA SCRIPT AYARLAMALARI
var mediaQuery = window.matchMedia("(max-width: 900px)");
function handleViewportChange(e) {
    if (e.matches) {
        NeonDivAyar();
    }
    else {
        NeonDivAyar();
    }
}
mediaQuery.addListener(handleViewportChange);
handleViewportChange(mediaQuery); 