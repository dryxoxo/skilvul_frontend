# Rangkuman Minggu ke-6
**React JS Dasar**

## Introducing & Hands On React
**24 Oktober 2022**

### Tutorial Instalasi
ReactJs merupakan sebuah framework yang memudahkan pengguna dalam melakukan pembuatan website di sisi client dengan menggunakan Javascript.

Untuk melakukan instalasi react, pertama harus dilakukan instalasii NodeJS terlebih dahulu. Disini menggunakan node JS versi ```18.12.0 LTS```.

Langkah berikutnya adalah instalasi react. kita hanya perlu ke terminal dan mengetik command ```npx create-react-app my-app``` tunggu beberapa saat untuk melakukan instalasi react. jika sudah selesai maka kita masuk ke directori dengan cara ```cd my-app``` lalu untuk menjalankan react menggunakan ```npm start``` maka akan secara otomatis akan meredirect ke halaman localhost.

### Struktur Folder React

Di dalam paket instalasi react terdapat struktur folder. pada struktur folder ```node_modules``` berisi paket module nodejs yang diinstal. lalu ada ```public``` yang mana berisi file untuk publik seperti HTML, css, icon, gambar dan sebagainya.

Di dalam folder ```src``` berisi kode dari aplikasi reactjs dimana nantinya kita akan membuat komponen disini.

## React Component
**25-26 Oktober 2022**

Component adalah salah satu core dari react js. component dapat membagi ui dalam satuan-satuan kecil. artinya dalam 1 page ada beberapa component yang bisa kita buta dan dipakai dipage lainnya. component hanya dibuat jika component tersebut bersifat reusable

ada beberapa metode dalam membuat sebuah komponen, yaitu dengan menggunakan function maupun menggunakan class. tetapi kebanyakan dokumentasi resmi menggunakan function.

bagaimana cara membuat sebuah komponen? pertama buatlah folder ```conponents``` didalam folder ```src``` lalu buatlah sebuah file dengan nama ```List.jsx``` perlu diketahui bahwa dalam pembuatan sebuah komponen nama file dan function harus didahului dengan menggunakan kapital. lalu untuk styling bisa menggunakan internal, maupun eksternal.

lalu di dalam file List.jsx buatlah function List seperti dibawah:

```javascript
const List = () => {
    return(
    <div>
        <ul>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
    </div>
)
}

export default List;
```

perlu diingat bahwa List harus diexport untuk digunakan di jsx lain. lalu pergi ke app.jsx, ```import List from "./components/List/List"``` setelah itu untuk memanggil komponen, gunakan ```<List />```

lakukan langkah yang sama untuk membuat sebuah komponen.

Bagaimana cara membuat komponen menjadi dinamis? gunakan props dan state

### Props dan State
Props adalah argumen yang diteruskan ke komponen React. Props diteruskan ke komponen melalui atribut HTML. Kemudian apa yang bisa di passing atau dikirim dalam props? Yang bisa dikirim dalam props bisa berupa data, variables, state function dan bahkan sebuah kelas State adalah sebuah object untuk menyimpan data pada React dan akan di render atau muat ulang ketika data mengalami perubahan.

kita akan menambahkan props pada file List.jsx

```javascript
const List = ({list1, list2, list3}) => {
    return(
    <div>
        <ul>
          <li>{list1}</li>
          <li>{list2}</li>
          <li>{list3}</li>
        </ul>
    </div>
)
}
```

lalu bagaimana untuk state?

```javascript
let list1 = "List ke 1"
let list2 = "List Ke 2"
let list3 = "List Ke 3"

const List = () => {
    return(
    <div>
        <ul>
          <li>{list1}</li>
          <li>{list2}</li>
          <li>{list3}</li>
        </ul>
    </div>
)
}
```

nah pada kode pertama merupakan stateless, karena tidak ada variabel yang menampung nilai di dalamnya, pada kode ke dua merupakan statefull karena terdapat variabel untuk menampung data.

## React Hooks
**27 Oktober 2022**

Hooks merupakan fitur baru di React 16.8. Fitur ini memungkinkan Anda menggunakan state dan fitur React lainnya tanpa menuliskan sebuah kelas.

Hooks yang sering digunakan, adalah useState, dan useEffect, duah hal ini sama dengan state dan lifecycle di class yang biasa digunakan.

### useState
useState di panggil dalam function component untuk menambahkan suatu state lokal. React akan menyimpan state antar render. useState memberikan dua hal: nilai state saat ini dan fungsi untuk memperbarui nilai tersebut. Anda dapat memanggil fungsi ini dari sebuah event handler atau dimanapun.

```javascript
import React, { useState } from 'react';

function Example() {

  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Anda menekan sebanyak {count} kali</p>
      <button onClick={() => setCount(count + 1)}>
        Klik saya
      </button>
    </div>
  );
}
```

pada kode tersebut terdapat variabel count dan setcount dengan nilai 0 pada useState, jika tombol tersebut ditekan maka nilai count akan berubah seiring tombol ditekan dengan menggunakan setCount. namun apabila variabel tidak mempunyai useSTate maka variabel count tidak akan berubah.

### useEffect
React hooks useEffect digunakan untuk menambahkan side effect ke function komponen. Penggunaan useEffect mirip dengan lifecycle method seperti componentDidMount, componentDidUpdate, dan componentWillMount di class component.

```javascript
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

useEffect akan dilakukan eksekusi apabila return telah dieksekusi. jadi jika tidak ada triger yang memicu, maka useEffect tidak akan berjalan. sedangkan pada potongan kode diatas, useEffect akan berjalan apabila button ditekan. Dalam beberapa kasus, Pembersihan atau penerapan effect setelah setiap render memungkinkan dapat menimbulkan masalah pada performa. Dalam class components, kita dapat menyelesaikan ini dengan menulis perbandingan ekstra dengan prevProps atau prevState di dalam componentDidUpdate:

```javascript
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]);
```

Ketika kita me-render dengan count diperbarui ke 6, React akan membandingkan item di dalam [5] array dari render sebelumnya kepada item di dalam [6] array dari render sesudahnya. Kali ini, React akan menerapkan kembali effect karena 5 !== 6. jika ada beberapa item di dalam array, React akan menjalankan kembali effect bahkan jika hanya salah satu dari mereka yang berbeda.

## Styling React dengan Bootstrap

Untuk melakukan styling dengan menggunakan react bisa melakukan instalasi bootstrap pada terminal yaitu dengan cara:

``` npm install bootstrap```

lalu masukkan kode di bawah pada app.jsx

```import 'bootstrap/dist/css/bootstrap.min.css';```

setelah itu bisa dilakukan styling dengan menggunaka bootstrap