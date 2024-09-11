document.addEventListener('submit',(event)=>{
    // previne o envio dos dados do formulario
    event.preventDefault();

    // captura a senha do usuario
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value
    let senhacon = document.getElementById('senhacon').value

    if(senha != senhacon){
        // alert('Senhas incorretas!')
        Swal.fire({
            title: "Atenção!",
            text: "Verifique as senhas, não conferem!",
            icon: "warning"
          });
        return
    }
    // envio dos dados do formulario de cadastro para o backend PHP usando JS(Fetch/Ajax)
    fetch('backend/cadastrar-usuario.php',{
        method: 'POST',
        body: `nome=${nome}&email=${email}&senha=${senha}`,
        headers:{
            "Content-type":"application/x-www-form-urlencoded"
        }
    })
})