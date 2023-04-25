let html = document.querySelector('#html')
let css = document.querySelector('#css')
let js = document.querySelector('#js')
let boots = document.querySelector('#boostrap')
let python = document.querySelector('#python')



html.addEventListener('mouseover', function msg(){
   let p = document.querySelector('#ht')
   let p2 = document.querySelector('#ht2')
   p.textContent='É uma linguagem de marcação utilizada na construção de páginas Web.'
   p2.textContent = 'Tenho 6 meses de estudo nessa tecnlogia.'

 html.addEventListener('mouseout', function(){
    p.textContent='/* Passe o mouse sobre as habilidade*/'
    p2.textContent=''
 })
    
})

css.addEventListener('mouseover', function msg(){
    let p = document.querySelector('#ht')
    let p2 = document.querySelector('#ht2')
    p.textContent='É um mecanismo para adicionar estilos a uma página web.'
    p2.textContent = 'Tenho 6 meses de estudo nessa tecnlogia.'
 
  css.addEventListener('mouseout', function(){
     p.textContent='/* Passe o mouse sobre as habilidade*/'
     p2.textContent=''
  })
     
 })

 js.addEventListener('mouseover', function msg(){
    let p = document.querySelector('#ht')
    let p2 = document.querySelector('#ht2')
    p.textContent='É uma linguagem de programação que permite a você implementar itens complexos em páginas web.'
    p2.textContent = 'Tenho 2 meses de estudo nessa linguagem.'
 
  js.addEventListener('mouseout', function(){
     p.textContent='/* Passe o mouse sobre as habilidade*/'
     p2.textContent=''
  })
     
 })

 boots.addEventListener('mouseover', function msg(){
    let p = document.querySelector('#ht')
    let p2 = document.querySelector('#ht2')
    p.textContent='É um framework web com código-fonte aberto para desenvolvimento front-end para sites e aplicações web.'
    p2.textContent = 'Estou iniciando nesse framework.'
 
  boots.addEventListener('mouseout', function(){
     p.textContent='/* Passe o mouse sobre as habilidade*/'
     p2.textContent=''
  })
     
 })

 python.addEventListener('mouseover', function msg(){
    let p = document.querySelector('#ht')
    let p2 = document.querySelector('#ht2')
    p.textContent='É uma linguagem de programação amplamente usada em aplicações web, ciência de dados e machine learning'
    p2.textContent = 'Estou estudando a 2 meses essa linguagem.'
 
 python.addEventListener('mouseout', function(){
     p.textContent='/* Passe o mouse sobre as habilidade*/'
     p2.textContent=''
  })
     
 })


 