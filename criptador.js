   
function removerImagem() {
  document.getElementById("lupa").style.display = "none";
  document.getElementById("titulo").style.display = "none";
  document.getElementById("result").style.display = "none";
}

function aparecerBotao(copiar) {
   element.style.display = "block";
}

function aparecertexto(myInput) {
   element.style.display = "block";
}

function copiar() {
  var copiaTexto = document.getElementById("myInput");
  copiaTexto.select();
  copiaTexto.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copiaTexto.value);
  alert("Texto copiado para a área de transferência!");
  
  var textoCopiado = document.getElementById("meutextoCopiado");
  textoCopiado.innerHTML = "Copied: " + copiaTexto.value;
}

function copiado() {
  var textoCopiado = document.getElementById("meutextoCopiado");
  textoCopiado.innerHTML = "Texto copiado para a área de transferência!";

}

function criptografar() {
  var textoOriginal = document.getElementById("textarea").value;
  
  textoOriginal = textoOriginal.replace(/e/g, "enter");
  textoOriginal = textoOriginal.replace(/i/g, "imes");
  textoOriginal = textoOriginal.replace(/a/g, "ai");
  textoOriginal = textoOriginal.replace(/o/g, "ober");
  textoOriginal = textoOriginal.replace(/u/g, "ufat");

  document.getElementById("myInput").innerHTML = textoOriginal;

}

function descriptografar() {
  var textoCriptografado = document.getElementById("textarea").value;

  textoCriptografado = textoCriptografado.replace(/enter/g, "e");
  textoCriptografado = textoCriptografado.replace(/imes/g, "i");
  textoCriptografado = textoCriptografado.replace(/ai/g, "a");
  textoCriptografado = textoCriptografado.replace(/ober/g, "o");
  textoCriptografado = textoCriptografado.replace(/ufat/g, "u");

  document.getElementById("myInput").innerHTML = textoCriptografado;
}  

  var button = document.getElementById("botao_descriptografar");
   
  button.addEventListener("click", function() {
   
    var element = document.getElementById("copiar");

   
    element.style.display = "block";
  });
 
   var button = document.getElementById("botao_criptografar");

  button.addEventListener("click", function() {
    
    var element = document.getElementById("copiar");
   
    element.style.display = "block";
  });

   var button = document.getElementById("botao_criptografar");
 
  button.addEventListener("click", function() {
    
    var element = document.getElementById("myInput");
    
    element.style.display = "block";
  });

   var button = document.getElementById("botao_descriptografar");
 
  button.addEventListener("click", function() {
  
    var element = document.getElementById("myInput");

    element.style.display = "block";
  });

