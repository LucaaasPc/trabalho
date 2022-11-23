// Abre e fecha o menu quando clicar no icone

const nav = document.querySelector('header nav');
const toggle = document.querySelectorAll('nav .toggle');

console.log(toggle)
for (const element of toggle){
  element.addEventListener('click', ()=>{
    nav.classList.toggle('show')
  })
}
