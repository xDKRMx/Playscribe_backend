//ANA OYUN SECTION 
var GAMESECTION;

//ROUTİNG İŞLEMLERİ VE ONUN VARYANTLARI
background.classList.add('OYUNBACK');
// TUŞ ATAMALARI
var keyelements = ['w', 'a', 'd', 's'];
var ESCAPETUSU = 27;
var reload = 82;
var Yontusları = [37, 38, 39, 40, 32];
// DRON DIV ATAMALARI
var DRON;
var LAZERSECTION;
var DRONIMG;
var DRONSECTION;
var KALANMERMI;
// TRANSFORM VE RELOAD DEĞİŞKENLERİ
var derece = 0;
var MERMI_KAPASITESI = 30;
var MERMI_MUHIMMAT = 30;
var ATES_EDILSIN_MI = true;
var transformXdron = 0;
var transformYdron = 0;
var pressedKeys;
var animation_smoothness = null;
//SKOR DEĞİŞKENLERİ
var DONGUSURESI = 3000;
var OYUNSKOR = 0;
var Enemy1Kill = 0;
var Enemy2Kill = 0;
var Enemy3Kill = 0;
var Enemy4Kill = 0;
var SKORBOLUMU;
var ENEMY1KILLCOUNTER;
var ENEMY2KILLCOUNTER;
var ENEMY3KILLCOUNTER;
var ENEMY4KILLCOUNTER;
var IlkSkorTablosu;
var SonSkorTablosu;
var SONSKOR;
var SonPuan;

//OYUN SES İŞLEMLERİ
var LAZERSES = new Audio("/PLAYSCRIBE_Frontend/Images/lazer.wav");
var BOOMSES = new Audio("/PLAYSCRIBE_Frontend/Images/boom.mp3");
//OYUN ANLIK LOBİ DEĞİŞKENLERİ
var ANLIKGAMELOBI;
var GAMERESUME;
var ESCAPEMENU;
var lobibaslık;

var OYUNPENCERESI;
var OYUNANAMENU;
var Kozmetik_penceresi;
var LOBIPANEL;
// OYUN MENU AYARLARI
var OYUNMANTIK;
var OYUNMANTIKPANEL;

//OYUN MENU KOZMETİK BÖLÜMÜ
var COSMETIC;
var COSMETICOFF;
var DRONCELLS;
var LAZERLIGHTS;
var CosmeticTable;
var lazer_index = 2;
var lazer_color_secildi_mi = false;
//OYUN MENU MANTIK PANELİ 
var OYUNMANTIKKAPAMA;
// OYUNUN AÇILMASI
var OYUNAGECIS;
var OYUNDA;
// DRON SINIRA DEGERSE
var RESTRICTION;
var BLOKLAR;

//OYUN MOBİL İŞLEMLERİ 
var YONETIMBUTONLARIMOBIL;
var ANLIKOYUNMENUPANEL_MOBIL;
//MOBİL MOVEMENT TUŞLARI
var MOBIL_MOVEMET_TUSLARI = [];
var MOBIL_MOVEMENT_ILERI;
var MOBIL_MOVEMENT_SOL;
var MOBIL_MOVEMENT_SAG;
var MOBIL_MOVEMENT_GERI;
//MOBİL ROTATE TUŞLARI
var MOBIL_ROTATE_TUSLARI = [];
var MOBIL_ROTATE_ILERI;
var MOBIL_ROTATE_SOL;
var MOBIL_ROTATE_SAG;
var MOBIL_ROTATE_GERI;
// MOBİL ATEŞ ETME TUŞLARI
var MOBIL_FIRE_BTN;
//MOBİL RELOAD TUŞU
var MOBIL_RELOAD_BTN;

//DOKÜMANTASYONLARI YÜKLE 
LoadGameDocuments();
function LoadGameDocuments() {

    GAMESECTION = document.getElementById("GAMESECTION");
    // ÖN AYAR
    pressedKeys = {};
    // OYUN START
    OYUNAGECIS = document.getElementById("STARTGAME");

    // DRON DIV ATAMALARI
    DRON = document.getElementById("DRON");
    LAZERSECTION = DRON.querySelector(".LAZERSECTION");
    DRONIMG = DRON.querySelector(".DRONIMG");
    DRONSECTION = DRON.querySelector(".DRONSECTION");
    KALANMERMI = DRON.querySelector(".KALANMERMI");
    //SKOR DEĞİŞKENLERİ
    SKORBOLUMU = document.querySelector(".PUAN");
    ENEMY1KILLCOUNTER = document.querySelectorAll(".KILL1");
    ENEMY2KILLCOUNTER = document.querySelectorAll(".KILL2");
    ENEMY3KILLCOUNTER = document.querySelectorAll(".KILL3");
    ENEMY4KILLCOUNTER = document.querySelectorAll(".KILL4");
    IlkSkorTablosu = document.querySelector(".SKORTABLOSU");
    SonSkorTablosu = document.querySelector(".SONSKORTABLOSU");
    SONSKOR = document.querySelector(".SONSKOR");
    SonPuan = SonSkorTablosu.querySelector(".SONPUAN");
    //OYUN ANLIK LOBİ DEĞİŞKENLERİ
    ANLIKGAMELOBI = document.querySelector(".ANLIKOYUNMENU");
    GAMERESUME = document.getElementById('RESUMEGAME');
    ESCAPEMENU = document.getElementById('ESCAPEMENU');
    lobibaslık = ANLIKGAMELOBI.querySelector(".LOBIBASLIK");

    OYUNPENCERESI = document.querySelector(".GAME");
    OYUNANAMENU = document.querySelector(".GAMEMAINMENU");
    Kozmetik_penceresi = document.querySelector(".COSMETICPANEL");
    LOBIPANEL = document.querySelector(".OYUNLOBI");
    // OYUNUN AÇILMASI
    OYUNAGECIS = document.getElementById("STARTGAME");
    //OYUN MENU İŞLEMLERİ
    OYUNMANTIK = document.querySelectorAll('.LOGICBUTTON');
    OYUNMANTIKPANEL = document.querySelector(".GAMELOGIC");
    //OYUN MENU KOZMETİK PANELİ 
    COSMETIC = document.getElementById("COSMETIC");
    COSMETICOFF = document.getElementById('COSMETICOFF');
    DRONCELLS = document.querySelectorAll(".CELLS");
    LAZERLIGHTS = document.querySelectorAll(".LAZERCELLS");
    CosmeticTable = document.querySelectorAll(".COSMETICTABLE");
    //OYUN MANTIK PANELİ
    OYUNMANTIKKAPAMA = document.getElementById('GAMELOGICOFF');
    //DRON SINIRA DEGERSE

    RESTRICTION = document.querySelector(".Restriction")
    BLOKLAR = RESTRICTION.querySelectorAll("h1");

    //OYUN MOBİL İŞLEMLERİ 
    YONETIMBUTONLARIMOBIL = document.querySelector(".YONETIMBUTONLARIMOBIL");
    ANLIKOYUNMENUPANEL_MOBIL = document.getElementById('ANLIKGAMEMENUMOBIL_BTN');
    ANLIKOYUNMENUPANEL_MOBIL;
    MOBIL_MOVEMENT_ILERI = document.querySelector(".ILERITUSU_BTN");
    MOBIL_MOVEMET_TUSLARI.push(MOBIL_MOVEMENT_ILERI);
    MOBIL_MOVEMENT_SOL = document.querySelector(".SOLTUSU_BTN");
    MOBIL_MOVEMET_TUSLARI.push(MOBIL_MOVEMENT_SOL);
    MOBIL_MOVEMENT_SAG = document.querySelector(".SAGTUSU_BTN");
    MOBIL_MOVEMET_TUSLARI.push(MOBIL_MOVEMENT_SAG);
    MOBIL_MOVEMENT_GERI = document.querySelector(".GERITUSU_BTN");
    MOBIL_MOVEMET_TUSLARI.push(MOBIL_MOVEMENT_GERI);

    MOBIL_ROTATE_SOL = document.querySelector(".SOLDON_BTN");
    MOBIL_ROTATE_TUSLARI.push(MOBIL_ROTATE_SOL);
    MOBIL_ROTATE_ILERI = document.querySelector(".ILERIDON_BTN");
    MOBIL_ROTATE_TUSLARI.push(MOBIL_ROTATE_ILERI);
    MOBIL_ROTATE_SAG = document.querySelector(".SAGDON_BTN");
    MOBIL_ROTATE_TUSLARI.push(MOBIL_ROTATE_SAG);
    MOBIL_ROTATE_GERI = document.querySelector(".GERIDON_BTN");
    MOBIL_ROTATE_TUSLARI.push(MOBIL_ROTATE_GERI);

    MOBIL_FIRE_BTN = document.querySelector(".ATESET_BTN");

    MOBIL_RELOAD_BTN = document.querySelector(".RELOADLA");
}
//OYUNUNUN BAŞLATILMASI
if (window.location.href.includes("/Game/AirBorneRivals")) {
    OYUNABASLA();
    fetch('/api/IdentityApi/GetDroneProperty', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
        .then(data => {
            if (data.length == 0) {
                // DEFAULT LAZER
                var default_lazer = LAZERLIGHTS[1].querySelector("div");
                var lazer_Style = window.getComputedStyle(default_lazer);
                var lazer_default_renk = lazer_Style.borderColor;
                var styleElement = document.createElement("style");
                styleElement.innerHTML = `.LAZER { border: ${lazer_Style.border}; }`;
                Lazer_Keyframe_Function(lazer_default_renk);
                document.head.appendChild(styleElement);
                //DEFAULT DRON
                DRONCELLS.forEach(function (element) {
                    var index = DRONCELLS.indexOf(element);
                    if (index == 0) {
                        var srcValue = element.getAttribute("src");
                        DRONIMG.setAttribute("src", srcValue);
                    }
                })
            }
            else {
                // Specified LAZER
                var default_lazer = LAZERLIGHTS[data.LazerColor].querySelector("div");
                var lazer_Style = window.getComputedStyle(default_lazer);
                var lazer_default_renk = lazer_Style.borderColor;
                var styleElement = document.createElement("style");
                styleElement.innerHTML = `.LAZER { border: ${lazer_Style.border}; }`;
                Lazer_Keyframe_Function(lazer_default_renk);
                document.head.appendChild(styleElement);
                // Specified DRON
                DRONCELLS.forEach(function (element) {
                    var index = DRONCELLS.indexOf(element);
                    if (index == data.DroneColor) {
                        var srcValue = element.getAttribute("src");
                        DRONIMG.setAttribute("src", srcValue);
                    }
                })
            }

        })
        .catch(error => {
            console.error('Oturum kontrolü hatası:', error);
        });


}
//OYUNA BASLAMA 
if (OYUNAGECIS) {
    OYUNAGECIS.addEventListener('click', () => {
        // AJAX isteği ile oturum kontrolü yapın
        fetch('/api/IdentityApi/check-auth', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(data => {
                if (data.isAuthenticated) {
                    // Oturum açılmışsa oyunu başlatma işlemi
                    //OYUNPENCERESI.classList.remove("DisplayNone");
                    //OYUNANAMENU.classList.add("DisplayNone");
                    //OYUNABASLA();
                    //if (lazer_color_secildi_mi == false) {
                    //    var default_lazer = LAZERLIGHTS[1].querySelector("div");
                    //    var lazer_Style = window.getComputedStyle(default_lazer);
                    //    var lazer_default_renk = lazer_Style.borderColor;
                    //    console.log(lazer_default_renk);
                    //    Lazer_Keyframe_Function(lazer_default_renk);
                    //}
                    window.location.href = "/Game/AirBorneRivals";
                } else {
                    // Kullanıcı oturum açmamışsa oturum açma/kayıt olma panelini göster
                    $('#NAMEENTER').modal('show');
                }
            })
            .catch(error => {
                console.error('Oturum kontrolü hatası:', error);
            });

    })

}
//OYUN MANTIK BÖLÜMÜNÜN AÇILMASI
if (OYUNMANTIK) {
    OYUNMANTIK.forEach(element => {
        element.addEventListener('click', () => {
            OYUNMANTIKPANEL.classList.remove("DisplayNone");
        })
    })
}
if (OYUNMANTIKKAPAMA) {
    OYUNMANTIKKAPAMA.addEventListener('click', () => {
        OYUNMANTIKPANEL.classList.add("DisplayNone");
    })
}


// KOZMETİK BÖLÜMÜNÜN AÇILMASI
if (COSMETIC) {
    COSMETIC.addEventListener('click', () => {

        fetch('/api/IdentityApi/check-auth', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(data => {
                if (data.isAuthenticated) {

                    Kozmetik_penceresi.classList.remove("DisplayNone");
                    fetch('/api/IdentityApi/GetDroneProperty', {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).then(response => response.json())
                        .then(data => {
                            if (data.length == 0) {
                                DRONCELLS.forEach(function (element) {
                                    var index = DRONCELLS.indexOf(element);
                                    if (index == 0) {
                                        element.style.border = "2px solid green";
                                    }
                                    else {
                                        element.style.border = "2px solid red";
                                    }

                                })
                                LAZERLIGHTS.forEach(function (element) {
                                    if (element == LAZERLIGHTS[1]) {
                                        element.style.border = "2px solid green";
                                    }
                                    else {
                                        element.style.border = "2px solid red";
                                    }
                                })

                            }
                            else {
                                DRONCELLS.forEach(function (element) {
                                    var index = DRONCELLS.indexOf(element);
                                    if (index == data.DroneColor) {
                                        element.style.border = "2px solid green";
                                    }
                                    else {
                                        element.style.border = "2px solid red";
                                    }

                                })
                                LAZERLIGHTS.forEach(function (element) {
                                    if (element == LAZERLIGHTS[data.LazerColor]) {
                                        element.style.border = "2px solid green";
                                    }
                                    else {
                                        element.style.border = "2px solid red";
                                    }
                                })
                            }

                        })
                        .catch(error => {
                            console.error('Oturum kontrolü hatası:', error);
                        });

                } else {
                    // Kullanıcı oturum açmamışsa oturum açma/kayıt olma panelini göster
                    $('#NAMEENTER').modal('show');
                }
            })
            .catch(error => {
                console.error('Oturum kontrolü hatası:', error);
            });
    })
}
if (COSMETICOFF) {
    COSMETICOFF.addEventListener("click", () => {
        Kozmetik_penceresi.classList.add("DisplayNone");
    })
}

//KOZMETİK BÖLÜMÜ DRON SEÇME
if (CosmeticTable) {
    CosmeticTable.forEach(function (element) {
        element.addEventListener("click", e => {
            let DroneData = {
                DroneColor,
                LazerColor,
            }
            if (e.target.classList.contains("CELLS")) {

                DRONCELLS.forEach(function (element) {
                    if (element == e.target) {
                        element.style.border = "2px solid green";
                        var index = DRONCELLS.indexOf(element);
                        DroneData.DroneColor = index;
                        DroneData.LazerColor = null;
                    }
                    else {
                        element.style.border = "2px solid red"
                    }
                })

                fetch('/api/IdentityApi/SpecifiedDrone', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(DroneData),
                }).then(response => response.json())
                    .then(data => {
                        console.log("VERİ GÖNDERİLDİ : " + data);
                    })
                    .catch(error => {
                        console.error('Veri  hatası:', error);
                    });
            }
            if (e.target.classList.contains("LAZERCELLS")) {
                LAZERLIGHTS.forEach(function (element) {
                    if (element == e.target) {
                        element.style.border = "2px solid green";
                        var index = LAZERLIGHTS.indexOf(element);
                        DroneData.DroneColor = null;
                        DroneData.LazerColor = index;
                    }
                    else {
                        element.style.border = "2px solid red"
                    }
                })

                fetch('/api/IdentityApi/SpecifiedDrone', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(DroneData),
                }).then(response => response.json())
                    .then(data => {
                        console.log("VERİ GÖNDERİLDİ : " + data);
                    })
                    .catch(error => {
                        console.error('Oturum kontrolü hatası:', error);
                    });
            }
        })

    })
}
function Lazer_Keyframe_Function(color) {
    var styleSheet = document.styleSheets[0];
    for (var i = 0; i < styleSheet.cssRules.length; i++) {
        var rule = styleSheet.cssRules[i];
        if (rule.type === CSSRule.KEYFRAMES_RULE && rule.name === "LAZER") {
            styleSheet.deleteRule(i);
            break;
        }
    }
    var styleElement = document.createElement("style");
    var colorValues = color.split(",");

    var renk_Degeri = parseFloat(colorValues[2]);
    colorValues[2] = `${renk_Degeri + 10}`;
    var updatedColor1 = colorValues.join(",");
    var renk_Degeri2 = parseFloat(colorValues[1]);
    colorValues[1] = `${renk_Degeri2 - 17}`;
    var updatedColor2 = colorValues.join(",");

    var renk_Degeri3 = parseFloat(colorValues[0]);
    colorValues[1] = `${renk_Degeri3 - 7}`;
    colorValues[2] = `${renk_Degeri - 12}`;
    var updatedColor3 = colorValues.join(",");
    styleElement.innerHTML = `
    .LAZER {
      animation: lazerAnimation 2s infinite;
    }
    
    @keyframes lazerAnimation {
      0% {
        border: 2px solid ${color};
        box-shadow: 15px 10px 20px ${color},
        -10px -13px 20px  ${updatedColor1}),
        inset 8px 10px 18px  ${color},
        inset -8px -10px 20px  ${updatedColor2});
        
      }
      25% {
        border: 2px solid ${updatedColor1});
        box-shadow: 20px 8px 22px ${updatedColor3}),
        -8px -17px 20px  ${updatedColor1},
        inset 8px 10px 11px  ${updatedColor1},
        inset -5px -10px 17px  ${color};
        
      }
      50% {
        border: 2px solid ${color};
        box-shadow: 15px 10px 20px ${color},
        -10px -13px 20px  ${updatedColor1}),
        inset 8px 10px 18px  ${color},
        inset -8px -10px 20px  ${updatedColor2});
       
      }
      75% {
        border: 2px solid ${color};
        box-shadow: 15px 10px 20px ${color},
        -10px -13px 20px  ${updatedColor1}),
        inset 8px 10px 19px  ${updatedColor3},
        inset -8px -10px 20px  ${updatedColor2});
        
      }
      100% {
        border: 2px solid ${color};
        box-shadow: 16px 10px 21px ${color},
        -14px -10px 22px  ${updatedColor3}),
        inset 8px 10px 25px  ${color},
        inset -8px -10px 19px  ${updatedColor2});
        
      }
    }
  `;

    document.head.appendChild(styleElement);
}
//  TRANSFORM İŞLEMLERİ

function MOVEMENT() {
    if (OYUNDA) {
        if (window.innerWidth > 900) {
            if (pressedKeys[keyelements[0].toLowerCase()]) {
                transformYdron -= 2;
            }
            if (pressedKeys[keyelements[1].toLowerCase()]) {

                transformXdron -= 2;
            }
            if (pressedKeys[keyelements[2].toLowerCase()]) {
                transformXdron += 2;
            }
            if (pressedKeys[keyelements[3].toLowerCase()]) {
                transformYdron += 2;
            }
        }
        else {
            if (pressedKeys[keyelements[0].toLowerCase()]) {
                transformYdron -= 0.5;
            }
            if (pressedKeys[keyelements[1].toLowerCase()]) {
                transformXdron -= 0.5;
            }
            if (pressedKeys[keyelements[2].toLowerCase()]) {
                transformXdron += 0.5;
            }
            if (pressedKeys[keyelements[3].toLowerCase()]) {

                transformYdron += 0.5;
            }
        }

        DRONSECTION.style.transform = `translate(${transformXdron}px, ${transformYdron}px)`;

        animation_smoothness = requestAnimationFrame(MOVEMENT);
    }

}
function ROTATE(e) {
    // preventdafult bir eylem gerçekleştirilirken eğer o eylem başka bir eylemle çakışıyorsa o çakışan eylemi geçici süreliğine yapmaz
    var tus_mu = typeof e;
    if (tus_mu == "number") {
        if (e == Yontusları[0]) {
            derece = -90;
            DRONIMG.style.transform = `rotate(${derece}deg)`;
        }
        if (e == Yontusları[1]) {

            derece = 0;
            DRONIMG.style.transform = `rotate(${derece}deg)`;
        }
        if (e == Yontusları[2]) {

            derece = 90;
            DRONIMG.style.transform = `rotate(${derece}deg)`;
        }
        if (e == Yontusları[3]) {

            derece = 180;
            DRONIMG.style.transform = `rotate(${derece}deg)`;
        }
        else {
            DRONIMG.style.transform = `rotate(${derece}deg)`;
        }
    }
    else {
        if (e.keyCode == Yontusları[0]) {
            derece = -90;
            DRONIMG.style.transform = `rotate(${derece}deg)`;
        }
        if (e.keyCode == Yontusları[1]) {

            derece = 0;
            DRONIMG.style.transform = `rotate(${derece}deg)`;
        }
        if (e.keyCode == Yontusları[2]) {

            derece = 90;
            DRONIMG.style.transform = `rotate(${derece}deg)`;
        }
        if (e.keyCode == Yontusları[3]) {

            derece = 180;
            DRONIMG.style.transform = `rotate(${derece}deg)`;
        }
        else {
            DRONIMG.style.transform = `rotate(${derece}deg)`;
        }
    }

}
function rotateElement(element, degrees) {
    element.style.transform = `rotate(${degrees}deg)`;
}
//ATEŞ ETME VE RELOAD İŞLEMLERİ
function ATESETME() {
    if (ATES_EDILSIN_MI) {
        MERMI_MUHIMMAT--;
        if (MERMI_MUHIMMAT == 0) {
            ATES_EDILSIN_MI = false
        }
        ATESANIMASYON(derece, DRONSECTION);
        KALANMERMI.style.width = `${MERMI_MUHIMMAT}px`;
        var newLazer = document.createElement('div');
        newLazer.className = 'LAZER';
        LAZERSECTION.appendChild(newLazer);
        LAZERSESI(DRONIMG);
        LAZERITIS(newLazer, transformXdron, transformYdron);
        rotateElement(DRONIMG, derece);
    }
}

function LAZERITIS(lazer, Xposition, Yposition) {
    var rotation = derece + 'deg';
    if (rotation == `90deg`) {

        lazer.style.width = '70%';
        lazer.style.height = '1%';
        lazer.style.top = '50%';
        lazer.style.left = '60%';
        var pozısyon = 0;
        var LAZERGIDIS = setInterval(function () {

            pozısyon += 2;
            if (pozısyon >= 4000) {
                lazer.remove();
                clearInterval(LAZERGIDIS);
            }
            else {

                lazer.style.transform = `translate(${Xposition + pozısyon}px, ${Yposition}px)`;
            }
            if (lazer == null) {
                clearInterval(LAZERGIDIS);
            }

        }, 1)
    }
    if (rotation == `-90deg`) {
        lazer.style.width = '70%';
        lazer.style.height = '1%';
        lazer.style.top = '50%';
        lazer.style.left = '-60%';
        var pozısyon = 0;
        var LAZERGIDIS = setInterval(function () {
            pozısyon -= 2;
            if (pozısyon <= -4000) {
                lazer.remove();
                clearInterval(LAZERGIDIS);
            }
            else {

                lazer.style.transform = `translate(${Xposition + pozısyon}px, ${Yposition}px)`;
            }
            if (lazer == undefined) {
                clearInterval(LAZERGIDIS);
            }

        }, 1)
    }
    if (rotation == `0deg`) {
        lazer.style.height = '70%';
        lazer.style.width = '1%';
        lazer.style.top = '-25%';
        lazer.style.left = '60%';
        var pozısyon = 0;
        var LAZERGIDIS = setInterval(function () {

            pozısyon -= 2;
            if (pozısyon <= -4000) {
                lazer.remove();
                clearInterval(LAZERGIDIS);
            }
            else {

                lazer.style.transform = `translate(${Xposition}px, ${Yposition + pozısyon}px)`;
            }
            if (lazer == undefined) {
                clearInterval(LAZERGIDIS);
            }

        }, 1)
    }
    if (rotation == `180deg`) {
        lazer.style.height = '70%';
        lazer.style.width = '1%';
        lazer.style.top = '25%';
        lazer.style.left = '60%';
        var pozısyon = 0;
        LAZERGIDIS = setInterval(function () {

            pozısyon += 2;
            if (pozısyon >= 4000) {
                lazer.remove();
                clearInterval(LAZERGIDIS);
            }
            else {

                lazer.style.transform = `translate(${Xposition}px, ${Yposition + pozısyon}px)`;
            }
            if (lazer == undefined) {
                clearInterval(LAZERGIDIS);
            }

        }, 1)
    }
}
function RELOAD() {
    ATES_EDILSIN_MI = false;
    var reload = setInterval(() => {
        if (MERMI_MUHIMMAT < MERMI_KAPASITESI) {
            MERMI_MUHIMMAT++;
            KALANMERMI.style.width = `${MERMI_MUHIMMAT}px`;
        }
        else {
            ATES_EDILSIN_MI = true;
            clearInterval(reload);
        }

    }, 100);
}

//SES EFEKTLERİ 

function LAZERSESI() {
    if (OYUNDA) {
        LAZERSES.currentTime = 0;
        LAZERSES.volume = 0.3;
        LAZERSES.play();
    }

}

function BOOMSESI() {

    BOOMSES.currentTime = 0;
    BOOMSES.volume = 0.3;
    BOOMSES.play();


}
// TUŞA BASILMASI HALİNDE GERÇEKLEŞECEKLER
var ateset_bekleme = true;
document.addEventListener("keydown", e => {
    if (OYUNDA) {
        e.preventDefault();
        pressedKeys[e.key.toLowerCase()] = true;
        if (!animation_smoothness) {
            MOVEMENT();
        }
        ROTATE(e);
        if (e.keyCode == ESCAPETUSU) {
            OYUNDA = false;
            ANLIKGAMELOBI.classList.remove("DisplayNone");
            if (window.innerWidth < 900) {
                LOBIPANEL.style.height = '30%';
            }
            else {
                LOBIPANEL.style.height = '100%';
            }
        }
        if (e.keyCode == reload && MERMI_MUHIMMAT < 10) {
            RELOAD();
        }
        if (ateset_bekleme) {
            if (e.keyCode === Yontusları[4]) {
                ateset_bekleme = false;
                ATESETME();
            }
            var fireCooldown = 150;
            setTimeout(function () {
                ateset_bekleme = true;
            }, fireCooldown);
        }
    }
})
document.addEventListener("keyup", e => {
    if (OYUNDA) {
        pressedKeys[e.key.toLowerCase()] = false;
        if (!Object.values(pressedKeys).some(Boolean)) {
            animation_smoothness = null;
        }
    }

})
// LOBİ BUTON AYARLARI
if (GAMERESUME) {
    GAMERESUME.addEventListener("click", () => {
        if (GAMERESUME.classList.contains("RESUMEGAME")) {
            OYUNDA = true;
            animation_smoothness = null;
            ANLIKGAMELOBI.classList.add("DisplayNone");
        }
        if (GAMERESUME.classList.contains("STARTGAME")) {
            OYUNABASLA();
        }
    })
}
if (ESCAPEMENU) {
    ESCAPEMENU.addEventListener("click", () => {
        //ANLIKGAMELOBI.classList.add("DisplayNone");
        //OYUNPENCERESI.classList.add("DisplayNone");
        //OYUNANAMENU.classList.remove("DisplayNone");
        //GAMESECTION.style.height = "100%";
        window.location.href = "/Game/GameMain";
    })
}

//DRON SINIRLARA DEĞERSE  VE SKOR ARTTIRMA

setInterval(e => {
    if (OYUNDA) {
        //SKOR GÖSTERİM
        OYUNSKOR += 1;
        SKORBOLUMU.innerHTML = `${OYUNSKOR}`;
        if (OYUNSKOR < 300) {
            DONGUSURESI = 3500;
        }
        if (OYUNSKOR >= 300 && OYUNSKOR <= 600) {
            DONGUSURESI = 2500;
        }
        if (OYUNSKOR > 600) {
            DONGUSURESI = 5000;
        }
        BLOKLAR.forEach(Element => {
            var blok = Element.getBoundingClientRect();
            var dronposition = DRONSECTION.getBoundingClientRect();
            if (dronposition.left < blok.right && dronposition.right > blok.left && dronposition.top < blok.bottom && dronposition.bottom > blok.top) {
                IMHANIMASYON(DRON);
                BOOMSESI();
                OYUNBITIS();
            }
        })
    }

}, 200)
// DÜŞMAN DRON SPAWN AYAR
setInterval(function () {
    if (OYUNDA) {
        var yapay_Zeka_dron = document.createElement('div');
        if (window.innerWidth > 900) {
            yapay_Zeka_dron.style.width = `100px`;
            yapay_Zeka_dron.style.height = `100px`;
        }
        else {
            yapay_Zeka_dron.style.width = `40px`;
            yapay_Zeka_dron.style.height = `40px`;
        }
        yapay_Zeka_dron.className = 'AI';
        yapay_Zeka_dron.style.position = 'relative';
        var index = Math.round(Math.random() * 55);
        BLOKLAR[index].appendChild(yapay_Zeka_dron);
        if (OYUNSKOR <= 300) {
            yapay_Zeka_dron.innerHTML += ` <div class="ENEMY${1}"><img src="/PLAYSCRIBE_Frontend/Images/BADDRONE1.png" alt=""><div class="TOPLAMDUSMANCAN"><div  class="KALANDUSMANCAN"></div> </div> </div>`;
            var YAPAYZEKA = yapay_Zeka_dron.querySelector(`.ENEMY${1}`);
            AI_CONTROL(YAPAYZEKA, 0);
        }
        if (OYUNSKOR > 300 && OYUNSKOR <= 600) {
            var randomdusman = Math.round(Math.random());
            yapay_Zeka_dron.innerHTML += `<div class="ENEMY${randomdusman + 1}"> <img src="/PLAYSCRIBE_Frontend/Images/BADDRONE${randomdusman + 1}.png" alt=""><div class="TOPLAMDUSMANCAN"><div  class="KALANDUSMANCAN"></div> </div></div> `;
            var YAPAYZEKA = yapay_Zeka_dron.querySelector(`.ENEMY${randomdusman + 1}`);
            AI_CONTROL(YAPAYZEKA, randomdusman);
        }
        if (OYUNSKOR > 600 && OYUNSKOR <= 1000) {

            var randomdusman = Math.floor(Math.random() * 3);
            yapay_Zeka_dron.innerHTML += `<div class="ENEMY${randomdusman + 1}"><img src="/PLAYSCRIBE_Frontend/Images/BADDRONE${randomdusman + 1}.png" alt=""> <div class="TOPLAMDUSMANCAN"><div  class="KALANDUSMANCAN"></div> </div></div> `;
            var YAPAYZEKA = yapay_Zeka_dron.querySelector(`.ENEMY${randomdusman + 1}`);
            AI_CONTROL(YAPAYZEKA, randomdusman);
        }
        if (OYUNSKOR > 1000) {

            var randomdusman = Math.floor(Math.random() * 4);
            yapay_Zeka_dron.innerHTML += `<div class="ENEMY${randomdusman + 1}"><img src="/PLAYSCRIBE_Frontend/Images/BADDRONE${randomdusman + 1}.png" alt=""> <div class="TOPLAMDUSMANCAN"><div  class="KALANDUSMANCAN"></div> </div></div> `;
            var YAPAYZEKA = yapay_Zeka_dron.querySelector(`.ENEMY${randomdusman + 1}`);
            AI_CONTROL(YAPAYZEKA, randomdusman);
        }

    }

}, DONGUSURESI)
// DÜŞMAN DRON YAPAY ZEKA
var AIfonksiyon = [];
function AI_CONTROL(YAPAYZEKA, DUSMANID) {
    var interval_hizi = 0;
    if (window.innerWidth > 900) {
        if (DUSMANID == 0) {
            interval_hizi = 30;
        }
        else if (DUSMANID == 1) {
            interval_hizi = 20;
        }
        else if (DUSMANID == 2) {
            interval_hizi = 10;
        }
        else if (DUSMANID == 3) {
            interval_hizi = 100;
            ENEMYLAZERPOZISYON(YAPAYZEKA);
        }
    }
    else {
        if (DUSMANID == 0) {
            interval_hizi = 80;
        }
        else if (DUSMANID == 1) {
            interval_hizi = 70;
        }
        else if (DUSMANID == 2) {
            interval_hizi = 60;
        }
        else if (DUSMANID == 3) {
            interval_hizi = 120;
            ENEMYLAZERPOZISYON(YAPAYZEKA);
        }
    }


    var artırımX = 0;
    var artırımY = 0;
    YAPAYZEKA.style.position = 'absolute';
    var YapayZekaTakip = setInterval(function () {
        if (OYUNDA) {

            var ENEMYPOSITION = YAPAYZEKA.getBoundingClientRect();
            var dronposition = DRONSECTION.getBoundingClientRect();
            var hedefX = dronposition.left;
            var hedefY = dronposition.top;
            var currentX = ENEMYPOSITION.left;
            var currentY = ENEMYPOSITION.top;
            var aradaki_farkX = hedefX - currentX;
            var aradaki_farkY = hedefY - currentY;
            var radian = Math.atan2(aradaki_farkY, aradaki_farkX);
            var angle = radian * (180 / Math.PI);
            if (aradaki_farkX <= 0 && aradaki_farkY <= 0) {
                artırımX -= 3;
                artırımY -= 3;

                // YAPAYZEKA.style.transform = `translate(${artırımX}px, ${artırımY}px) rotate(${angle + 90}deg)`;
                YAPAYZEKA.style.transform = ` rotate(${angle + 90}deg)`;
                YAPAYZEKA.style.top = `${artırımY}px`;
                YAPAYZEKA.style.left = `${artırımX}px`;
            }
            else if (aradaki_farkX > 0 && aradaki_farkY <= 0) {
                artırımX += 3;
                artırımY -= 3;

                //  YAPAYZEKA.style.transform = `translate(${artırımX}px, ${artırımY}px) rotate(${angle + 90}deg)`;
                YAPAYZEKA.style.transform = `rotate(${angle + 90}deg)`;
                YAPAYZEKA.style.top = `${artırımY}px`;
                YAPAYZEKA.style.left = `${artırımX}px`;
            }
            else if (aradaki_farkX <= 0 && aradaki_farkY > 0) {
                artırımX -= 3;
                artırımY += 3;

                //  YAPAYZEKA.style.transform = `translate(${artırımX}px, ${artırımY}px) rotate(${angle + 90}deg)`;
                YAPAYZEKA.style.transform = `rotate(${angle + 90}deg)`;
                YAPAYZEKA.style.top = `${artırımY}px`;
                YAPAYZEKA.style.left = `${artırımX}px`;
            }
            else if (aradaki_farkX > 0 && aradaki_farkY > 0) {
                artırımX += 3;
                artırımY += 3;

                // YAPAYZEKA.style.transform = `translate(${artırımX}px, ${artırımY}px) rotate(${angle + 90}deg)`;
                YAPAYZEKA.style.transform = `rotate(${angle + 90}deg)`;
                YAPAYZEKA.style.top = `${artırımY}px`;
                YAPAYZEKA.style.left = `${artırımX}px`;
            }
            if (ENEMYPOSITION.left < dronposition.right && ENEMYPOSITION.right > dronposition.left && ENEMYPOSITION.top < dronposition.bottom && ENEMYPOSITION.bottom > dronposition.top) {
                BOOMSESI();
                IMHANIMASYON(DRON);
                OYUNBITIS();
            }
            var LAZERS = document.querySelectorAll('.LAZER');
            LAZERS.forEach(function (element) {
                var Lazer_position = element.getBoundingClientRect();
                if (ENEMYPOSITION.left < Lazer_position.right && ENEMYPOSITION.right > Lazer_position.left && ENEMYPOSITION.top < Lazer_position.bottom && ENEMYPOSITION.bottom > Lazer_position.top) {

                    element.remove();
                    DronYoket(YAPAYZEKA, DUSMANID);

                }
            })

        }

    }, interval_hizi)
    var AIInterval = { IntervalKimlik: YapayZekaTakip, Yapayzeka: YAPAYZEKA };
    AIfonksiyon.push(AIInterval);
}
function ENEMYLAZERPOZISYON(YAPAYZEKA) {

    var ates_etme_dongusu = setInterval(function () {
        if (OYUNDA) {
            var newLazer = document.createElement('div');
            YAPAYZEKA.parentElement.appendChild(newLazer);
            newLazer.className = 'ENEMYLAZER';
            newLazer.style.width = `1px`;
            newLazer.style.height = `80px`;
            newLazer.style.position = 'absolute';
            // LAZER ROTASYON VE YÖN BELİRLEME
            ENEMYATESET(YAPAYZEKA, newLazer);
            LAZERSESI(YAPAYZEKA);
        }
        else {

            clearInterval(ates_etme_dongusu);
        }
    }, 5000)


}
function ENEMYATESET(YAPAYZEKA, LAZER) {
    // YAPAY ZEKA POSZİYON VE DRON POZSİYON BİLGİLERİNİ BİR KEREYE MAHSUS ÇEKME
    var YAPAYZEKA_position = YAPAYZEKA.getBoundingClientRect();
    var dronposition = DRONIMG.getBoundingClientRect();
    var hedefX = dronposition.left;
    var hedefY = dronposition.top;
    var currentX = YAPAYZEKA_position.left;
    var currentY = YAPAYZEKA_position.top;
    var aradaki_farkX = hedefX - currentX;
    var aradaki_farkY = hedefY - currentY;
    var radian = Math.atan2(aradaki_farkY, aradaki_farkX);
    var angle = radian * (180 / Math.PI);
    ATESANIMASYON((angle + 90), YAPAYZEKA);
    var artırılmıs_PozisyonX = parseFloat(YAPAYZEKA.style.left);
    var artırılmıs_PozisyonY = parseFloat(YAPAYZEKA.style.top);
    LAZER.style.top = `${artırılmıs_PozisyonX}px`;
    LAZER.style.left = `${artırılmıs_PozisyonY}px`;
    var artırımX = 0;
    var artırımY = 0;
    var lazerInterval = setInterval(function () {
        // DÜŞMANIN LAZER İTİŞİ
        if (OYUNDA) {
            if (aradaki_farkX <= 0 && aradaki_farkY <= 0) {
                artırımX -= 3;
                artırımY -= 3;
                LAZER.style.transform = `translate(60px, -110px) rotate(${angle + 90}deg)`;
                LAZER.style.top = `${artırılmıs_PozisyonY + artırımY + 65}px`;
                LAZER.style.left = `${artırılmıs_PozisyonX + artırımX - 65}px`;
                if (artırımX <= - 4000 || artırımY <= -4000) {
                    clearInterval(lazerInterval);
                    LAZER.remove();
                }
            }
            else if (aradaki_farkX > 0 && aradaki_farkY <= 0) {
                artırımX += 3;
                artırımY -= 3;
                LAZER.style.transform = `translate(60px, -110px) rotate(${angle + 90}deg)`;
                LAZER.style.top = `${artırılmıs_PozisyonY + artırımY + 65}px`;
                LAZER.style.left = `${artırılmıs_PozisyonX + artırımX + 65}px`;
                if (artırımX >= 4000 || artırımY <= -4000) {
                    clearInterval(lazerInterval);
                    LAZER.remove();
                }
            }
            else if (aradaki_farkX <= 0 && aradaki_farkY > 0) {
                artırımX -= 3;
                artırımY += 3;
                LAZER.style.transform = `translate(50px, 100px) rotate(${angle + 90}deg)`;
                LAZER.style.top = `${artırılmıs_PozisyonY + artırımY - 65}px`;
                LAZER.style.left = `${artırılmıs_PozisyonX + artırımX - 65}px`;
                if (artırımX <= -4000 || artırımY >= 4000) {
                    clearInterval(lazerInterval);
                    LAZER.remove();
                }
            }
            else if (aradaki_farkX > 0 && aradaki_farkY > 0) {
                artırımX += 3;
                artırımY += 3;
                LAZER.style.transform = `translate(60px, 100px) rotate(${angle + 90}deg)`;
                LAZER.style.top = `${artırılmıs_PozisyonY + artırımY - 65}px`;
                LAZER.style.left = `${artırılmıs_PozisyonX + artırımX + 65}px`;
                if (artırımX >= 4000 || artırımY >= 4000) {
                    clearInterval(lazerInterval);
                    LAZER.remove();
                }
            }
            var LAZER_bounding = LAZER.getBoundingClientRect();
            if (LAZER_bounding.left < dronposition.right && LAZER_bounding.right > dronposition.left && LAZER_bounding.top < dronposition.bottom && LAZER_bounding.bottom > dronposition.top) {
                clearInterval(lazerInterval);
                IMHANIMASYON(DRON);
                BOOMSESI();
                OYUNBITIS();
                LAZER.remove();

            }
        }
    }, 10);

}
function DronYoket(EnemyName, EnemyID) {
    var can = EnemyName.querySelector(".KALANDUSMANCAN");
    var TOPLAMCAN = can.offsetWidth;
    if (EnemyID == 0) {
        TOPLAMCAN -= 8;
        can.style.width = `${TOPLAMCAN}px`;
        if (TOPLAMCAN <= 0) {
            IMHANIMASYON(EnemyName);
            BOOMSESI();
            OYUNSKOR += 20;
            Enemy1Kill++;
            ENEMY1KILLCOUNTER[0].innerHTML = `${Enemy1Kill}`;

        }
    }
    else if (EnemyID == 1) {
        TOPLAMCAN -= 12;
        can.style.width = `${TOPLAMCAN}px`;
        if (TOPLAMCAN <= 0) {
            IMHANIMASYON(EnemyName);
            BOOMSESI();
            OYUNSKOR += 30;
            Enemy2Kill++;
            ENEMY2KILLCOUNTER[0].innerHTML = `${Enemy2Kill}`;

        }
    }
    else if (EnemyID == 2) {
        TOPLAMCAN -= 20;
        can.style.width = `${TOPLAMCAN}px`;
        if (TOPLAMCAN <= 0) {
            IMHANIMASYON(EnemyName);
            BOOMSESI();
            OYUNSKOR += 40;
            Enemy3Kill++;
            ENEMY3KILLCOUNTER[0].innerHTML = `${Enemy3Kill}`;

        }
    }
    else if (EnemyID == 3) {
        TOPLAMCAN -= 6;
        can.style.width = `${TOPLAMCAN}px`;
        if (TOPLAMCAN <= 0) {
            IMHANIMASYON(EnemyName);
            BOOMSESI();
            OYUNSKOR += 40;
            Enemy4Kill++;
            ENEMY4KILLCOUNTER[0].innerHTML = `${Enemy4Kill}`;

        }
    }
}
// ANİMASYONLAR 
function ATESANIMASYON(ACI, pozisyon) {
    var ates_div = document.createElement("div");
    ates_div.style.position = 'absolute';
    if (window.innerWidth > 900) {
        ates_div.style.width = `100px`;
        ates_div.style.height = `100px`;
    }
    else {
        ates_div.style.height = `30px`;
        ates_div.style.width = `30px`;
    }
    pozisyon.appendChild(ates_div);
    var ates = document.createElement("div");
    ates.className = 'ATES';
    ates.style.transform = `rotate(${ACI}deg)`;

    if (ACI == 90) {
        if (window.innerWidth > 900) {
            ates_div.style.transform = `translateX(20px) translateY(-110px)`;
        }
        else {
            ates_div.style.transform = `translateX(10px) translateY(-50px)`;
        }

    }
    else if (ACI == -90) {

        if (window.innerWidth > 900) {
            ates_div.style.transform = `translateX(-20px) translateY(-110px)`;
        }
        else {
            ates_div.style.transform = `translateX(-10px) translateY(-50px)`;
        }

    }
    else if (ACI == 0) {

        if (window.innerWidth > 900) {
            ates_div.style.transform = ` translateX(5px) translateY(-120px)`;
        }
        else {
            ates_div.style.transform = `translateX(-5px) translateY(-60px)`;
        }

    }
    else if (ACI == 180) {
        if (window.innerWidth > 900) {
            ates_div.style.transform = ` translateX(10px) translateY(-80px)`;
        }
        else {
            ates_div.style.transform = `translateX(-5px) translateY(-35px)`;
        }

    }
    else {
        if (window.innerWidth > 900) {
            ates_div.style.transform = `translateX(20px) translateY(-100px)`;
        }
        else {
            ates_div.style.transform = `translateX(-20px) translateY(30px)`;
        }

    }
    ates_div.appendChild(ates);
    ATESKEYFRAME(ates)
}
function ATESKEYFRAME(element) {
    var bekleme = 0;
    var element_Sil = setInterval(function () {
        bekleme++;
        if (bekleme == 2) {
            element.parentElement.remove();
            clearInterval(element_Sil);
        }

    }, 2000);
}

function IMHANIMASYON(Target) {
    var bomba = document.createElement("div");
    if (Target != DRON) {
        var eslesenYapayZekaInfo;
        AIfonksiyon.forEach(e => {
            if (e.Yapayzeka === Target) {
                eslesenYapayZekaInfo = e;
                clearInterval(eslesenYapayZekaInfo.IntervalKimlik);
                var index = AIfonksiyon.indexOf(eslesenYapayZekaInfo);
                AIfonksiyon.splice(index, 1);
            }
        })
        Target.innerHTML = "";
        Target.appendChild(bomba);
        bomba.style.transform = `translate(${10}px, ${20}px)`;
        setTimeout(function () {
            Target.remove();
        }, 1000);
    }
    else {
        RESTRICTION.appendChild(bomba);
        bomba.style.position = 'absolute';
        bomba.style.left = '50%';
        bomba.style.top = '50%';
        bomba.style.transform = `translate(${transformXdron + 50}px, ${transformYdron + 10}px)`;
    }
    bomba.className = 'BOMBA';
    bomba.innerHTML = ` <div class="BOMBASIYAH"></div> <div class="BOMBAKIRMIZI"></div> <div class="BOMBASARI"> </div>   <div class="BOMBATURUNCU"></div>`;
    var bomba_efektleri = bomba.querySelectorAll("div");
    var islargerscreen = window.innerWidth > 900;
    var boyutlar = islargerscreen ? ['100px', '75px', '50px', '30px'] : ['60px', '45px', '30px', '15px'];
    bomba_efektleri.forEach((e, index) => {
        e.style.width = boyutlar[index];
        e.style.height = boyutlar[index];
        var class_name = e.className;
        var style = e.style;
        BombaKeyframe(e, style, class_name);

    })

}
function BombaKeyframe(element, style, classname) {
    var styleElement = document.createElement("style");
    var background = style.backgroundColor;
    var background_values = background.split(",");
    var renk1 = parseFloat(background_values[0]);
    var renk2 = parseFloat(background_values[1]);
    var renk3 = parseFloat(background_values[2]);
    background_values[0] = `${renk1 - 100}`;
    background_values[1] = `${renk2 + 100}`;
    background_values[2] = `${renk3 - 100}`;
    var updated_background = background_values.join(",");
    background_values[0] = `${renk1 - 50}`;
    background_values[1] = `${renk2 + 50}`;
    background_values[2] = `${renk3 - 50}`;
    var updated_background2 = background_values.join(",");
    background_values[0] = `${renk1 - 22}`;
    background_values[1] = `${renk2 + 22}`;
    background_values[2] = `${renk3 - 22}`;
    var updated_background3 = background_values.join(",");
    styleElement.innerHTML = `
    .${classname}
    {
        animation: BombaAnimation 2s both 0s 1;
    }
    @keyframes BombaAnimation {
        0% {
          opacity: 0.1;
          width: ${style.width}px;
          height: ${style.height}px;
          background: ${background});

        }
        20% {
          opacity: 0.7;
          width: ${style.width - (style.width - 20)};
          height: ${style.height - (style.height - 20)};
          background: ${updated_background});

        }
        30% {
          opacity: 0.8;
          width: ${style.width - (style.width - 30)};
          height:${style.height - (style.height - 30)};
          background:${updated_background2});

        }
        40% {
          opacity: 1;
          width:  ${style.width};
          height:  ${style.height};
          background: ${updated_background3};
 
        }
  
        100% {
          opacity: 0;
          width: 0%;
          height: 0%;
          background: rgba(0, 0, 0, 0);
          box-shadow: 1px 1px 3px rgba(0, 0, 0, 0),
                      -8px -3px 30px rgba(0, 0, 0, 0);
        }
      }
  `;
    var bekleme = 0;
    var element_Sil = setInterval(function () {
        bekleme++;
        if (bekleme == 2) {
            element.parentElement.remove();
            clearInterval(element_Sil);
        }

    }, 1500);
    document.head.appendChild(styleElement);
}
//OYUNA BAŞLANGIÇ VE BİTİŞ

function OYUNABASLA() {
    animation_smoothness = null;
    OYUNDA = true;
    ANLIKGAMELOBI.classList.add("DisplayNone");
    // DRON POZİSYON SIFIRLAMA
    transformYdron = 0;
    transformXdron = 0;
    DRONSECTION.style.transform = `translate(${transformXdron}px, ${transformYdron}px)`;
    derece = 0;
    DRONIMG.style.transform = `rotate(${derece}deg)`;
    DRON.classList.remove("DisplayNone");
    DRONIMG.style.rotate = `0deg`;
    //SKOR 
    OYUNSKOR = 0;
    SKORBOLUMU.innerHTML = `${OYUNSKOR}`;
    Enemy1Kill = 0;
    Enemy2Kill = 0;
    Enemy3Kill = 0;
    Enemy4Kill = 0;
    ENEMY1KILLCOUNTER[0].innerHTML = `${Enemy1Kill}`;
    ENEMY2KILLCOUNTER[0].innerHTML = `${Enemy2Kill}`;
    ENEMY3KILLCOUNTER[0].innerHTML = `${Enemy3Kill}`;
    ENEMY4KILLCOUNTER[0].innerHTML = `${Enemy4Kill}`;
    SONSKOR.classList.add("DisplayNone");
    IlkSkorTablosu.classList.remove("DisplayNone");
    // DİĞER İŞLEMLER
    MERMI_MUHIMMAT = 30;
    KALANMERMI.style.width = `${MERMI_MUHIMMAT}px`;
    GAMERESUME.classList.remove("STARTGAME");
    GAMERESUME.classList.add("RESUMEGAME");
    GAMERESUME.innerHTML = `OYUNA DEVAM ET`;
    lobibaslık.innerHTML = `OYUN DURDURULDU`;
    //MOBİL ENTEGRASYON İŞLEMİ
    if (window.innerWidth < 900) {
        rotateScreen();
        if (window.orientation === 90 || window.orientation === -90) {
            GAMESECTION.style.height = "400px";


        } else {
            GAMESECTION.style.height = "1000px";
        }
    }
    else {

        GAMESECTION.style.height = "100%";
    }
}
function OYUNBITIS() {
    pressedKeys = {};
    if (!Object.values(pressedKeys).some(Boolean)) {
        animation_smoothness = null;
    }
    DRON.classList.add("DisplayNone");
    OYUNDA = false;
    var ENEMY = document.querySelectorAll(".AI");
    ENEMY.forEach(function (e) {
        e.remove();
    })
    var LAZERS = document.querySelectorAll('.LAZER');
    LAZERS.forEach(function (element) {
        element.remove();
    })
    var LAZERS = document.querySelectorAll('.ENEMYLAZER');
    LAZERS.forEach(function (element) {
        element.remove();
    })
    SONSKOR.classList.remove("DisplayNone");
    IlkSkorTablosu.classList.add("DisplayNone");
    SonSkorGoster();
    ANLIKGAMELOBI.classList.remove("DisplayNone");
    lobibaslık.innerHTML = `DRONUN PATLADI OYUN BİTTİ`;
    GAMERESUME.innerHTML = `OYUNA TEKRAR BAŞLA`;
    GAMERESUME.classList.remove("RESUMEGAME");
    GAMERESUME.classList.add("STARTGAME");
}
let gameScore = {
    _OYUNSKOR: 0,
    _Enemy1Kill: 0,
    _Enemy2Kill: 0,
    _Enemy3Kill: 0,
    _Enemy4Kill: 0
};
function SonSkorGoster() {
    //API'ye oyundan elde edilen istatistikleri yollama

    gameScore._OYUNSKOR = OYUNSKOR;
    gameScore._Enemy1Kill = Enemy1Kill;
    gameScore._Enemy2Kill = Enemy2Kill;
    gameScore._Enemy3Kill = Enemy3Kill;
    gameScore._Enemy4Kill = Enemy4Kill;
    ScoreAPI(gameScore);
    //ALINAN İSTATİSTİKLERİ MENÜYE YANSITMA

    var bas_Sayı = 0;
    ENEMY1KILLCOUNTER[1].innerHTML = `${Enemy1Kill}`;
    ENEMY2KILLCOUNTER[1].innerHTML = `${Enemy2Kill}`;
    ENEMY3KILLCOUNTER[1].innerHTML = `${Enemy3Kill}`;
    ENEMY4KILLCOUNTER[1].innerHTML = `${Enemy4Kill}`;
    var SonSkorGosterme = setInterval(function () {
        if (bas_Sayı < OYUNSKOR) {
            bas_Sayı++;
            SonPuan.innerHTML = `${bas_Sayı}`;
        }
        else {
            bas_Sayı = OYUNSKOR;
            SonPuan.innerHTML = `${bas_Sayı}`;
            clearInterval(SonSkorGosterme);
        }


    }, 2)
}
//SKOR İSTATİSKLERİNİ APİYE GÖNDERME
function ScoreAPI(APIgameScore) {
    const url = '/api/IdentityApi/Score';

    const data = {
        gameScore: APIgameScore._OYUNSKOR, // Oyun skoru
        dronKillCounts: [
            APIgameScore._Enemy1Kill,
            APIgameScore._Enemy2Kill,
            APIgameScore._Enemy3Kill,
            APIgameScore._Enemy4Kill
        ] // Dron kill sayıları
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
        })
        .catch(error => {
            console.error('Hata:', error);
        });


}
// MOBİL TABANLI İŞLEMLER
// OYUN AÇILDIĞINDA EKRANI DÖNDÜRÜP KİLİTLEME
function rotateScreen() {
    if (window.screen.orientation) {
        screen.orientation.lock('landscape');

    } else if (window.screen.mozLockOrientation) {
        window.screen.mozLockOrientation('landscape');
    }
}
var HoldingInterval;
ANLIKOYUNMENUPANEL_MOBIL.addEventListener("click", e => {
    OYUNDA = false;
    ANLIKGAMELOBI.classList.remove("DisplayNone");
})
MOBIL_MOVEMET_TUSLARI.forEach(e => {
    var index_btn = MOBIL_MOVEMET_TUSLARI.indexOf(e);
    e.addEventListener("touchstart", () => {

        HoldingInterval = setInterval(function () {
            if (OYUNDA) {
                console.log("ad");
                pressedKeys[keyelements[index_btn]] = true;
                console.log(pressedKeys);
                if (!animation_smoothness) {
                    MOVEMENT();
                }
            }

        }, 0.1);
    });

    // Mouse butonun üzerinden çıkarsa veya basmayı bırakırsa
    e.addEventListener("touchend", () => {
        clearInterval(HoldingInterval);
        if (OYUNDA) {
            pressedKeys[keyelements[index_btn]] = false;
            if (!Object.values(pressedKeys).some(Boolean)) {
                animation_smoothness = null;
            }
        }
    });
})
MOBIL_ROTATE_TUSLARI.forEach(e => {

    e.addEventListener("click", () => {
        var index = MOBIL_ROTATE_TUSLARI.indexOf(e);
        ROTATE(Yontusları[index]);

    });
})
MOBIL_FIRE_BTN.addEventListener("click", () => {
    if (ateset_bekleme) {
        ateset_bekleme = false;
        ATESETME();
        var fireCooldown = 150;
        setTimeout(function () {
            ateset_bekleme = true;
        }, fireCooldown);
    }
});
MOBIL_RELOAD_BTN.addEventListener("click", () => {
    if (MERMI_MUHIMMAT < 20) {
        RELOAD();
    }
});
