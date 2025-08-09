const navBarNavigasi = document.querySelector
('.navbar-navigasi');

// perbuhan menu navigasi

document.querySelector('#menu').onclick = () => {
    navBarNavigasi.classList.toggle('active');
};

// hilangkan menu

const Menu = document.querySelector('#menu');

document.addEventListener('click', function(e){
    if(!Menu.contains(e.target) && !navBarNavigasi.contains(e.target)){
        navBarNavigasi.classList.remove('active');
    }
});