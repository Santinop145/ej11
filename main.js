const url = 'https://fakestoreapi.com/products';

function buildGallery(){
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            products = data;
            let container = document.querySelector('.container');
            for (const p of products){
                let marco = document.createElement('div');
                let image = document.createElement('img');
                image.src = p.image;
                marco.append(image);
                container.append(marco);
            }
    });
    let boton = document.getElementById('boton')
    boton.remove();
}