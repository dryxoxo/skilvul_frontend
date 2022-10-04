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