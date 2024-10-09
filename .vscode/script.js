function toggleMode() {
  const html = document.documentElement
     html.classList.toggle('light')

   // PEGA A TAG IMG
   const img = document.querySelector("#profile img")

    // SUBSTITUIR A IMAGEM
    if(html.classList.contains('light')) {
    // SE TIVER LIGHT MODE, ADICIONAR A IMAGEM LIGHT
    img.setAttribute('src', "/assets/avatar-light.png")  
    img.setAttribute('alt', 'Foto de Arthur com Juliet com fundo')
  } else {
    // SE TIVER SEM LIGHT MODE, MANTER A IMAGEM NORMAL
   img.setAttribute("src", "/assets/avatar-dark.png")
   img.setAttribute('alt', 'Foto de Arthur sem juliet com fundo de carro')
   }
}
  
