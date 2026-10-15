# web-projesi

# Prompt Mimarisi (PromptArch) 🧠

## 📌 Prompt Nedir?
Prompt, bağlama göre "komut", "yönlendirme", "ipucu" veya "hızlı/ivedi" anlamlarına gelen, özellikle günümüzde yapay zekâ dünyasında sıkça kullanılan bir kavramdır.

## ⚠️ Problemin Tanımı
Geliştiriciler ve öğrenciler, yapay zeka araçlarını kullanırken genellikle bağlamı eksik, sınırları belirsiz ve amacı net olmayan kısa sorular (promptlar) yazmaktadır. Bu durum, yapay zekanın halüsinasyon görmesine veya işe yaramaz genel geçer kodlar/cevaplar üretmesine neden olmaktadır. Ayrıca, tesadüfen bulunan veya iyi çalışan prompt şablonları genellikle kaybedilmekte, tekrar ihtiyaç duyulduğunda sıfırdan yazılmak zorunda kalınmaktadır.

## 💡 Çözüm Önerisi ve Uygulama Fikri
Bu problemi çözmek için, kullanıcıları doğru ve yapılandırılmış sorular sormaya yönlendiren bir "Prompt Mühendisliği Şablon Arşivi" geliştirmeyi planlıyorum. Uygulama arayüzü, kullanıcının talebini 4 ana bloğa bölecektir:

1. **Bağlam:** (Örn: "Ön lisans öğrencisiyim...")
2. **Amaç:** (Örn: "Görev takip uygulaması yapmak istiyorum...")
3. **Sınırlar:** (Örn: "Backend yok, sadece localStorage...")
4. **Beklenen Çıktı:** (Örn: "Bana MVP özellikleri öner...")

Kullanıcı bu kutuları doldurduğunda sistem bu verileri birleştirerek mükemmel promptu oluşturacak ve panoya kopyalamaya hazır hale getirecektir. En iyi promptlar localStorage kullanılarak tarayıcı hafızasına kaydedilecek ve ilerleyen haftalarda etiketleme/kategorizasyon gibi özelliklerle zenginleştirilmiş bir "Favori Promptlar Arşivi"ne dönüşecektir. Bu sayede 14 hafta boyunca modüler olarak üzerine yeni özellikler eklenebilecektir.

## 🛠️ Kullanılacak Teknolojiler
* HTML
* CSS
* JavaScript 
* *(Backend yok, sadece localStorage kullanılacaktır.)*
