// função Callbacks
const saudacao = (nome) => alert(`ola ${nome}`);

const processarUsuario = (callback) =>{
    const nome = prompt("digite seu nome");
    callback(nome);
};

processarUsuario(saudacao)

// exemplo2

const callback = e => alert(`evento ${e.type}`);

window.addEventListener("click", callback)