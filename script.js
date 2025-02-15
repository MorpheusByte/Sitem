document.addEventListener("DOMContentLoaded", function () {
    /*** 📌 MENÜ ÖĞELERİ SIRAYLA GÖRÜNSÜN ***/
    const menuItems = document.querySelectorAll(".menu ul li");

    menuItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = "1"; // Görünür yap
            item.style.transform = "translateY(0)"; // Aşağı kaydır
        }, index * 500); // Gecikmeyi artırarak sırayla göster
    });

    /*** 🎥 TEKNOLOJİ YAZILARI SAĞDAN SOLA KESİNTİSİZ KAYSIN ***/
    const slider = document.querySelector(".slider");

    // Sonsuz kaydırma efekti için içeriği iki kez kopyalıyoruz
    const clone = slider.innerHTML;
    slider.innerHTML += clone;
});
