# crawlingCaleg

calegpedia.id/ --> simulasi surat suara
kpu.go.id --> biodata caleg. Ada motto nya juga

Dipake di console node doang (*10.2.2019*)
Kira-kira cara pakenya:
- Ubah variabel *sumberawal* jadi laman mula/pertama sebelum mulai crawl. Mulai dari google.com bikin dia bingung. 
> Ubah var *katakunci_body* jadi kata kunci di laman, dibawah tag *body*
> Ubah var *katakunci_a* jadi kata kunci di tautan, dibawah tag *a*, sekalian dilanjut crawl kalau punya atribut *href*. Tadinya untuk kata kunci yang udah jadi judul berita.
> Ubah var awalan & akhiran untuk nentuin brp banyak yang mau diambil

Kira-kira cara kerjanya:
1. Ngebaca laman mula
2. Nyari katakunci_body. Kalau nemu yang sesuai, kasih tau console.log sekian huruf sebelum dan setelahnya
3. Nyari katakunci_a. Kalau ada link, masuk, lalu lanjut ke langkah (2)
4. Dimatiin paksa pake [CTRL] + C

> Gak ada kontribusi data. Cuma nyari aja
