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

## React Redux

Redux merupakan sebuah state manajemen yang mana berfungsi untuk mengelola dan memusatkan suatu state. nantinya akan lebih sering menggunakan redux apabila terdapat data yang berubah dari waktu ke waktu. 

lalu bagaimana cara menginstal redux pada react?

```npm redux```

```npm react-redux```

setelah dilakukan instalasi, baru kita melakukan konfigurasi dari redux.

### set-up awal redux
<hr/>

**Create Reducer**

Buat folder redux lalu buat folder reducer di dalamnya.

buatlah file ```keranjangReducer.js``` dalam reducer. lalu ikutilah baris kode dibawah.
```Javascript
const initailState = {
  totalKeranjang: 0,
};

export default function keranjangReducer(state = initailState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
```
Baris kode diatas memuat sebuah object yang nantinya akan dijadikan sebagai store dan memuat sebuah function yang memiliki 2 parameter serta menerima argumen berupa state, dan juga action yang nantinya akan dijalankan. didalam function tersebut terdapat sebuah switch case yang nantinya akan menampung sebuah logika yang akan dijalankan jika sesuai dengan kondisi dari ```action.type```
<hr/>

**Create File Store**

lalu buatlah file ```index.js``` didalam folder ```redux/store``` kemudian ikuti baris dibawah.

```Javascript
import {createStore} from 'redux'

import keranjangReducer from '../reducer/keranjangReducer'

const store = createStore(keranjangReducer)

export default store
```
baris kode diatas akan membuat store dari keranjangReducer yang mana store ini akan digunakan sebagai argumen dari ```provider```
<hr/>

**Create Folder Action**

buatlah file ```action.js``` dalam folder redux
reducer. lalu ikuti baris kode dibawah

```Javascript
export const INCREMENT_KERANJANG = "INCREMENT_KERANJANG"
export const DECREMENT_KERANJANG = "DECREMENT_KERANJANG"

export function incrementKeranjang(){
    return{
        type: INCREMENT_KERANJANG
    }
}

export function decrementKeranjang(){
    return{
        type: DECREMENT_KERANJANG
    }
}
```

baris kode diatas akan membuat sebuah action yang mana nantinya akan digunakan sebagai argumen dari ```keranjangReducer.js``` dan struktur file tersebut akan berubah menjadi seperti dibawah
```Javascript
import {
  INCREMENT_KERANJANG,
  DECREMENT_KERANJANG,
} from "../action/keranjangAction";

const initailState = {
  totalKeranjang: 0,
};

export default function keranjangReducer(state = initailState, action) {
  switch (action.type) {
    case INCREMENT_KERANJANG:
      return {
        totalKeranjang: state.totalKeranjang + 1,
      };

    case DECREMENT_KERANJANG:
      return {
        totalKeranjang: state.totalKeranjang > 0 ?  state.totalKeranjang - 1 : 0 ,
      };

    default:
      return state;
  }
}

```

function keranjangReducer akan menjalankan sebuah kondisi apabila ketika parameter action mendapatkan sebuah argumen ```decrementKeranjang()``` maka akan menjalankan case ```DECREMENT_KERANJANG```.

lalu bagaimana cara menggunakan function keranjangReducer? caranya adalah dengan menggunakan dispatch. bagaimana cara menggunakan dispatch?

```Javascript
import { useDispatch } from "react-redux";
import {
  incrementKeranjang,
  decrementKeranjang,
} from "../redux/action/keranjangAction";

export default function Counter() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const increment = () => {
    setCount(count + 1);
    dispatch(incrementKeranjang());
  };
  const decrement = () => {
    count > 0 && dispatch(decrementKeranjang())
    setCount(count > 0 ? count - 1 : 0);
  };

  return (
    <>
      <div>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}
```

baris kode diatas akan menjalankan function keranjangReducer dengan menggunakan dispatch dengan memberikan sebuah argumen.

### Multiple Reducer

lalu bagaimana jika memiliki reducer lebih dari satu dan ingin digunakan pada satu project? maka hal itu bisa menggunakan ```combineReducers()```. contoh penggunaanya:

```Javascript
import { combineReducers, createStore } from 'redux'

const rootReducer = combineReducers({
  theDefaultReducer,
  firstNamedReducer,
  secondNamedReducer
})

const store = createStore(rootReducer)
```

## React Redux Middleware & Thunk

Secara konsep, redux tidak mendukung asynchronus. tapi hal ini bisa diakali dengan menggunakan middleware & thunk. thunk memiliki arti yaitu potongan kode yang bekerja dengan delay. thunks merupakan suatu pola dari penulisan function dengan logika di dalamnya yang dapat berinteraksi dengan redux baik dispacth maupun getState method.

untuk menggunakan thunk. maka kita perlu melakuakn instalasi ```redux-thunk``` dan juga ```middleware``` dan harus ditambahkan dalam store. sebagai contoh:

pada file ```src/store/index.js``` ubah isi file menjadi seperti ini

```Javascript
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import todoReducer from "../reducer/todoReducer";

const allReducer = combineReducers({
  todo: todoReducer,
});

const store = createStore(allReducer, applyMiddleware(thunk));

export default store;
```

lalu untuk bagian ```action```

```Javascript
import axios from "axios";

export const GET_TODO = "GET_TODO";
export const FETCH_START = "FETCH_START";
export const SUCCESS_GET_TODO = "SUCCESS_GET_TODO";

function fetchStart() {
  return {
    type: FETCH_START,
  };
}

function successGetTodo(data) {
  return {
    type: SUCCESS_GET_TODO,
    payload: data,
  };
}

export const getTodo = () => {
  return async (dispatch) => {
    dispatch(fetchStart());
    const result = await axios(
      "https://6350376e78563c1d82bca248.mockapi.io/todo"
    );
    console.log(result.data);
    dispatch(successGetTodo(result.data));
  };
};
```

didalam baris kode tersebut terdapat sebuah thunk dengan function bernama getTodo yang mana memiliki return berupa sebuah function