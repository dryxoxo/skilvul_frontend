# WEB DEVELOPMENT BASIC MINGGU KE-1
## MATERI CLI & GIT

### CLI 'Command Line Interface’
CLI dapat diperluas sebagai ‘Command Line Interface’, yang tidak lain adalah antarmuka pengguna yang memungkinkan melakukan operasi fungsional apa pun pada sistem dengan menerima input dalam bentuk perintah, alih-alih mengklik dan mengetik bentuk input.

Command Line Interface, juga ada banyak macamnya. CLI bawaan sistem operasi contohnya adalah cmd.exe milik Windows atau bash dan zsh di sistem operasi mirip Unix.

Conmmand dari CLI yang biasa digunakan

| Command | Fungsi |
| ------ | ------ |
| pwd   | Command untuk melihat current working directory|
| ls | Command untuk melihat isi file yang ada di sebuah direktori |
| cd <directory> | Untuk berpindah directory |
| touch | Command untuk membuat sebuah file |
| head | Command untuk melihat beberapa line awal dari sebuah file text |
| tail | Command untuk melihat beberapa line awal dari sebuah file text |
| cat | Command untuk melihat isi sebuah file |
| cp | Command untuk mengcopy files atau directory |
| mv | Command untuk memindahkan files atau directory. Bisa digunakan untuk rename.|
| rm | Command untuk menghapus file atau directory|


### Git & GitHub
Git adalah salah satu sistem pengontrol versi (Version Control System) pada proyek perangkat lunak yang diciptakan oleh Linus Torvalds.

Github sendiri adalah suatu website yang digunakan untuk menyimpan dan mengelola kode suatu project secara cloud.

Git dan github sangatlah penting digunakan bagi seorang programer dikarenakan git bisa melakukan kolaborasi dengan programer lain dalam mengembangkan suatu sistem.

Conmmand dari CLI yang biasa digunakan

**Tambah file baru atau ubah file**

```
git add <nama file>
```

**Tambah beberapa file baru atau ubah beberapa file sekaligus**
```
git add .
```

**Konfirmasi penambahan atau perubahan file**

```
git commit -m "<pesan commit>"
```

**Ubah dan konfirmasi modifikasi beberapa file sekaligus**

```
git commit -a -m "<pesan commit>"
```

**Kirim perubahan ke dalam repository**

```
git push origin <nama branch>
```
**Buat branch baru**

```
git branch <nama branch baru>
```

**Aktifkan branch baru**

```
git checkout <nama branch baru>
```

**Konfirmasi perubahan**

```
git commit -m "<pesan konfirmasi>"
```

**Unggah branch baru ke dalam repository remote**

```
git push origin <nama branch baru>
```

**Aktifkan branch yang diinginkan**

```
git checkout <nama branch aktif>
```
**Pada repository remote**

```
git push origin :<nama branch>
```

**Pada repository lokal**

```
git branch <nama branch> -d
```
**Perbarui branch local**

```
git pull origin <nama branch aktif>
```

**Penggabungan**

```
git merge <nama branch yang akan digabungkan>
```

**Cek dan selesaikan konflik akibat penggabungan branch**

```
git status
```

**Konfirmasi dan unggah penggabungan branch**

```
git commit -m "<pesan konfirmasi>" -a
git push origin <nama branch aktif>
```
## Materi HTML & CSS

### HTML
Peran HTML dalam dunia website sangatlah penting, ibaratnya, rumah tidak akan berdiri tanpa adanya kerangka. nah, html merupakan sebuah rangka agar nantinya website bisa diakses dan ditampilkan di Internet.

HTML memiliki struktur sebagai berikut
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```
nah, nantinya kita bisa membuat kerangka sebuah website di dalam tag body.

setelah melakukan pembuatan rangka, kita bisa mempublikasikannya melalui platform netlify atau github.io

### CSS
CSS memiliki peran penting dalam sebuah web dikarenakan CSS dapat melakukan styling pada sebuah kerangka HTML yang sudah kita buat.

Dalam penerapannya, css bisa disematkan ke dalam html dengan 3 cara


|Metode  |Sintaks  |
|---------|---------|
|inline     |```<p style="color:white;">Something usefull here.</p>```         |
|eksternal     |```<style type="text/css">```|
|internal     |```<style> body {background-color: blue;}</style>```         |

CSS dapat membuat sebuah website menjadi responsif dengan menggunakan mediaquery dengan mengatur ukuran layar yang sesuai.

CSS juga memiliki flexbox yang merupakan mode layout yang ada di CSS3 dan digunakan untuk mengatur elemen di suatu halaman web.

## Materi Algoritma
Apa itu algoritma? Langkah-langkah sistematis dan logis untuk menyelesaikan suatu masalah dan menghasilkan output tersebut. algoritma memiliki sebuah peran penting yaitu algoritma mengajarkan bagaimana cara kita berpikir secara logis dan tersistematis.
jenis jenis proses algoritma memiliki 3 proses. yaitu sequence, selection, 

**Sequence**
instruksi yang digunakan pada sequence yaitu instruksi yang dijalankan berurutan

**selection**
instruksi yang dijalankan memenuhi suatu kondisi (if else)

penyajian algoritma memiliki beberapa cara yaitu meliputi:

**deskriptif**
seperti menulis sebuah tutorial

**flowchart**
Flowchart atau bagan alur adalah diagram yang menampilkan langkah-langkah dan keputusan untuk melakukan sebuah proses dari suatu program.

** Pseudocode **
Pseudocode atau kode semu dapat diartikan sebagai deskripsi dari algoritma pemrograman yang dituliskan secara sederhana dibandingkan dengan sintaksis bahasa pemrograman.

## Materi JS
Pada minggu ini diajarkan tentang if else. Statement if else pada bahasa JavaScript adalah bentuk lanjutan dari pernyataan kontrol yang memungkinkan JavaScript untuk mengeksekusi pernyataan dengan cara yang lebih terkontrol. struktur if else bisa diliat dibawah ini:

```
if (kondisi) {
  // kode yang akan dieksekusi ketika kondisi benar
} else {
  // kode yang akan dieksekusi ketika kondisi salah
}
```

lalu diajarkan tentang materi switch case. Switch Case adalah fungsi yang berguna untuk membuat pengecekan sebuah nilai. dan nilai yang tersedia untuk pengecekan bisa banyak atau lebih dari satu. bisa diliat struktur switch dibawah ini:
```
switch(expression) {
  case n:
    code block
    break;
  case n:
    code block
    break;
  default:
    default code block
}
```

