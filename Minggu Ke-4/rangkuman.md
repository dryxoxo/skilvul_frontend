# Minggu Ke-4

## Javascript Promise, Async Await & Fetch
**Senin, 10 Oktober 2022**

### Promise

Secara sederhana promise bisa diartikan sebagai janji. Ya, bisa dianalogikan dengan janji, karena sistem kerjanya selayaknya sebuah janji. apakah janjinya akan terpenuhi, atau tidak.

Promise memiliki tiga kemungkinan state:

1. Pending : Keadaan dimana tidak terpenuhi atau tidak ditolak
1. Fullfiled : janji terpenuhi
1. Rejected : tidak terpenuhi

Cara menggunakan Promise:

```
let nonton = (kondisi) => {
    return new Promise((resolve, reject) => {

        if (kondisi == "jalan") {
            resolve('nonton terpenuhi')
        } else {
            reject('gagal nonton')
        }
    }
```

kode diatas akan membuat sebuah variabel nonton yang menampung sebuah promise yang ketika kondisi terpenuhi maka akan mengembalikan nilai ```nonton terpenuhi``` apabila tidak terpenuhi akan mengembalikan nilai ``` gagal nonton```.

lalu, untuk menghandle sebuah promise bisa menggunakan ```.then``` atau ```async wait```

**.then**
Menggunakan handler then.

```
nonton("jalan")
.then(result => {
    console.log(result);
}).catch(err => {
    console.log(err);
});
```

kita memberikan sebuah argumen kedalam promise, jika argumen tersebut memenuhi kondisi if, maka akan menjalankan ```nonton terpenuhi``` apabila. lalu untuk menghandle kondisi tidak terpenuhi, gunakan ```.catch```.


**async wait**

async await adalah sebuah syntax khusus yang digunakan untuk bekerja dengan promise.

***Important!***

- Async akan mengembalikan sebuah promise
Await

- Await sendiri merupakan fungsi yang hanya berjalan di dalam Async.

cara menghandle promise dengan menggunakan async await:


```
async function nama() {
    try {
        result = await nonton()
        console.log(`ini dari try catch ${result}`);
    } catch (error) {
        console.log(error);
    }
}
```

kode tersebut membuat sebuah ```async``` dengan ```function nama``` yang didalamnya terdapat sebuah ```try```dan ```catch```.

fungsi try akan menangkap sebuah ```resolve```. di dalam ```try``` terdapat variable result yang berisi ```await nonton()``` yang berfungsi untuk menampung isi dari resolve yang berisi ```resolve('nonton terpenuhi')```.

fungsi catch akan menangkap sebuah ```reject``` yang mana akan menjalankan kode dari ```reject('gagal nonton')```

**fetch**
Fetch adalah sebuah promise yang berfungsi untuk meminta data ke server yang nantinya akan dikembalikan dalam format json.

```
fetch('https://digimon-api.vercel.app/api/digimon')
.then(result => result.json())
.then(result => console.log(result))
```

kode diatas akan meminta kode ke api ```https://digimon-api.vercel.app/api/digimon``` lalu untuk melihat result digunakan ```.then``` karena fetch akan mengembalikan menjadi promise. lalu data result akan diubah menjadi json. json akan mengembalikan menjadi promise lagi, maka untuk mengakses datanya gunakan ```.then```.

## Git & Github Advance
**Selasa, 11 Oktober 2022**

Ketika kita ingin melakukan kolaborasi dengan rekan, kita bisa menggunakan github agar source code kita bisa terintegrasi satu sama lain.

Sebelum melakukan kolaborasi, ada beberapa hal yang harus diketahui agar nantinya tidak terjadi konflik ketika bekerja bersama, walau sepertinya aga mustahil kalau tidak terjadi konflik.

Untuk meminamilisir, kita bisa melakukan pemisahan repository. jadi nanti akan terdapat repository main dan juga dev. repositori dev disini berfungsi untuk menampung cabang branch yang dikerjakan oleh rekan rekan. jadi kasarannya, setiap orang akan memiliki branch sendiri sendiri di dalam branch dev, juga sudah selesai mengerjakan, kita bisa melakukan merge ke dev. lalu akan direview pada tahap dev, setelah itu akan dilakukan pull request ke branch main.

Berikut sintaks git yang harus dipahami:


|Sintaks  |Fungsi  |
|---------|---------|
|```git clone```     | Mendownload repositori ke dalam komputer         |
|```git switch dev```     |Berfungsi untuk berpindah repositori         |
|```git pull```     |Berfungsi untuk melakukan update terbaru         |
|``` git branch [nama-branch]```     |Berfungsi untuk membuat branch         |
|```git merge dev```     |untuk melakukan merge ke dalam branch dev         |

## Responsive Web Design Bootstrap 5
**Rabu, 12 Oktober 2022**

Responsif web bertujuan untuk membuat desain website dapat diakses dalam device apapun.

Agar website bisa responsif maka ditambahkan tag seperti dibawah

```
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

```

**Menggunakan Max-Width**
max-width berfungsi untuk mengatur lebar maksimal suatu element.

**Menggunakan Media Query**

```
@media screen and (max-width: 600px) {
  article{
  	background :red !important;
  	
  }
}
```


## Bootstrap

Di dalam bootstrap terdapat sebuah sistem layouting yang sudah disediakan oleh bootstrap dan kita hanya memanggil kelasnya saja.

1. Contianers.
adalah suatu hal yang mendasar yang berisi, melapisi, dan menyelaraskan konten dalam perangkat atau area pandang tertentu. dan diperlukan saat menggunakan sistem grid default.

1. Grid.
Sistem grid Bootstrap menggunakan serangkaian wadah, baris, dan kolom untuk tata letak dan menyelaraskan konten. Itu dibangun dengan flexbox dan sepenuhnya responsif.

1. col.
Kolom dibangun di atas arsitektur flexbox grid. Flexbox berarti kami memiliki opsi untuk mengubah kolom individual dan memodifikasi grup kolom pada tingkat baris . Anda memilih bagaimana kolom tumbuh, menyusut, atau berubah.
