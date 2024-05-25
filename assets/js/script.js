function toggleMode(){
  const html = document.documentElement; //documentElement é o HTML

  // if(html.classList.contains('light')){
  //   html.classList.remove('light');
  // } else{
  //   html.classList.add('light');
  // }

  html.classList.toggle('light') // ^ os dois métodos são a mesa coisa: o toggle adiciona ou retira a classe definida
}