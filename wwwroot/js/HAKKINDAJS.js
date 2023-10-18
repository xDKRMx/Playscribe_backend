//ROUTÝNG ÝÞLEMLERÝ VE ONUN VARYANTLARI
background.classList.add('HAKKINDABACK');
//HAKKINDA BÖLÜMÜ JAVASCRÝPT ÝÞLEMLERÝ
var Operation_eronta_links;
var IHSAN_YAZILIM_LINKS;
var LinkedInIhsan;
var FaceIhsan;
var Steam;
var Linkedin;
loadAboutDocuments();
function loadAboutDocuments() {
    Operation_eronta_links = document.querySelectorAll('.operasyon');
    IHSAN_YAZILIM_LINKS = document.querySelectorAll('.Ihsan');
    LinkedInIhsan = document.querySelectorAll(".LinkedInIhsan");
    FaceIhsan = document.querySelectorAll(".FaceIhsan");
    Steam = document.querySelectorAll(".Steam");
    LinkedIn = document.querySelectorAll(".LinkedIn");


    Operation_eronta_links.forEach(element => {
        element.addEventListener('click', () => {
            window.location.href = 'https://store.steampowered.com/app/2267340/Operation__ERONTA/';
        });
    });


    IHSAN_YAZILIM_LINKS.forEach(element => {
        element.addEventListener('click', () => {
            window.location.href = 'https://www.ihsan.com.tr/';
        })
    });

    LinkedInIhsan.forEach(element => {
        element.addEventListener('click', () => {
            window.location.href = 'https://www.linkedin.com/company/ihsan-bilgisayar-yaz%C4%B1l%C4%B1m/about/';
        })
    });

    FaceIhsan.forEach(element => {
        element.addEventListener('click', () => {
            window.location.href = 'https://www.facebook.com/ihsanbilgisayaryazilim/?locale=tr_TR';
        })
    });

    Steam.forEach(element => {
        element.addEventListener('click', () => {
            window.location.href = 'https://steamcommunity.com/profiles/76561199063750411/';
        })
    });

    LinkedIn.forEach(element => {
        element.addEventListener('click', () => {
            window.location.href = 'https://www.linkedin.com/in/kerem-inci-120747262/';
        })
    });

}
