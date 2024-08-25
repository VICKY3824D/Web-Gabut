const merah = document.querySelector('#red');
const hijau = document.querySelector('#green');
const blue = document.querySelector('#blue');
const reset = document.querySelector('#reset');


const par = document.querySelector('.par');

merah.addEventListener("click", () => {
    
    document.querySelectorAll('p').forEach((p) => p.remove());
    document.body.style.backgroundColor = 'rgb(206, 43, 43)';
    const menyala = document.createElement('p');
    menyala.textContent = 'Warna Merah Warna Cinta :)';
    
    par.appendChild(menyala);
});

hijau.addEventListener("click", () => {
    document.querySelectorAll('p').forEach((p) => p.remove());
    document.body.style.backgroundColor = 'rgb(37, 207, 80)';
    const goGreen = document.createElement('p');
    goGreen.textContent = 'Mari Hijaukan Bumi Kita';

    par.appendChild(goGreen);
});

blue.addEventListener("click", () => {
    document.querySelectorAll('p').forEach((p) => p.remove());
    document.body.style.backgroundColor = 'rgb(37, 40, 207)';
    const laut = document.createElement('p');
    laut.textContent = 'Laut dan awan warnanya biru';

    par.appendChild(laut);
});

document.querySelector('#reset').addEventListener("click", () => {
    //menghapus elemen paragraf yang berisi teks
    document.querySelectorAll('p').forEach((p) => p.remove());
});