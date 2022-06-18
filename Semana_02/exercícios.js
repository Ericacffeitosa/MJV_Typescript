/** Semana 02 - Execícios TYPESCRIPT
 * 1- Crie um tipo para representar um objeto que contenha as suas informações de
 * nome, profissão, idade e uma lista de assuntos de seu interesse.
 **/
interface Pessoa { //Obejto tipo Pessoa.
    nome: string,
    profissão: string,
    idade: number,
    interesses: string[], //Uma lista de assuntos de interesse.
}
/** 2 - Crie um objeto utilizando o tipo criado no exercício 1 
 * e o popule de acordo com suas informações.
 **/
const pessoa: Pessoa = {
    nome: "Érica",
    profissão: "Dev Junior", 
    idade: 33,
    interesses: ["programação","jogos"], 
}
/** 3 - Faça uma função que receba como argumento um objeto do tipo do exercício 1, 
 * e retorne somente a lista de assuntos do objeto.
*/
function interessepessoa (pessoa) {
    return pessoa.interesses;
}
/** 4 - Coloque a tipagem tanto no argumento da função do exercício 3 
 * quanto no tipo de retorno dela.
 **/
 function interessePessoa (pessoa: Pessoa): string[] {
    return pessoa.interesses;
}
/** 5 - Crie um enum para representar as Matérias do curso 
 * (Angular, Typescript e Git)
 **/
enum Materia { //um conjunto fixo de constantes, valores pré-definidos.
    Angular = "Angular",
    Typescript = "Typescript",
    Git= "Git",
}
/** 6 - Crie mais um tipo para representar os professores, 
 * contendo nome e uma lista das materias de cada um.
 **/
interface Professor {
    nome: string,
    materias: Materia[],
}
/** 7 - Crie os objetos Alan e Nathan utilizando os tipos dos exercícios 5 e 6.
 * Nathan = Angular e Git, Alan = Angular, Typescript e Git
 **/
const nathan: Professor = {
    nome: "Nathan",
    materias: [Materia.Angular,Materia.Git],
}
const alan: Professor = {
    nome: "Alan",
    materias: [Materia.Angular,Materia.Typescript, Materia.Git],
}
/** 8 - Declare e popule um array com os objetos do exercício 7.
 **/
let arrayProfessores: Professor[] = [nathan, alan];
/** 9 - Faça uma função que receba um argumento de array de Professor
 * e retorne um novo array de strings contendo somente os nomes dos professores.
 **/
function listarNomesProfessores (arrayProfessores: Professor[]): string[] {
    let nomes: string[] = [];
    arrayProfessores.forEach(function(professor){
        nomes.push(professor.nome);
    });
    return nomes;
}
/** 10 - Faça uma função que receba um argumento de array de Professores
 *  e retorne um array de materias.
 **/
 function listarMateriasProfessores (arrayProfessores: Professor[]): Materia[] { //Função recebe argumento arrayProfesores do tipo Professor[], com return tipo Materia[]
    let materias: Materia[] = [];
    arrayProfessores.forEach(function(professor){ //para cada um dos professores
        professor.materias.forEach(function(materia){ // cada matéria do professor.
            materias.push(materia); 
        });
    });
    return materias;
}
/** 11 - Faça uma função que receba um argumento de array de Professores e
 * retorne o primeiro Professor encontrado que dê aula de Typescript.
 **/
function procurarProfessor (arrayProfessores: Professor[]): Professor | null { // return Tipo de Professor ou null
    for(let i = 0; i < arrayProfessores.length; i++){ //Percorre o array de professores (length com o tamanho do array) 
        let professor = arrayProfessores[i]; // variável professor só existe dentro do for, foi criada para receber um professor.
        for(let j = 0; j < professor.materias.length; j++){ // for vai percorrer as materias, de um professor. 
            let materia = professor.materias[j];
            if (materia == Materia.Typescript) { // if vai trazer o professor referente a matéria TYPESCRIPT.
                return professor;
            }
        }
    }
    return null; // Esse tipo de retorno nullo deve estar declaro no tipo de retorno da função. 
}