let nonton = (kondisi) => {
    return new Promise((resolve, reject) => {

        if (kondisi == "jalan") {
            resolve('nonton terpenuhi')
        } else {
            reject('gagal nonton')
        }
    })
}


console.log('hai');

nonton("jalan")
.then(result => {
    console.log(result);
}).catch(err => {
    console.log(err);
});

async function nama() {
    try {
        result = await nonton()
        console.log(`ini dari try catch ${result}`);
    } catch (error) {
        console.log(error);
    }
}

nama()

//ambil data digimon

fetch('https://digimon-api.vercel.app/api/digimon')
.then(result => result.json())
.then(result => console.log(result))

getDataDigimon = async () => {
    try {
        let result = await fetch('https://digimon-api.vercel.app/api/digimon')
        result = await result.json()
        console.log(typeof result);
        console.log(result);
        result.forEach(element => {
            console.log(element.name);
        })

    } catch (error) {
        console.log(error);
    }
}

getDataDigimon()