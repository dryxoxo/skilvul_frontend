function hitungBMI(event){
    event.preventDefault();

    let tinggiBadan = document.getElementById('tinggiBadan').value;
    let beratBadan = document.getElementById('beratBadan').value;
    let resultHTML = document.getElementById('result');
    
    if(!tinggiBadan || !beratBadan){
        alert('Tinggi / Berat badan tidak boleh kosong')
    }

    let result = beratBadan / Math.pow(tinggiBadan/100, 2)
    let hasil = ''

    if(result >= 30){
        hasil = 'Obesitas'
    } else if (result >= 23) {
        hasil = 'Berat badan berlebih'
    } else if (result >= 18,5){
        hasil = 'Berat badan normal'
    } else {
        hasil = 'Berat badan kurang'
    }

    resultHTML.innerHTML = `Index BMI kamu adalah ${result.toFixed(2)} dan masuk kedalam kategori ${hasil}`
}

const submit = document.getElementById('submit')
submit.addEventListener('click', hitungBMI)