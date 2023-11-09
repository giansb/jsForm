const campocpf = document.getElementById('cpf');
campocpf.addEventListener('keyup', Fcpf);

const campoemail = document.getElementById("email");
campoemail.addEventListener("keyup", Femail);

const campotelefone = document.getElementById("telefone");
campotelefone.addEventListener("keyup",Ftelefone)

function Fcpf(e){
    let format=e.target.value.replace(/\D/g,"");
    format=format.replace(/(\d{3})(\d)/,"$1.$2");
    format=format.replace(/(\d{3})(\d)/,"$1.$2");
    format=format.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
    e.target.value = format;
}

function Femail(e){
    let format = e.target.value.replace(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i);
    console.log("teste")
    e.target.value = format;
}

function Ftelefone(e){
    let format = e.target.value.replace(/\D/g,"");
    format = format.replace(/^(\d\d)(\d)/g,"($1)$2");
    format = format.replace(/(\d{5})(\d)/,"$1-$2");
    e.target.value = format
}