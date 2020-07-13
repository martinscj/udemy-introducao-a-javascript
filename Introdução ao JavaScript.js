// Sobre o curso


src = // unifica o arquivo JS com o HTML

/* */ // comentatio de multiplas linhas
// Imprime o texto no console
console.log = "Texto"

var variavel = "Olá Pessoal";

let outraVariavel = "Neste curso aprenderemos sobre os fundamentos de JavaScript";

const umaConstante = "Veja um resumo do que você vai aprender";

let numero = 120;

let texto = "String";

let booleano = true || false;

let vetor = [1,2,3,4,5,6,7,8];

let objeto = {
    propriedade: 12,
    propriedade2: "Teste"
};

let umaFuncao = function () {
// Fazer algo
};

function outraFuncao () {
    umaFuncao ();
    umaFuncao ();
};

if (booleano) {
    console.log (variavel);
}else{
    alert (outraVariavel);
}

switch (numero) {
    case 1:
        console.log(1);
            break;
    case 12:
        console.log (numero * numero);
            break;
    case 120:
        outraFuncao();
            break;
    default:
        umaFuncao ();        

}

for (let index = 0; index < vetor.length; index++) {
    vetor[index] = vetor[index] + 5;
}

for (const palavra of ["Olá", "Mundo", "!"]) {
    console.log (palavra);
}

while (1 == 1) {
    numero = numero + 5;
if (numero > 1000) {
        break;
}    
}

do {
    numero = numero + 5;
if (numero > 1000) {
    break:
}
}while (1 == 1);