document.getElementById("termo").onclick = function(){
    var mensagem = document.getElementById("span-termo");
    if (mensagem.style.display === "none") {
        mensagem.style.display = "block";
    } else {
        mensagem.style.display = "none";
  } 
}
function validate() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const endereco = document.getElementById('endereco').value;
    const cidade= document.getElementById('cidade').value;
    const complemento = document.getElementById('complemento').value;
    const estado = document.getElementById('estado').value;

    let isValid = true;

    if (email === '') {
        document.getElementById('email').style.border = '1px solid red';
        alert('Todos os campos são obrigatórios!');
        isValid = false;
    } else {
        document.getElementById('email').style.border = '1px solid black';
    }

    if (senha === '') {
        document.getElementById('senha').style.border = '1px solid red';
        alert('Todos os campos são obrigatórios!');
        isValid = false;
    } else {
        document.getElementById('senha').style.border = '1px solid black';
    }
    if (senha === '') {
        document.getElementById('endereco').style.border = '1px solid red';
        alert('Todos os campos são obrigatórios!');
        isValid = false;
    } else {
        document.getElementById('endereco').style.border = '1px solid black';
    }
    if (senha === '') {
        document.getElementById('cidade').style.border = '1px solid red';
        alert('Todos os campos são obrigatórios!');
        isValid = false;
    } else {
        document.getElementById('cidade').style.border = '1px solid black';
    }
    if (senha === '') {
        document.getElementById('complemento').style.border = '1px solid red';
        alert('Todos os campos são obrigatórios!');
        isValid = false;
    } else {
        document.getElementById('complemento').style.border = '1px solid black';
        
    }
    if (senha === '') {
        document.getElementById('estado').style.border = '1px solid red';
        alert('Todos os campos são obrigatórios!');
        isValid = false;
    } else {
        document.getElementById('estado').style.border = '1px solid black';
    }

    return isValid;
}
