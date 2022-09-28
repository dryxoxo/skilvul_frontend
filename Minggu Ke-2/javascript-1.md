 # JAVASCRIPT
 Senin, 26 September 2022
 
 Materi javascript kali ini membahas tentang perulangan dan juga fungsi. perulangan memiliki 3 jenis yaitu:
 
 ## Perulangan
 **Perulangan FOR**
 sintaks perulangan for bisa dilihat pada baris dibawah
 ```
for(inisialisasi; kondisi; eksekusi iterasi) {
     // bkode yang akan dijalankan
}
```

Inisialisasi adalah saat pertama kali kita mendeklarasi sebuah nilai awal, dimana nilai awal akan berubah selama belum memenuhi syarat kondisi.
Kondisi berfungsi untuk mengecek perubahan yang terjadi setiap kali terjadi eksekusi iterasi perulangan dengan menggunakan operator perbandingan.
Eksekusi Iterasi proses akhir setiap kali terjadi eksekusi iterasi, biasanya digunakan untuk proses penambahan (increment) atau pengurangan (decrement).

contoh
 ```
for (let i = 0; i < 5; i++) {
    console.log("ini adalah perulangan ke" + i)
}
```

maka output yang akan ditampilkan

 ```
 ini adalah perulangan ke 0
 ini adalah perulangan ke 1
 ini adalah perulangan ke 2
 ini adalah perulangan ke 3
 ini adalah perulangan ke 4
 ```

**perulangan while**
perulangan while digunakan apabila kita ingin melakukan perulangan tetapi kita tidak mengetahui jumlah perulangan yang ingin dilakukan. sintak dari perulangan while bisa diliat dibawah ini:

```
while(kondisi) {
     // blok kode
     //eksekusi iterasi
}
```

Pada fungsinya, while hanya memberikan opsi kondisi, tidak seperti for mengharuskan mendeskripsikan kebutuhan terlebih dahulu.

```
let i = 1
let kondisi = false

while(!kondisi){
if(i%2 === 0 &&
   i%3 === 0)
   console.log(i);
   kondisi = true;
}
```

kode ini akan melakukan perulangan sesuai kondisi. apabila perulangan sudah menemukan bilangan berapa yang habis dibagi 2 dan habis dibagi tiga, maka outputnya akan ditampilkan pada console dan perulangan akan berhenti.

## Fungsi

Fungsi JavaScript adalah blok kode yang dirancang untuk melakukan tugas tertentu . Fungsi JavaScript akan dijalankan ketika kita memanggil fungsi tersebut di dalam program. pada praktiknya, fungsi memiliki 3 cara pendeklarasian.

**Fungsi Klasik**
Fungsi yang dideklarasikan tidak langsung dijalankan. Fungsi akan”disimpan untuk digunakan nanti”, dan akan dijalankan nanti, ketika dipanggil (dipanggil). sintak bisa dilihat pada baris dibawah:

```
function namaFungsi(parameters) {
  // code yang akan dieksekusi
}
```

contoh penerapannya adalah

```
function cari(angka) {
    for (let i = 0; i < 100; i++){
        if(i === angka){
            console.log("Ketemu" + i);
        }
    }
}
```

function tersebut memiliki parameter angka yang nantinya user bisa memasukan argumen kedalamnya.

**Fungsi Ekspressi**
Perbedaan antara fungsi ekspresi dengan fungsi klasik adalah fungsi ekspresi dibuat di dalam sebuah variabel dan tidak bisa hoisting. contoh strukturnya adalah dibawah:
```
let variabel = function (parameters) {
  // code yang akan dieksekusi
}
```

lalu contoh penerapanya adalah:
```
let cariLuas = function(tinggi, lebar) {
    return width * height;
};

cariLuas(3, 4); //outputnya adalah 12
```

**Arrow Function**
arrow function adalah fungsi yang dideklarasikan dengan tanda arrow(panah) "=>" tanpa menggunakan kata kunci "function" dalam syntax seperti cara penulisan fungsi sebelum ES6 rilis(ES 5 kebawah) yang kini juga disebut traditional function. strukturnya bisa diliat dibawah:
```
let variabel = (parameter) => //eksekusi kode
```

contoh penerapannya adalah:
```
let myFunction = (a, b) => a * b;
myFunction(4, 5); //output 20

```