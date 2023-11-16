type clientes = {
    nome:string,
    idade:number,
    status: boolean
}

const usuario:clientes[] = [
    {
        nome: "Guido",
        idade: 32,
        status: true,
    },
    {
        nome: "Dani",
        idade: 30,
        status: true,
    },
    {
        nome: "João",
        idade: 40,
        status: false,
    },
    {
        nome: "Guilherme",
        idade: 29,
        status: true,
    },
    {
        nome: "Ana",
        idade: 18,
        status: false,
    },
    {
        nome: "José",
        idade: 28,
        status: false,
    },
]

const buscarclient=(lista:clientes[],nome:string) =>{

    const usuariosFiltrados = lista.filter(usuario =>
        usuario.nome.toLowerCase().includes(nome.toLowerCase())
    );
    return usuariosFiltrados;
}
const usuariosEncontrados = buscarclient(usuario, "Jo");
console.log(usuariosEncontrados);

