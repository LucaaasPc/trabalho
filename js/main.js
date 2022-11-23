// Abre e fecha o menu quando clicar no icone
const nav = document.querySelector('header nav');
const toggle = document.querySelectorAll('nav .toggle');

for (const element of toggle){
  element.addEventListener('click', ()=>{
    nav.classList.toggle('show')
  })
}

// Faz o corte do video após 16 segundos
var video = document.querySelector('video');
var cutVideo = false;
    video.ontimeupdate = ()=>{
        if (video.currentTime >= 16 && cutVideo == false){
            cutVideo = true;
            video.currentTime = 33;
            video.play();
        } 
    };

// Adiciona autoplay para o video
window.addEventListener('load', ()=>{
  const video = document.querySelector('video');
  video.autoplay = true;
  video.muted = true;
  video.load();

});

// Inicia Audio Fallen
const button = document.querySelector('button')
button.addEventListener('click', function(){
const audio = document.querySelector('audio')
audio.play()
}
)