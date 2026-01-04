const form = document.querySelector(".form");
const campos = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".span-required");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nomeValido  = validarNome();
    const emailValido = validarEmail();
    const senhaValida = validarSenha();
    const senhasIguais = validarConfirmacaoSenha();

    if (nomeValido && emailValido && senhaValida && senhasIguais) {
        console.log("Formulário válido ✅");
        form.submit(); // envia o formulário
    }
});

function setError(index) {
    campos[index].style.border = "2px solid red";
    spans[index].style.display = "block";
}

function removeError(index) {
    campos[index].style.border = "";
    spans[index].style.display = "none";
}

function validarNome() {
    if (campos[0].value.trim().length < 3) {
        setError(0);
        return false;
    }
    removeError(0);
    return true;
}

function validarEmail() {
    if (!emailRegex.test(campos[1].value)) {
        setError(1);
        return false;
    }
    removeError(1);
    return true;
}

function validarSenha() {
    if (campos[2].value.length < 8) {
        setError(2);
        return false;
    }
    removeError(2);
    return true;
}

function validarConfirmacaoSenha() {
    if (
        campos[2].value !== campos[3].value ||
        campos[3].value.length < 8
    ) {
        setError(3);
        return false;
    }
    removeError(3);
    return true;
}