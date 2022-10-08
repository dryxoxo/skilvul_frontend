# Javascript Intermediate

## Array & Multidemnsi Array
Senin, 3 September 2022

### Intro Array

**Definisi Array**

Array adalah tipe data list order yang dapat menyimpan tipe data apapun di dalamnya. Array dapat menyimpan tipe data String, Number, Boolean, dan lainnya.

Contoh Array dengan berbagai tipe data:

```
let dataKu = [10, 19, true, "Baim"]
```

Bagaimana cara mengakses nilai 19 di dalam array tersebut? perhatikan bahwa angka 19 berada diindex ke-1. perlu kita ketahui, bahwa index array dimulai dari 0.

```
console.log(dataKu[1]) //output 19
```

**Update Array**

Kita bisa melakukan update pada array, misal ketika kita ingin mengganti value "Baim" di dalam dataku, kita cukup menggunakan sintaks dibawah:

```
dataKu[3] = "Amelia"
```

### Array Method

Array memiliki method atau biasa disebut built-in methods. Artinya Javascript sudah memudahkan kita dengan menyediakan function/method umum yang bisa kita gunakan. Berikut beberapa array method yang biasa digunakan.

**.push()**

Push merupakan method untuk menambahkan array dipaling akhir



```
let dataKu = [10, 19, true, "Baim"]
dataKu.push('Teknik Informatika')

//Output [10, 19, true, "Baim", 'Teknik Informatika']
```


**.pop()**

Pop akan menghapus element paling akhir

```
let dataKu = [10, 19, true, "Baim"]
dataKu.pop()

//Output [10, 19, true]
```

**.shift()**

shift() akan menghapus index pertama

```
let dataKu = [10, 19, true, "Baim"]
dataKu.shift()

//Output [19, true, "Baim"]
```

**.unshift()**

.unshift() akan menambahkan value pada index pertama

```
let dataKu = [10, 19, true, "Baim"]
dataKu.unshift('22')

//Output [22, 10, 19, true, "Baim"]
```

**.sort()**

.sort() akan mengurutkan element di dalam array

```
let angka = [12, 10, 15, 17]
angka.sort()

//output [10, 12, 15, 17]
```

###Looping Array

Array memiliki built in methods untuk melakukan looping yaitu ```.map()``` dan ```.forEach()```. sebelum menggunakan looping, kita harus tau terlebih dahulu ingin menggunakan ```.map()``` atau ```.forEach()```.

Gunakan ```.forEach()``` jika hanya memerlukan looping untuk menampilkan saja atau menyimpan ke database.

```
let angka = [1, 2, 3, 4, 5]
angka.forEach((element) => {
    console.log(element)
})

//output 1, 2, 3, 4, 5
```

Gunakan ```.map()``` jika akan melakukan operasi pada array seperti yang dapat mengubah nilai array sebelumnya.


```
let angka = [1, 2, 3, 4, 5]
let kaliDua = angka.map((element) => {
    return element * 2
})

console.log(kaliDua)
//output 2, 4, 6, 8, 10
```

## Javascript Object

**Definisi Object**

Object adalah sebuah tipe data pada variabel yang menyimpan properti dan fungsi (method). Sebagai contoh: dalam kehidupan nyata, mobil adalah objek. mobil memiliki properti seperti warna dan nama, serta metode seperti mengemudi. Semua mobil memiliki sifat yang sama, namun nilainya berbeda untuk setiap mobil. Selain itu, semua mobil memiliki metode yang sama, tetapi dapat dijalankan pada waktu yang berbeda.

Objek dalam Javascript

```
var siswa = {
  nama: "Baim", 
  umur: 22,
  "Jenis Kelamin": "Laki - Laki"
};
```

lalu bagaimana cara memanggil variabel dengan menggunakan properti?

kita bisa menggunakan dot notation

```
console.log(siswa.nama) /// 'Baim'
```

atau bisa juga menggunakan bracket notation

```
console.log(siswa["Jenis Kelamin"]) /// 'Laki - Laki'
```

**Update Objek**

Kita juga bisa mengupdate value dari sebuah objek dengan cara dibawah
```
siswa.umur = 23
```
perlu diingat, bahwa ketika ingin melakukan manipulasi, buatlah variable objek dengan menggunakan let, bukan const

**Hapus Objek Properti**
kita bisa melakukan penghapusan dengan menggunakan delete

```
delete siswa["Jenis Kelamin"]

//output
{
  nama: "Baim", 
  umur: 22,
};
```

**Method Pada Objek**
Kita bisa membuat method custom untuk kita gunakan pada aplikasi kita.

```
let salam = {
    datang: function(){
        return 'halo selamat datang'
    },
    afterPay: function(){
        return 'terimakasih sudah membeli'
    }
}

console.log(salam.datang()) // 'halo selamat datang'
```

**Nested Objek**
Dalam dunia nyata, nantinya kita akan menemukan objek bersarang seperti dibawah:

```
let berita = {
    judul: 'Peserta dianggap sudah tidak kuat',
    deskripsi: 'Dianggap sudah tidak kuat, peserta ini malah turu',
    penulis: {
        people:{
            nama: 'Baim',
            usia: 22,
            kota: 'Bandung'
        }
    }
}
```

lalu bagaimana ketika ingin mengakses nama penulis? caranya mudah.

```
console.log(berita.penulis.people.nama) // 'baim'
```

### Looping Object

Ketika kita ingin menampilkan seluruh data, kita bisa menggunakan looping, jadi kita tidak perlu memanggilnya secara manual satu persatu.

caranya bisa dilihat pada kode dibawah:

```
let berita = {
    judul: 'Peserta dianggap sudah tidak kuat',
    deskripsi: 'Dianggap sudah tidak kuat, peserta ini malah turu',
    penulis: {
        people:{
            nama: 'Baim',
            usia: 22,
            kota: 'Bandung'
        }
    }
}

for(let key in berita){
    console.log(berita[key])
}

for(let author in berita.penulis.people){
    console.log(berita.penulis.people[author])
}
```

### Array Object

object bisa menyimpan lebih dari satu data, dan kita bisa menyimpan kumpulan object di dalam array.

```
let siswa = [
    {
        name: 'Baim',
        age: 25,
        jurusan: 'Informatika'
    },
    
    {
        name: 'Andin',
        age: 21,
        jurusan: 'Logistik'
    }

    {
        name: 'Brian',
        age: 23,
        jurusan: 'Informatika'
    }
]

siswa.foreach((listStudent) =>{
    console.log(listStudent)
})
```

## Rekursif

Rekursif adalah sebuah function yang memanggil dirinya sendiri sampai kondisi tertentu. fungsi rekursif biasanya sering digunakan untuk case matematika dan yang berhubungan dengan perhitungan. contohnya adalah seperti dibawah

```
function rekursif(){
    if(condition){
        //akan berhenti apabila kondisi terpenuhi
    } else {
        rekursif()
    }
    rekursif()
}
```

Fungsi rekursif selalu memiliki kondisi yang menyatakan kapan fungsi tersebut berhenti dan memanggil dirinya sendiri sambil mengurangi atau memecahkan data masukan setiap panggilannya.

## Asyncronus

JavaScript termasuk ke dalam single-thread language atau synchronous yang artinya hanya dapat mengeksekusi satu perintah pada satu waktu dan harus menunggu satu perintah tersebut selesai sebelum melanjutkan perintah selanjutnya.

Pada dasarnya, javascript merupakan bahasa yang mengeksekusi secara berurutan dari atas ke bawah layaknya sebuah antrian atau biasa disebut synchronous.

Namun hal ini bisa menjadi masalah jika terdapat code yang eksekusinya membutuhkan waktu yang lama, seperti code untuk mendownload data dari server.

Pada konsep asynchronous, code akan dieksekusi tanpa menunggu eksekusi code lain selesai sehingga seakan-akan dieksekusi secara bersamaan.

Lalu, bagaimana cara membuat asinkronus? bisa menggunakan ``` setTimeout(function, milliseconds)``` atau ```setInterval(function, milliseconds) ```
Ada 3 teknik yang digunakan untuk menghandle proses asynchronous pada JavaScript:

1. Callback
2. Promise
3. Async Await

**Callback**

Callback adalah function yang menjadi argument untuk function lain dan akan dieksekusi pada poin tertentu, bisa jadi saat ini atau nanti.

```
const notify = () => {
  console.log('Download complete!');
};
const download = (url, callback) => {
  console.log(`Downloading from ${url}....`);
  callback();
};
const url = 'https://brachio.site/download';
download(url, notify);
``` 

**Promise**

Promise bisa dikatakan sebagai object yang menyimpan hasil dari sebuah operasi asynchronous baik itu hasil yang diinginkan (resolved value) atau alasan kenapa operasi itu gagal (failure reason).

- pending, operasi sedang berlangsung
- fulfilled, operasi selesai dan berhasil
- rejected, operasi selesai namun gagal

contoh kode promise:

``` 
let progress = 100;
const download = new Promise((resolve, reject) => {
  if (progress === 100) {
    resolve('Download complete');
  } else {
    reject('Download failed');
  }
});
``` 

lalu untuk menangkap atau melakukan handler

``` 
download
  .then((result) => {
    console.log(result); // Download complete
  })
  .catch((error) => {
    console.log(error); // Download failed atau tidak ditampilkan jika tidak ada error
  });
``` 

**async Await**
Async/Await diperkenalkan di ES8 / ES2017 untuk menghandle operasi asynchronous dengan syntax yang lebih mirip dengan synchronous.
``` 
const getStatus = (url) => {
  console.log(`Downloading from ${url}...`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Download Complete');
    }, 3000);
  });
};

async function download(url) {
  let status = await getStatus(url); // tunggu sampai promise selesai
  console.log(status);
}

const url = 'https://brachio.site/download';

download(url);
``` 

## Web Storage

**cookies**

Cookies adalah data kecil yang dikirim dari situs web dan disimpan di komputer kita oleh web browser saat kita menjelajah. Disebut data kecil karena maksimum data yang dapat disimpan dalam cookies adalah 4096 bytes (4 KB).

**local storage**

LocalStorage adalah tempat penyimpanan data di browser. Penyimpanan ini memungkinkan aplikasi web atau aplikasi javascript menyimpan data secara lokal tanpa terhubung ke internet. Localstorage dapat menyimpan data secara permanent, jadi sangat berbeda dengan session yang datanya akan hilang saat jendela browser ditutup.

untuk menyimpan kedalam local storage:


```
localStorage.setItem('key', value);
```

contoh penggunaan:
index.html

```

<input type="number" class="form-control" id="tinggiBadan">
```

script.js

```
let dataTinggi = []
function hitungBMI(event){
    event.preventDefault();
    let tinggiBadan = document.getElementById('tinggiBadan').value;
    
    dataTinggi.push(tinggiBadan)
    let dataTinggiString = JSON.stringify(dataTinggi)
    localStorage.setItem('tinggiKey', dataTinggiString)
```
maka hasilnya akan terdapat key ```tinggiKey``` dengan value tinggiBadan.

**Session Storage**
SessionStorage menyimpan data secara sementara, data akan menghilang saat tab ditutup atau browser ditutup. Metode dalam sessionStorage sama halnya dengan localStorage,

```
let dataObject = {
    nickname : 'Budi',
    game : 'PUBG',
    weapon : "UZi"
  }
  let str = JSON.stringify(data)
  window.sessionStorage.setItem("data_object", str)
  
  let dataArray = ["sapi", "kambing", "kelinci"];
  let str2 = JSON.stringify(data)
  window.sessionStorage.setItem("data_object", str2)
```