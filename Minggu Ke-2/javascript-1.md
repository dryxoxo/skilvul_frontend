 # Into JAVASCRIPT
 Senin, 26 September 2022

## Pengenalan Javascript
Javascript memiliki peran yang sangat penting di dalam sebuah website. Javascript bisa digunakan untuk membuat fitur beragam seperti drag, drop komponen yang semuanya bisa bermanfaat untuk meningkatkan tampilan (interface) dan pengalaman menggunakan web. 

## Deklarasi javascript
Dalam menerapkan javascript terdapat kamu bisa menggunakan tag ```<script>``` di dalam sebuah body, atau bisa juga dibuat dalam file berekstensi .js.

## Tipe data Javascript
Sama halnya dengan bahasa pemrograman lain, javascript memiliki beberapa jenis tipe data seperti
 Materi javascript kali ini membahas tentang perulangan dan juga fungsi. perulangan memiliki 3 jenis yaitu:


|Tipe Data  |Keterangan  |
|---------|---------|
|String     |tipe data untuk menuliskan sebuah karakter.         |
|Number     |tipe data yang digunakan untuk menunjukan angka, baik positif maupun negatif.         |
|Integer     |ipe data ini lebih digunakan saat akan menggunakan bilangan bulat, baik untuk bilangan negatif atau positif.         |
|Float     |Tipe data ini biasa digunakan saat akan menggunakan angka yang merupakan bilangan desimal          |
|Boolean |tipe data yang hanya akan membuat dua nilai yaitu true atau false |
|Objek|tipe data yang memungkinkan anda menggunakan tipe data lain di dalamnya.|
|Array|tipe data yang digunakan untuk menyimpan banyak nilai pada satu variabel.|

 
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

# JS Scope & Function
Selasa, 27 September 2022

## Scope
Scope dalam JavaScript adalah konsep yang digunakan untuk membatasi pengaksesan suatu variabel. Ada dua tipe scope yaitu lokal dan global. Global variables adalah variabel yang dideklarasikan di luar blok. Local variables adalah variabel yang dideklarasikan di dalam suatu blok bisa berupa function-scoped atau block-scoped.

Sebagai contoh lihat kode dibawah
```
for (let i = 0; i < 10; i++) {
  console.log(i);
  console.log(i ** 2);
}
```
kita hanya bisa mengakses variabel i hanya ketika berada di dalam perulangan, ketika kita mendeklarasikan i diluar perulangan, maka hasilnya akan eror.

## Fungsi
Fungsi adalah sub-program yang bisa digunakan kembali baik di dalam program itu sendiri, maupun di program yang lain. lalu bagaimana cara membuat fungsi?

**Fungsi Klasik**
```
function greetings(){
    console.log("Hello World!");
}

greetings() //output "Hello World!"
```

**Fungsi Ekspressi**

Fungsi Ekspresi sangat mirip dengan fungsi klasik dan memiliki sintaks yang hampir sama dengan deklarasi fungsi . Perbedaan utama antara ekspresi fungsi dan deklarasi fungsi adalah nama fungsi, yang dapat dihilangkan dalam ekspresi fungsi untuk membuat fungsi anonim. Fungsi ekspresi ini juga tidak mendukung hoisted, yang mana tidak bisa digunakan sebelum fungsi itu dibuat.

```
var greetings = function(){
    console.log("Hello World!");
}

greetings() //output "Hello World!"
```

**Arrow Function**
Sebuah Arrow Function merupakan versi simpel bagaimana cara membuat sebuah function, tapi arrow function terbatas dan tidak bisa digunakan di semua situasi. ada beberapa perbedaan antara arrow function dengan tradisional function.

1. Arrow function tidak memiliki **this**, **arguments**, atau **super** dan tidak seharusnya dijadikan sebuah methods
2. Arrow Function tidak memiliki akses ke **new.target**
3. Arrow Function tidak bisa digunakan sebagai konstruktor
```
var greetings = () => {
    console.log("Hello World!");
}
```
## Data Type Built in Prototype & Method
Rabu, 28 September 2022

Setiap tipe data memiliki beberapa properties dan methods.
String memiliki beberapa method sebagai berikut

```
variabel.length
variabel.slice(start, end)
variabel.substring(start, end)
variabel.substr(start, length)
variabel.slice()
```

Number Methode

```
variabel.toString()
variabel.toExponential()
variabel.toFixed()
variabel.toPrecision()
```

lalu mempelajari tentang built.in math pada javascript yang bekerja pada tipe data number

## DOM Traversal & Manipulation

DOM JavaScript adalah interface yang memungkinkan developer memanipulasi halaman web dari segi struktur, tampilan, dan kontennya.

### DOM Traversal

Dalam navigasi suatu DOM, bisa digunakan beberapa query sebagai berikut:

**Get Element By Id**

```getElementById()``` akan melakukan return sebagai sebuah elemen object yang merepresentasikan elemen yang memiliki id tersebut. Jika element tidak ditemukan maka akan mengembalikan ```null```

```
document.getElementById('paragraf')
```

output

```
<p id="paragraf">Contoh paragraf</p>
```

**Get Element By Class Name**

```getElementsByClassName()``` akan melakukan return menjadi sebuah object nodelist berdasarkan nama dari class.

```
document.getElementsByClassName('paragraf')
```

output
```
[p.paragraf]
```

**Get Element By Querry Selector**

```querySelector()``` metode ini akan mengembalikan nilai berupa elemen pertama yang cocok berdasarkan argumen yang diberikan

```
document.querySelector('#paragraf')
```

Output
```
<p id="paragraf">Contoh paragraf</p>
```

### DOM Manipulation

**Node Manipulation**
Disini akan melakukan manipulasi dari list yang sudah ada pada file html

Source Code HTML

```
<ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
</ul>
```

```
let ul = document.getElementsByTagName('ul')[0]

const liBaru = document.createElement('li')

const liTeks = document.createTextNode( `Item baru ${angka}` )

liBaru.appendChild(liTeks)

ul.appendChild(liBaru)
```

Maka jika dijalankan, akan ada output baru seperti dibawah.

```
<ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
    <li>Item Baru 1</li>
</ul>
```
### DOM Events
Pada Javascript, Event adalah kejadian yang terjadi di halaman web. Kejadian yang dimaksud di sini seperti aktivitas yang dikerjakan pada halaman web.

Penggunaan DOM Events biasanya menggunakan event handler atau ```addEventListener()```

**Event Handler**

contoh penggunaan untuk events handler adalah sebagai berikut

```
<button onclick="greetings()> Klik Disini </button>
```
dengan kode Javascript

```
function greetings(){
    console.log("Hello World!");
}
```

**Add Event Listener**

Contoh penggunaan untuk addEventListener()

```
buttonTambah.addEventListener('click', function(){
    angka += 1
    let ul = document.getElementsByTagName('ul')[0]
    const liBaru = document.createElement('li')
    const liTeks = document.createTextNode( `Item baru ${angka}` )
    liBaru.appendChild(liTeks)
    ul.appendChild(liBaru)
})
```

Source Code HTML

```
<ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
</ul>
<button>Tambah List</button>
```
Maka hasil outputnya, apabila tombol diklik, maka akan menambahkan sebuah list baru.
