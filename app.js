// Butonu ve geçmiş listesini HTML'den seçiyoruz
const olusturBtn = document.getElementById('olusturBtn');
const gecmisListe = document.getElementById('gecmisListe');

// Sayfa ilk yüklendiğinde hafızadaki (localStorage) geçmişi getir
document.addEventListener('DOMContentLoaded', gecmisleriYukle);

// "Şablonu Oluştur Ve Kopyala" butonuna tıklandığında çalışacak işlemler
olusturBtn.addEventListener('click', () => {
    // Metin kutularına girilen yazıları alıyoruz
    const baglam = document.getElementById('baglam').value;
    const amac = document.getElementById('amac').value;
    const sinirlar = document.getElementById('sinirlar').value;
    const cikti = document.getElementById('cikti').value;

    // Eğer kutular boşsa uyarı ver
    if(!baglam || !amac) {
        alert("Lütfen en azından Bağlam ve Amaç alanlarını doldur!");
        return;
    }

    // Girilen değerleri alt alta, düzenli bir prompt metni haline getiriyoruz
    const olusturulanPrompt = `Bağlam: ${baglam}\nAmaç: ${amac}\nSınırlar: ${sinirlar}\nBeklenen Çıktı: ${cikti}`;

    // Metni panoya (kopyala-yapıştır hafızasına) kopyala
    navigator.clipboard.writeText(olusturulanPrompt).then(() => {
        alert("Prompt başarıyla oluşturuldu ve kopyalandı!");
        
        // Metni tarayıcı hafızasına (localStorage) kaydet
        promptuKaydet(olusturulanPrompt);
        
        // İşlem bitince kutuların içini temizle
        document.getElementById('baglam').value = '';
        document.getElementById('amac').value = '';
        document.getElementById('sinirlar').value = '';
        document.getElementById('cikti').value = '';
    }).catch(err => {
        alert("Kopyalama sırasında bir hata oluştu.");
    });
});

// LocalStorage'a kaydetme fonksiyonu
function promptuKaydet(metin) {
    // Hafızada daha önceden kaydedilmiş verileri kontrol et
    let gecmis = localStorage.getItem('promptGecmisi');
    
    if (gecmis === null) {
        gecmis = []; // Eğer hiç kayıt yoksa boş bir dizi oluştur
    } else {
        gecmis = JSON.parse(gecmis); // Varsa veriyi okunabilir hale getir
    }

    // Yeni promptu listenin en başına ekle
    gecmis.unshift(metin); 
    
    // Sağ menü çok dolmasın diye sadece son 5 kaydı tutalım
    if(gecmis.length > 5) {
        gecmis.pop(); // 5'ten fazlaysa en eskisini sil
    }

    // Güncellenmiş listeyi tekrar localStorage'a kaydet
    localStorage.setItem('promptGecmisi', JSON.stringify(gecmis));
    
    // Sağ taraftaki menüyü güncelle
    gecmisleriYukle(); 
}

// Geçmişi sağ menüye (ekrana) yazdırma fonksiyonu
function gecmisleriYukle() {
    let gecmis = localStorage.getItem('promptGecmisi');
    
    // Geçmiş boşsa varsayılan metni göster
    if (gecmis === null || JSON.parse(gecmis).length === 0) {
        gecmisListe.innerHTML = '<p class="empty-text">Henüz kaydedilmiş bir prompt yok.</p>';
        return;
    }

    gecmis = JSON.parse(gecmis);
    gecmisListe.innerHTML = ''; // İçeriği temizle ki üst üste binmesin

    // Hafızadaki her bir kayıt için sağ menüde yeni bir kutucuk oluştur
    gecmis.forEach((item) => {
        const gecmisKutusu = document.createElement('div');
        
        // Kutuya CSS özellikleri veriyoruz
        gecmisKutusu.style.backgroundColor = '#1a1d2d';
        gecmisKutusu.style.padding = '12px';
        gecmisKutusu.style.borderRadius = '6px';
        gecmisKutusu.style.border = '1px solid #2a2e40';
        gecmisKutusu.style.color = '#a0a4b8';
        gecmisKutusu.style.fontSize = '12px';
        gecmisKutusu.style.cursor = 'pointer';
        gecmisKutusu.style.marginBottom = '10px';
        
        // Metin çok uzunsa sadece ilk 35 karakterini gösterip sonuna üç nokta ekle
        gecmisKutusu.innerText = item.substring(0, 35) + '...';
        
        // Kullanıcı geçmişteki öğeye tıklarsa onu tekrar kopyalasın
        gecmisKutusu.addEventListener('click', () => {
            navigator.clipboard.writeText(item);
            alert("Geçmişteki prompt tekrar kopyalandı!");
        });

        gecmisListe.appendChild(gecmisKutusu);
    });
}