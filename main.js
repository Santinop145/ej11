const url = 'https://fakestoreapi.com/products';
let photo = 0;
let container = document.querySelector('.container');
let products = [];

function buildGallery(){
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            products = data;
            showProducts();
    });
    let boton = document.getElementById('boton')
    boton.remove();
}

function showProducts(){
    if(photo < 0){
        photo = 0;
    }
    for (let i = 0; i < 4; i++){
        console.log(photo);
        let marco = document.createElement('div');
        let image = document.createElement('img');
        image.src = products[photo].image;
        marco.append(image);
        container.append(marco);
        photo++;
    }
}

function changePage(e){
    console.log(e.target);
    if(e.target.id === "previous"){
        photo -= 8;
    }
    container.innerHTML = '';
    showProducts();
}