const ekleButonu = document.getElementById("liveToastBtn")
const girilenGorev = document.getElementById("task")
const gorevListeKutusu = document.getElementById("list")
let elemanSilmeButonu = document.querySelectorAll(".fa-times");

ekleButonu.addEventListener("click", elemanEkle);
temizleButonu.addEventListener("click", elemanlariSil);

function elemanEkle() {
 
    
    // Eğer input kısmı null ise uyarı verilmesi
    if (girilenGorev.value == "")      
        alert("lutfen değer giriniz");
    
    // input kısmı null değilse aşağıdaki işlemler yapılır
    else {
        
        
        // li elementini seçerek li değişkenini ata
        var li = document.createElement("li");
        
        // li değişkeninin açıklamasını inputa yazılan yazıya eşitle
        li.innerText = girilenGorev.value
        
        // i elementini seçerek i değişkenine ata
        var i = document.createElement("i");
        
        // i değişkenine class ataması yap
        i.classList = "fas fa-times";
        
        // i değişkenini li değişkenine ekleme
        li.appendChild(i);
 
        // li değişkenini görev listesi kısmına ekleme
        gorevListeKutusu.appendChild(li);
        
        // input 'un value değerini sıfırlama
        girilenGorev.value = "";
        
        // her eleman eklendiğinde, sayfadan "fa-times" class 'ına sahip elementlerin seçilmesi
        // bunu yapmamızın sebebi silme işlemi için gerekli olması
        elemanSilmeButonu = document.querySelectorAll(".fa-times");
 
        // tüm eleman silme butonlarına dinleyici tanımlandı
        for (var i = 0; i < elemanSilmeButonu.length; i++) {
            elemanSilmeButonu[i].addEventListener("click", elemansil);
        }
    }
}
function elemansil() {
    var secim = confirm("Emin Misiniz?");
    if (secim == true) {
        
        // eğer onaylanırsa tıklanan i değişkeninin üst etiketi silinsin
        var silinecek = this.parentElement;
        silinecek.remove();
    }
}