// hasAttribute - pergunta sem te algum atributo
// document.getElementById("idQualquer").hasAttribute("class");

// document.querySelector("classeQualquer").hasAttribute("id");

// getAttribute - pergunta se tem e traz o valor

// var atributodiv = document.getElementById("idQualquer");

// vai retornar o valor que esta dentro da clsasse

// document.write(atributodiv.getAttribute("class"));

// setAttribute - altera ou aplica o atributo

// selecionado = div

var atributodiv1 = document.getElementById("idQualquer")
// aplicando um estilo direto
atributodiv1.setAttribute('style', 'background: red');