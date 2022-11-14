# Rangkuman Minggu Ke-8

## React Contex

Context menyediakan cara untuk oper data melalui diagram komponen tanpa harus oper props secara manual di setiap tingkat Dalam aplikasi React yang khusus, data dioper dari atas ke bawah (parent ke child) melalui props, tetapi ini bisa menjadi rumit untuk tipe props tertentu (mis. preferensi locale, tema UI) yang dibutuhkan oleh banyak komponen di dalam sebuah aplikasi. Context menyediakan cara untuk berbagi nilai seperti ini di antara komponen tanpa harus oper prop secara explisit melalui setiap tingkatan diagram.
Context dirancang untuk berbagi data yang dapat dianggap “global” untuk diagram komponen React, seperti pengguna terotentikasi saat ini, tema, atau bahasa yang disukai.

### Menggunakan React Context

```React.createContext()``` Context ini dapat digunakan untuk menyimpan data yang dapat diakses oleh komponen-komponen yang berada di dalamnya.

```
import React from "react";

const UserContext = React.createContext();

export default UserContext;
```

### Menggunakan Provider
```Context.Provider``` Setiap objek Context dilengkapi dengan komponen Provider React yang memungkinkan komponen konsumsi untuk menerima perubahan context.

Context dapat digunakan dengan menggunakan ```Context.Provider``` dan ```Context.Consumer```. ```Context.Provider``` digunakan untuk menyediakan data yang dapat diakses oleh komponen-komponen yang berada di dalamnya. ```Context.Consumer``` digunakan untuk mengakses data yang disediakan oleh ```Context.Provider```.

```Javascript
import React from "react";
import UserContext from "./UserContext";

const User = () => {
  return (
    <UserContext.Provider value={{ name: "John Doe" }}>
      <div>
        <h1>User</h1>
        <Profile />
      </div>
    </UserContext.Provider>
  );
};

const Profile = () => {
  return (
    <div>
      <h2>Profile</h2>
      <Name />
    </div>
  );
};

const Name = () => {
  return (
    <UserContext.Consumer>{({ name }) => <p>{name}</p>}</UserContext.Consumer>
  );
};

export default User;
```

### Menggunakan HOOKS

```useContext``` dapat di katakan sebagai sebuah general store, dengan begitu data dapat kita gunakan di berbagai macam komponen, tanpa harus menjadikan data sebagai props di setiap komponennya, kurang lebih seperti redux, jika teman-teman familiar dengan redux.

```Javascript
import React, { useContext } from "react";
import UserContext from "./UserContext";

const User = () => {
  return (
    <UserContext.Provider value={{ name: "John Doe" }}>
      <div>
        <h1>User</h1>
        <Profile />
      </div>
    </UserContext.Provider>
  );
};

const Profile = () => {
  return (
    <div>
      <h2>Profile</h2>
      <Name />
    </div>
  );
};

const Name = () => {
  const { name } = useContext(UserContext);

  return <p>{name}</p>;
};

export default User;
```


### Membuat Custom Hooks
Custom Hooks dapat dibuat untuk mempermudah penggunaan Context dengan menggunakan ```useContext()```.

```Javascript
import { useContext } from "react";
import UserContext from "./UserContext";

const useUser = () => useContext(UserContext);

export default useUser;
```

Custom Hooks dapat digunakan seperti berikut:

```Javascript
import React from "react";
import useUser from "./useUser";

const User = () => {
  return (
    <UserContext.Provider value={{ name: "John Doe" }}>
      <div>
        <h1>User</h1>
        <Profile />
      </div>
    </UserContext.Provider>
  );
};

const Profile = () => {
  return (
    <div>
      <h2>Profile</h2>
      <Name />
    </div>
  );
};

const Name = () => {
  const { name } = useUser();

  return <p>{name}</p>;
};

export default User;
```

## React Testing

React Testing Library adalah seperangkat helpers yang memungkinkan Anda mengetes komponen pada React tanpa bergantung pada detail implementasinya. Pendekatan ini membuat refactoring menjadi mudah dan juga mendorong Anda untuk menerapkan best practices untuk aksesbilitas.

### Instalasi React Testing

React Testing bisa diinstalasi dengan menggunakan ```npm```

``` npm install --save-dev @testing-library/react ```

### Instalasi JEST

React JEST bisa diinstalasi dengan menggunakan ```npm```

``` npm install --save-dev jest ```

### Instalasi JEST DOM

Jest DOM menyediakan cara untuk melakukan testing pada DOM. 

```
npm install --save-dev @testing-library/jest-dom
```

### Penggunaan JEST

untuk melakukan testing bisa diliat pada contoh dibawah

```Javascript
const {sum, checkGG, isOdd} = require('./app');

test('menjumlahkan angka pada sum()', () => {
  expect(sum(0, 0)).toBe(0)
  expect(sum(0, 1)).toBe(1)
  expect(sum(1, 1)).toBe(2)
  expect(sum(2, 2)).toBe(4)
})

test('check ganjil atau genap', () => {
  expect(checkGG(1)).toBe("Ganjil")
  expect(checkGG(2)).toBe("Genap")
  expect(checkGG(3)).toBe("Ganjil")
})

test('check ganjil', () => {
  expect(isOdd(1)).toBeTruthy()
  expect(isOdd(2)).toBeFalsy()
  expect(isOdd(3)).toBeTruthy()
})
```
