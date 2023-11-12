const chk = document.getElementById('chk');

//Variável que guarda o elemento com o id = containerForms
const containerMeuFormulario = document.getElementsByClassName("my-form")[0];
//Pegando o h2 escrito Log In
const palavraLogIn = document.getElementsByTagName("h2")[0]
//Variável que guardará o valor do texto dos links
const esqueceuSenha = document.getElementsByClassName("esqueceu-senha")[0]

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  //Checando se a classe exite no elemento, se existe ele remove, se não, adiciona
  containerMeuFormulario.classList.toggle("active-theme-form")
  //Mudando a cor do texto quando o botão é ativo

  palavraLogIn.classList.toggle("dark-theme-lyrics");
  esqueceuSenha.classList.toggle("dark-theme-lyrics")
})