fetch("img/image.jpg")
.then(image => console.log(image));


function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Data has been fetched!')
        }, 2000);
    })
}

async function run() {
    try {
        let result = await fetchData()
        console.log(result);
    } catch (error){
        console.error(error);
    }
}

run()

async function fetchData() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/")
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

fetchData()

// console.log('apres la fonction async');



// I) Utilisez la méthode fetch pour récupérer un ficher texte à partir d'un serveur distant, puis affichez-le dans la console
fetch("https://jsonplaceholder.typicode.com/posts/")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));


// II) Écrivez une fonction ...
function getJSONData(url) {
    return fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error =>console.log(error));
}

// III)...
let image = fetch("img/image.jpg").then(response => console.log(response));
let zoneImg = document.createElement("img").setAttribute("src="+image+";");