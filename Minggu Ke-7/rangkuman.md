# Rangkuman minggu ke 7

**React JS Lanjutan**

## React Proptypes

**31 Oktober 2022**

Proptypes adalah salah satu modul dari javascript yang mampu melakukan validasi pada suatu tipe data yang nantinya akan dikirim dan valid. sebagai contoh ketika kita mengirimkan data bertipe integer ke sebuah props, akan tetapi data yang dikirimkan bertipe string, maka nantinya akan muncul peringatan di konsol javascript.

instalasi proptypes:

```Javascript
npm install prop-types
```

Untuk melakukan validasi, bisa gunakan contoh kode seperti dibawah

```Javascript
StudentInfo.propTypes = {
  name: PropTypyes.string,
  age: PropTypyes.number,
};
```

Kode dibawah berarti akan melakukan pengecekan terhadap tipe data yang dikirim, dimana variable name harus berupa string, sedangkan age harus berupa number, jika data yang dikirimkan tidak sesuai dengan proptypes, maka akan muncul eror di console log

jika tipe data yang ingin dikirimkan bersifat bebas maka bisa gunakan any

```Javascript
  name: PropTypyes.any.isRequired
```

lalu untuk tipe data array, bisa gunakan `arrayOf`

```Javascript
data: PropTypes.arrayOf(PropTypes.number)
```

jika tipe datanya objek, dan ingin melakukan validasi terhadap key dan value yang dikirim, bisa menggunakan `exact`

```Javascript
hobby: PropTypes.string,
class: PropTypes.number
```

kode tersebut akan mengecek apakah key dan value yang dikirimkan sudah sesuai atau belum.

## React Routes

**1 Oktober 2022**

React router merupakan sebuah library yang mana nantinya kita dapat berganti halaman satu dan halaman yang lainnya dengan mudah. Routing sendiri adalah proses pemetaan antara sebuah URL ke dalam sebuah halaman yang terdapat konten / UI (User Interface) sesuai dengan URL yang dituju.

Sebelum kita menggunakan React Routes kita perlu melakukan instalasi terlebih dahulu dengan menggunakan sintaks

```Javascript
npm i react-router-dom
```

Sebelum kita bekerja dengan react routes, kita perlu mendeklarasikannya terlebih dahulu pada `app.jsx` dengan kode `<routes></routes>` sebagai contoh bisa dilihat pada baris kode di bawah

```Javascript
<Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/detail/:id" element={<DetailPage/>}/>
  <Route path="/about" element={<About/>}>
</Routes>
```

baris kode diatas berarti mendeklarasikan sejumlah route yang nantinya akan dipakai pada project kita. path untuk merujuk ke URL tertentu dan juga element berfungsi untuk merender halaman yang dituju.

Lalu untuk melakukan penggunaan dari route itu sendiri bisa menggunakan Link. kita perlu melakukan import Link terlebih dahulu dengan menggunakan ```import { Link } from "react-router-dom";```

bagaimana cara menggunakan ```Link```? perhatikan baris kode dibawah
```Javascript
<nav>
  <Link to={"/"}>Home|</Link>
  <Link to={"/about"}>About</Link>
  <br />
</nav>
```

Jika dalam HTML biasa kita akan menggunakan ```href``` akan tetapi jika di react menggunakan ```Link``` fungsinya sama saja.

Lalu bagaimana jika kita ingin pergi ke suatu halaman berikut dengan mengirimkan suatu data? kita bisa menggunakan ```useParam```. ```useParam``` akan mengembalikan sebuah objek dari url terbaru yang cocok dengan route path. bisa gunakan kode baris dibawah

```Javascript
import { useParams } from 'react-router-dom';
//mendapatkan id param dari url
const { id } = useParams();

<Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/detail/:id" element={<DetailPage/>}/>
  <Route path="/about" element={<About/>}>
</Routes>
```

```useNavigate()``` akan mengembalikan sebuah function yang mana bisa membuat navigasi ke suatu halaman. sebagai contoh bisa lihat baris kode dibawah

```Javascript
import { Link, useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigation = useNavigate()

  const handleId = (id) => {
    navigation(`/detail/${id}`)
  }

  return (
    <>
      <h1>Ini Home Page</h1>
      <hr />
      {data.map(({ id, name }) => {
        return (
          <div key={id}>
            <h3>No : {id}</h3>
            <h1>Nama : {name}</h1>
            <button onClick={() => handleId(id)}>Detail</button>
            <Link to={"about/student"}>About Student</Link>
            <hr />
          </div>
        );
      })}
    </>
  );
}
```

selanjutnya terdapat nested route. nested route dilakukan jika terdapat sebuah url yang selalu dipakai terus menerus, sebagai contoh penggunaan nested route adalah sebagai berikut:

```Javascript
<Route path="/about" element={<About/>}>
  <Route path="student" element={<AboutStudent/>}/>
  <Route path="teacher" element={<AboutTeacher/>}/>
  <Route index element={<AboutSchool/>}/>
</Route>
```

lalu bagaimana kita ingin melakukan pemanggilan?

kita bisa melakukan pemanggilan dengan cara menggunakan ```Outlet```. ```Outlet``` ini harus digunakan pada parent route element untuk merender child dari route elemen. hal ini akan memperbolehkan sebuah nested untuk menampilkan tampilan ketika child routes dirender. jika parent route cocok, maka akan melakukan render atau tidak melakukan apa apa jika tidak ada index route. contoh di atas seharusnya ```Outlet``` ditaruh berada pada page about sebagai berikut.

```Javascript
import { Outlet, Link } from "react-router-dom";

export default function About() {
    return (
      <>
      <Outlet />
      <Link to = {'student'}>Student|</Link>
      <Link to = {'teacher'}>Teacher</Link>
      </>
    );
  }
```