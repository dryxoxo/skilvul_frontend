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