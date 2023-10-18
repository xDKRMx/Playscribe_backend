//ROUTİNG İŞLEMLERİ VE ONUN VARYANTLARI
background.classList.add('BLOKBACK');
// BLOK DEĞİŞKENLERİ
var Block_Icınde_Hakkında = document.getElementById('BlockAbout');
var Block_Iletısım_buton = document.getElementById('BlockFeedBack_btn');
var Block_buton = document.getElementById('Block_btn');
var Feeadback_section = document.querySelector(".Feedback");
var Block_bolumu = document.querySelector(".BlockMenu");
var Blocks = document.querySelector(".Blocks");
var BlokNo = [".NO1"];
var Target_Blok = 0;
// BLOK YORUM  DEĞERLERİ
var MevcutYorumlar = document.querySelector(".CurrentComments");
var TextAreaBlok = document.querySelector(".BlokYorumDegeri");
var YorumKaydetme = document.querySelector(".YorumKaydetme");;
var MevcutBlokYorum = 0;
// BLOK ANA MENU İŞLEMLERİ 
var navbar_toggle = document.querySelector(".navbar-toggler");;
var FavoriBloklar = [];
var BlokYorum = document.querySelector(".CommentSection");
var like = document.querySelectorAll(".Like");
var FavoriBloklar_btn = document.querySelector(".FavoriBloklar");
var GeriBloklar_btn = document.querySelector(".GeriBloklar");
var Comment_btn = document.querySelectorAll(".CommentBlok");
var Show_btn = document.querySelectorAll(".ShowBlok");
var BlokSecenekler = document.querySelectorAll(".BlokSecenekler");
var BlokComment_aktiflik = false;
var BlokIsimleri = ["Balkan Turu"];
var MevcutBlok;
var BlokYorumTitle = document.querySelector(".CommentTitle");
var YorumYazmaBlok = document.querySelector(".YorumYazmaBlok");
var YorumlarBlok = document.querySelector(".BlokYorumlar");
var BlokyorumYaz_btn = document.querySelector(".BlokYorumYaz");
var BlokYorumlar_btn = document.querySelector(".BlokYorumlarButon");
BlokyorumYaz_btn.style.float = "right";
//BLOK İLETİŞİME GEÇME İŞLEMLERİ
var Contact_Form = document.querySelector(".Contact_Form");
var Contact_Successful = document.querySelector(".Contact_Successful");
var Contact_btn = document.querySelector(".Contact_btn");
var Contact_Username = document.querySelector(".Contact_Username");
var Contact_Email = document.querySelector(".Contact_Email");
var Contact_Title = document.querySelector(".Contact_Title");
var Contact_text = document.querySelector(".Contact_Text");
//BLOK MENUYE GEÇİŞ İŞLEMLERİ
var CloseBlok = document.querySelectorAll(".MenuBlokBack");;
//BLOK SAYFA GEÇİŞ İŞLEMLERİ
var Onceki_sayfa_butonu = document.querySelector(".PreviousPage");
var Sonraki_sayfa_butonu = document.querySelector(".NextPage");
var BLOK1 = document.querySelectorAll(".BLOCK1");
var Page1Block = document.querySelector(".PAGE1BLOCK");
var Page1 = document.querySelector(".PAGE1");
var Page2Block = document.querySelector(".PAGE2BLOCK");
var Page2 = document.querySelector(".PAGE2");
var Page3Block = document.querySelector(".PAGE3BLOCK");
var Page3 = document.querySelector(".PAGE3");
var Page4 = document.querySelector(".PAGE4");
var Page4Block = document.querySelector(".PAGE4BLOCK");
var Page5 = document.querySelector(".PAGE5");
var Page5Block = document.querySelector(".PAGE5BLOCK");
var PageİleriCevirme = [false, false, false, false];
var PageGeriCevirme = [false, false, false, false];
var CurrentPAGE = 0;
//BLOK İÇİ ANİMASYONLAR
var CaprazResimler = document.querySelectorAll(".CaprazResim");
var CaprazResimUstu = document.querySelector(".CaprazResimYazı");
IsfavoriteBlog();
// BLOK ANA MENU
//NAV BAR İŞLEMİ
navbar_toggle.addEventListener("click", () => {
    if (navbar_toggle.classList.contains("collapsed")) {
        navbar_toggle.style.transform = `rotate(0deg)`
    }
    else {
        navbar_toggle.style.transform = `rotate(90deg)`;
    }
})
function IsfavoriteBlog() {
    fetch('/api/IdentityApi/ShowFavoriteBlogs', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(result => {
            console.log(result);
            result.forEach(e => {
                if (result.length !== 0) {
                    console.log(e);
                    var FavoriteBlog = document.querySelector("." + e);
                    if (FavoriteBlog) {
                        var like_favorite = FavoriteBlog.querySelector(".Like");
                        console.log(e);
                        var like_img = like_favorite.querySelector("img");
                        like_img.src = '/PLAYSCRIBE_Frontend/Images/Like.jpg';
                    }
                }
            })


        })
        .catch(error => {
            console.error('Hata:', error);
        });
}
like.forEach((e, i) => {


    e.addEventListener("click", () => {
        var _IsFavorite = false;
        _Comment = "";
        Target_Blok = i;
        var Blok_no = BlokNo[Target_Blok].slice(1);
        var img = e.querySelector("img");
        if (img.src.includes('/PLAYSCRIBE_Frontend/Images/Unlike.jpg')) {

            img.src = '/PLAYSCRIBE_Frontend/Images/Like.jpg';
            FavoriBloklar.push(document.querySelector(BlokNo[i]));
            _IsFavorite = true;
        }
        else {
            var index = FavoriBloklar.indexOf(document.querySelector(BlokNo[i]));
            FavoriBloklar.splice(index, 1);
            img.src = '/PLAYSCRIBE_Frontend/Images/Unlike.jpg';
            _IsFavorite = false;
        }
        //APİ'YE GÖNDERME İŞLEMİ 
        const url = '/api/IdentityApi/BlogPost';
        let data = {
            TargetBlok: Blok_no,
            Comment: _Comment,
            IsFavorite: _IsFavorite,
        }
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => {
                console.log(response);
                return response.status;
            })
            .then(result => {
                console.log(result);
                return result;
            })
    })
})
FavoriBloklar_btn.addEventListener("click", () => {
    BloklarYukle(true);
    FavoriBloklar_btn.classList.add("DisplayNone");
    GeriBloklar_btn.classList.remove("DisplayNone");

})

GeriBloklar_btn.addEventListener("click", () => {
    BloklarYukle(false);
    FavoriBloklar_btn.classList.remove("DisplayNone");
    GeriBloklar_btn.classList.add("DisplayNone");
    console.log("DENEME 123");
})

function BloklarYukle(yuklensın_mı) {
    var Nofavori = document.querySelector(".NoFavori");
    if (yuklensın_mı == true) {
        fetch('/api/IdentityApi/ShowFavoriteBlogs', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(result => {
                console.log(result);
                if (result.length == 0) {

                    BlokNo.forEach((e) => {
                        var blogitem = document.querySelector(e);
                        blogitem.classList.add("DisplayNone");
                    })

                    Nofavori.classList.remove("DisplayNone");
                }
                else {
                    BlokNo.forEach(selector => {
                        var blogitem = document.querySelector(selector);
                        blogitem.classList.add("DisplayNone");
                    });
                    result.forEach(e => {

                        var FavoriteBlog = document.querySelector("." + e);
                        if (FavoriteBlog) {
                            FavoriteBlog.classList.remove("DisplayNone");
                        }
                    })
                }
            })
            .catch(error => {
                console.error('Hata:', error);
            });

    }
    else {
        BlokNo.forEach((e) => {
            var blogitem = document.querySelector(e);
            console.log(blogitem);
            blogitem.classList.remove("DisplayNone");
        })
        if (!Nofavori.classList.contains("DisplayNone")) {
            Nofavori.classList.add("DisplayNone");
        }

    }
}

Comment_btn.forEach((e, i) => {
    e.addEventListener("click", () => {
        Target_Blok = i;
        YorumlariGoster(Target_Blok);
        if (BlokYorum.classList.contains("DisplayNone")) {

            BlokYorum.classList.remove("DisplayNone");
        }
        BlokComment_aktiflik = true;
        BlokYorum.style.animation = "opacityzero 2s reverse 1";
        BlokYorumTitle.innerHTML = `${BlokIsimleri[i]}`;
        MevcutBlokYorum = i + 1;


    })
})


Show_btn.forEach((e, i) => {
    e.addEventListener("click", () => {
        MevcutBlok = document.querySelector(BlokNo[i]);

        MevcutBlok.style.animation = "OpeningBlock 3s linear 1";
        if (window.innerWidth < 900) {
            EscapeButon.classList.add("DisplayNone");
        }
        BlokSecenekler.forEach(e => {
            e.classList.add("DisplayNone");
            MevcutBlok.addEventListener("animationend", () => {
                if (MevcutBlok.style.animationTimingFunction == "linear") {
                    Block_bolumu.classList.add("DisplayNone");
                    Blocks.classList.remove("DisplayNone");
                    if (!Page1.classList.contains("DisplayNone")) {
                        Onceki_sayfa_butonu.setAttribute('tabindex', '-1');
                        Onceki_sayfa_butonu.parentElement.classList.add("disabled");
                        Onceki_sayfa_butonu.setAttribute('aria-disabled', 'true');
                    }
                }
                MevcutBlok.style.animation = "";
                e.classList.remove("DisplayNone");
            });
        })


    })
})

BlokyorumYaz_btn.addEventListener("click", () => {
    YorumlarBlok.classList.add("DisplayNone");
    BlokyorumYaz_btn.classList.add("DisplayNone");
    BlokYorumlar_btn.classList.remove("DisplayNone");
    // AJAX isteği ile oturum kontrolü yapın
    fetch('/api/IdentityApi/check-auth', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
        .then(data => {
            if (data.isAuthenticated) {
                YorumYazmaBlok.classList.remove("DisplayNone");
            } else {
                // Kullanıcı oturum açmamışsa oturum açma/kayıt olma panelini göster
                var YorumOturum = document.querySelector(".YorumOturum");
                YorumOturum.classList.remove("DisplayNone");
            }
        })

})

BlokYorumlar_btn.addEventListener("click", () => {
    YorumlariGoster(Target_Blok);
    YorumlarBlok.classList.remove("DisplayNone");
    YorumYazmaBlok.classList.add("DisplayNone");
    BlokyorumYaz_btn.classList.remove("DisplayNone");
    BlokYorumlar_btn.classList.add("DisplayNone");
})


var CloseComment_btn = document.querySelector(".BlokKapat");
CloseComment_btn.addEventListener("click", () => {
    BlokComment_aktiflik = false;
    BlokYorum.style.animation = "opacityzero 2s linear 1";
})

BlokYorum.addEventListener("animationend", () => {
    BlokYorum.style.animation = "";
    if (BlokComment_aktiflik == false) {
        BlokYorum.classList.add("DisplayNone");
    }

});

//VAROLAN YORUMLARI GÖRÜNTÜLEME
function YorumlariGoster(i) {
    var Blok_no = BlokNo[i].slice(1);
    // AJAX isteği oluşturun
    fetch(`/Blog/GetBlogComments?blokNo=${Blok_no}`)
        .then(response => response.text())
        .then(data => {
            // Dönen HTML'i bir div içine yerleştirin
            console.log(data);
            MevcutYorumlar.innerHTML = data;
        })
        .catch(error => {
            console.error('Hata:', error);
        });
}
// BLOK YORUM KAYDETME VE KAYITA GEÇİRME 
YorumKaydetme.addEventListener("click", () => {
    if (TextAreaBlok.value != "") {
        var _Isfavorite = false;
        var Blok_no = BlokNo[Target_Blok].slice(1);
        //APİ'YE GÖNDERME İŞLEMİ 
        const url = '/api/IdentityApi/BlogPost';
        let data = {
            TargetBlok: Blok_no,
            Comment: TextAreaBlok.value,
            IsFavorite: _Isfavorite,
        }
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => {
                if (!response.ok) {
                    response.text().then(errorMessage => {
                        console.error(`Network response was not ok: ${errorMessage}`);
                    });
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Veri gönderildi:', data);
            })
        BlokYorumYolla();
    }
    else {
        TextAreaBlok.style.border = "3px solid red";
    }
    TextAreaBlok.value = "";
});
function BlokYorumYolla() {
    YorumYazmaBlok.classList.add("DisplayFlex");
    YorumYazmaBlok.innerHTML = `<h1 class="ELyazısı" style="font-size:40px"><i>Değerlendirmeniz İçin Teşekkür Ederiz.</i></h1>`;
}
// BLOK'DAN HAKKINDAYA
Block_Icınde_Hakkında.addEventListener('click', () => {
    //Background_Sabit = true;
    //dongu_durdur = true;
    //baslangıc_ekranı_Kapansın = false;
    //INCEPTION.classList.add('DisplayNone');
    //SECONDARY.classList.add('DisplayNone');
    //partıkuller.style.height = "4500px";
    //for (let index = 0; index <= 70; index++) {

    //    partıkuller.innerHTML += ` <h1 class="ANIMATE"></h1>`;
    //}
    //partikul_yenileme();
    //SayfaYukleme('HakkındaHtml.html', ABOUTSECTION);
    ////MEVCUT BLOK SCRİPTİNİ KALDIRMA İŞLEMİ
    //HAKKINDAGECIS = true;
    //scripts.forEach(e => {
    //    if (BLOKGECIS && e.src.includes("BlokJs.js")) {
    //        e.remove();
    //        BLOKGECIS = false;
    //    }
    //})
    //setTimeout(() => {
    //    ABOUTSECTION.classList.remove('DisplayNone');
    //    if (!BLOCKSECTION.classList.contains('DisplayNone') || !GAMESECTION.classList.contains('DisplayNone')) {
    //        BLOCKSECTION.classList.add('DisplayNone');
    //        GAMESECTION.classList.add('DisplayNone');
    //    }
    //    background.classList.add('HAKKINDABACK');
    //    background.classList.remove('OYUNBACK');
    //    background.classList.remove('BLOKBACK');
    //    background.classList.remove('geciselement');
    //    background.classList.remove('digerelement');

    //},1000) 
    window.location.href = '/About/AboutMain';
})
Block_buton.addEventListener('click', () => {
    if (Blocks.classList.contains("DisplayNone")) {
        Feeadback_section.classList.add("DisplayNone");
        Block_bolumu.classList.remove("DisplayNone");
    }
})
Block_Iletısım_buton.addEventListener('click', () => {
    Feeadback_section.classList.remove("DisplayNone");
    Block_bolumu.classList.add("DisplayNone");
    if (!Blocks.classList.contains("DisplayNone")) {
        Blocks.classList.add("DisplayNone");
    }
})
// BLOKDAN MENUYE GECİS

CloseBlok.forEach(e => {
    e.addEventListener("click", () => {
        Block_bolumu.classList.remove("DisplayNone");
        Blocks.classList.add("DisplayNone");
        MevcutBlok.style.animation = "OpeningBlock 2s reverse 1";
        if (window.innerWidth < 900) {
            EscapeButon.classList.remove("DisplayNone");
        }
    })
})
//BLOK İLETİŞİM İŞLEMLERİ
Contact_btn.addEventListener("click", () => {
    let contact_data = {
        SenderName : Contact_Username.value,
        Title : Contact_Title.value,
        Description: Contact_text.value,
        Email : Contact_Email.value
    }
    if (Contact_Username.value != "" && Contact_Title.value != "" && Contact_text.value != "") {
        fetch('/api/IdentityApi/Contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contact_data),

        })
            .then(response =>
                response.json()
            )
            .then(data => {
                console.log('Veri gönderildi:', data);
                Contact_Form.classList.add("DisplayNone");
                Contact_Successful.classList.remove("DisplayNone");
            })

    }
    else {
        if (contact_data.SenderName == "") {
            Contact_Username.style.border = "2px solid red";
        }
        else {
            Contact_Username.style.border = "1px solid black";
        }

        if (contact_data.Email == "") {
            Contact_Email.style.border = "2px solid red";
        }
        else {
            Contact_Email.style.border = "1px solid black";
        }

        if (contact_data.Title == "") {
            Contact_Title.style.border = "2px solid red";
        }
        else {
            Contact_Title.style.border = "1px solid black";
        }

        if (contact_data.Description == "") {
            Contact_text.style.border = "2px solid red";
        }
        else {
            Contact_text.style.border = "1px solid black";
        }
    }

})
//BLOK İSLEMLERİ
function IlkBlokAc() {
    CurrentPAGE = 0;
    BLOK1.forEach(function (e) {
        if (e == BLOK1[0]) {
            e.removeAttribute("style");
            ButonAktifleme(Sonraki_sayfa_butonu, true)
            e.parentElement.classList.remove("DisplayNone");
        }
        else {
            e.parentElement.classList.add("DisplayNone");
        }
    })
}
//SAYFA GEÇİŞİ 
Sonraki_sayfa_butonu.addEventListener("click", function e() {

    if (!Page1Block.classList.contains("DisplayNone")) {
        Page1.removeAttribute("style");
        Page2.removeAttribute("style");
        PageİleriCevirme[0] = true;
        CurrentPAGE = 1;
        void Page1.offsetWidth;
        Page1.style.animation = "TurningPage 3s 0.3s linear";
        Page2Block.classList.remove("DisplayNone");
        ButonAktifleme(Onceki_sayfa_butonu, true);
    }
    else if (!Page2Block.classList.contains("DisplayNone")) {
        Page2.removeAttribute("style");
        PageİleriCevirme[1] = true;
        CurrentPAGE = 2;
        void Page2.offsetWidth;
        Page2.style.animation = "TurningPage 3s 0.3s linear";
        Page3Block.classList.remove("DisplayNone");
    }
    else if (!Page3Block.classList.contains("DisplayNone")) {
        Page3.removeAttribute("style");
        PageİleriCevirme[2] = true;
        CurrentPAGE = 3;
        void Page3.offsetWidth;
        Page3.style.animation = "TurningPage 3s 0.3s linear";
        Page4Block.classList.remove("DisplayNone");

    }
    else if (!Page4Block.classList.contains("DisplayNone")) {
        Page4.removeAttribute("style");
        PageİleriCevirme[3] = true;
        CurrentPAGE = 4;
        void Page4.offsetWidth;
        Page4.style.animation = "TurningPage 3s 0.3s linear";
        Page5Block.classList.remove("DisplayNone");
        ButonAktifleme(Sonraki_sayfa_butonu, false);
    }

})
Onceki_sayfa_butonu.addEventListener("click", function e() {

    if (!Page2Block.classList.contains("DisplayNone")) {
        Page1.removeAttribute("style");
        Page2.removeAttribute("style");
        PageGeriCevirme[0] = true;
        CurrentPAGE = 0;
        void Page1.style.offsetWidth;
        Page1.style.animation = "TurningPage 3s 0.3s ease reverse";
        Page1Block.classList.remove("DisplayNone");
        ButonAktifleme(Onceki_sayfa_butonu, false);
    }
    else if (!Page3Block.classList.contains("DisplayNone")) {

        Page2.removeAttribute("style");
        PageGeriCevirme[1] = true;
        CurrentPAGE = 1;
        void Page2.offsetWidth;
        Page2.style.animation = "TurningPage 3s 0.3s ease reverse";
        Page2Block.classList.remove("DisplayNone");
    }
    else if (!Page4Block.classList.contains("DisplayNone")) {

        Page3.removeAttribute("style");
        PageGeriCevirme[2] = true;
        CurrentPAGE = 2;
        void Page3.offsetWidth;
        Page3.style.animation = "TurningPage 3s 0.3s ease reverse";
        Page3Block.classList.remove("DisplayNone");
        ButonAktifleme(Sonraki_sayfa_butonu, true);
    }
    else if (!Page5Block.classList.contains("DisplayNone")) {

        Page4.removeAttribute("style");
        PageGeriCevirme[3] = true;
        CurrentPAGE = 3;
        void Page4.offsetWidth;
        Page4.style.animation = "TurningPage 3s 0.3s ease reverse";
        Page4Block.classList.remove("DisplayNone");
        ButonAktifleme(Sonraki_sayfa_butonu, true);
    }
})
Page1.addEventListener("animationend", function () {
    if (PageİleriCevirme[0]) {
        Page1Block.classList.add("DisplayNone");
        Page2Block.classList.remove("DisplayNone");
        PageİleriCevirme[0] = false;
    }
    if (PageGeriCevirme[0]) {
        Page2Block.classList.add("DisplayNone");
        PageGeriCevirme[0] = false;
    }

});
Page2.addEventListener("animationend", function () {
    if (PageİleriCevirme[1]) {
        Page3Block.classList.remove("DisplayNone");
        Page2Block.classList.add("DisplayNone");
        PageİleriCevirme[1] = false;
        // o sayfa için spesifik olaylar 
        GridAnimationCalıs(true);
    }
    if (PageGeriCevirme[1]) {

        Page3Block.classList.add("DisplayNone");
        PageGeriCevirme[1] = false;
        // o sayfa için spesifik olaylar 
        GridAnimationCalıs(false);
    }

});
Page3.addEventListener("animationend", function () {
    if (PageİleriCevirme[2]) {
        Page4Block.classList.remove("DisplayNone");
        Page3Block.classList.add("DisplayNone");
        PageİleriCevirme[2] = false;
        // o sayfa için spesifik olaylar 
        GridAnimationCalıs(true);
    }
    if (PageGeriCevirme[2]) {

        Page4Block.classList.add("DisplayNone");
        PageGeriCevirme[2] = false;
        // o sayfa için spesifik olaylar 
        GridAnimationCalıs(true);
    }

});
Page4.addEventListener("animationend", function () {
    if (PageİleriCevirme[3]) {
        Page5Block.classList.remove("DisplayNone");
        Page4Block.classList.add("DisplayNone");
        PageİleriCevirme[3] = false;
        // o sayfa için spesifik olaylar 
        SırpResimCall(true);
    }
    if (PageGeriCevirme[3]) {
        Page5Block.classList.add("DisplayNone");
        PageGeriCevirme[3] = false;
        // o sayfa için spesifik olaylar 
        SırpResimCall(false);
    }

});
//ÖNCEKİ SONRAKİ SAYFA AKTİFLEME
function ButonAktifleme(element, aktif) {
    if (aktif) {
        element.setAttribute('tabindex', '0');
        element.parentElement.classList.remove("disabled");
        element.setAttribute('aria-disabled', 'false');
    }
    else {
        element.setAttribute('tabindex', '-1');
        element.parentElement.classList.add("disabled");
        element.setAttribute('aria-disabled', 'true');
    }
}
//BLOK RANDOM GRİD ANİMASYONU 
var GridDocuments = document.querySelectorAll(".GridGorsel");

function GridAnimationCalıs(grid_calısın_mı) {
    if (grid_calısın_mı) {
        grid_calısın_mı = setInterval(animateRandomGrid, 3000);
    }
    else {
        clearInterval(grid_calısın_mı);
        grid_calısın_mı = null;
    }

}
function animateRandomGrid() {
    if (CurrentPAGE === 2) {
        var randomGrid = Math.round(Math.random() * 8);
        GridDocuments.forEach(function (e, i) {
            if (i === randomGrid) {
                e.style.backgroundImage = `url('/PLAYSCRIBE_Frontend/Images/KARADAG${i + 1}.jpg')`;
                e.style.animation = `OpacityToOne 5s ease-in 0.1s 1`;
            }
            e.addEventListener("animationend", function () {
                e.removeAttribute("style");
            });
        });
    }
}


//BLOK GORSEL  ÇAPRAZLAMA

CaprazResimUstu.addEventListener("mouseover", function () {

    if (CaprazResimler[0].style.opacity == 1 && CaprazResimler[3].style.opacity == 1) {
        CaprazResimler[0].classList.add('OpacityZeroCapraz');


        CaprazResimler[3].classList.add('OpacityZeroCapraz');


        CaprazResimler[1].classList.add('OpacityOneCapraz');


        CaprazResimler[2].classList.add('OpacityOneCapraz');

    }
    else if (CaprazResimler[1].style.opacity == 1 && CaprazResimler[2].style.opacity == 1) {

        CaprazResimler[1].classList.add('OpacityZeroCapraz');


        CaprazResimler[2].classList.add('OpacityZeroCapraz');


        CaprazResimler[0].classList.add('OpacityOneCapraz');


        CaprazResimler[3].classList.add('OpacityOneCapraz');
    }

})
CaprazResimler.forEach(e => {
    e.addEventListener("animationend", () => {

        if (e.classList.contains('OpacityOneCapraz')) {
            e.classList.remove('OpacityOneCapraz');
            e.style.opacity = 1;
        }
        else if (e.classList.contains('OpacityZeroCapraz')) {
            e.classList.remove('OpacityZeroCapraz');
            e.style.opacity = 0;
        }
    })
})

// BLOK1 SIRP SENKRONİZE RESİMLER
var SırpResimler = document.querySelectorAll(".SırpSenkroResim");
function SırpResimCall(Sırp_resim_calıssın) {
    if (Sırp_resim_calıssın) {

        var index = 0;
        Sırp_resim_calıssın = setInterval(function () {
            if (index > 3)
                index = 0;

            console.log(index);
            SırpResimSenkro(index);
            index++;
        }, 3000);
    }
    else {
        clearInterval(Sırp_resim_calıssın);
        Sırp_resim_calıssın = null;
    }

}
function SırpResimSenkro(index) {

    SırpResimler[index].style.backgroundImage = `url('/PLAYSCRIBE_Frontend/Images/SIRBISTAN${index + 1}.jpg')`;
    SırpResimler[index].style.animation = "OpacityToOne 5s ease-in 0.1s 1";
    SırpResimler[index].addEventListener("animationend", () => {
        SırpResimler[index].style = "";
    })
}