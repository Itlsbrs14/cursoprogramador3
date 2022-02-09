function Enviar() {
  
    var nome = document.getElementById("nome");
    var valor = document.querySelector('valor');
    var email = document.querySelector('email');

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }

}
function save() {
  var user = {
    nome: nome.value,
    valor: valor.value,
    email: email.value
  }
  fetch('/pagamento', {
    method: "POST", body: JSON.stringify(pagamento),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
}
