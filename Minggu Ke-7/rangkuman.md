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

lalu untuk tipe data array, bisa gunakan ```arrayOf```

```Javascript
data: PropTypes.arrayOf(PropTypes.number)
```

jika tipe datanya objek, dan ingin melakukan validasi terhadap key dan value yang dikirim, bisa menggunakan ```exact```

```Javascript
hobby: PropTypes.string,
class: PropTypes.number
```

kode tersebut akan mengecek apakah key dan value yang dikirimkan sudah sesuai atau belum.