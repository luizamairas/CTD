/* 
  Passo 1: Crie uma função construtora que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). 
*/
function Aluno(nome, qt_faltas, notas) {
    this.nome = nome;
    this.qt_faltas = qt_faltas;
    this.notas = notas;
  
    //Passo 2: Na função construtora crie o método calcularMedia que retorna a média de suas notas.
    this.calcularMedia = function() {
      let notaDoAluno = 0;
      let qt_notas = 0;
  
      for (let nota of this.notas) {
        notaDoAluno += nota;
        qt_notas++;
      }
      return  notaDoAluno / qt_notas;
    };
    
    //Segunda funçao da parte2: Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1 para cada aluno específico.
    this.faltas = function() {
        this.qt_faltas++;
    };
  
  }
  
  //Criando os alunos e atribuindo em uma variavel constante.
  const aluno1 = new Aluno("Aluno1", 2, [6, 8, 9, 10]);
  const aluno2 = new Aluno("Aluno2", 3, [8, 9, 7, 4]);
  const aluno3 = new Aluno("Aluno3", 1, [8.8, 8.8, 10, 8.8]);
  const aluno4 = new Aluno("Aluno4", 2, [10, 10, 9, 10]);
  const aluno5 = new Aluno("Aluno5", 2, [5, 8, 9, 10]);
  
  //Criando uma lista com os alunos existentes.
  let alunos = [aluno1, aluno2, aluno3, aluno4, aluno5];
  
  
  // Teste para calcular a média do aluno
  for (let aluno of alunos) {
    console.log("A média do " + aluno.nome + " é: " + aluno.calcularMedia().toFixed(2));
  }
  
  // Teste para adicionar faltas para um aluno
  aluno1.faltas()
  console.log("A quantidade atual de faltas do aluno: " + aluno1.qt_faltas);
  
  /* 
    Passo 3: Crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number),
    faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 2).
  */
  let curso = {
    nomeDoCurso: "JavaScript",
    notaDeAprovacao: 8,
    faltaMaxima: 3,
    listaDeEstudante: [aluno1, aluno2, aluno3, aluno4, aluno5],
  
    /*
      Passo 4: Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso,
      deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.
    */
    adicionarAlunos: function(novoAluno) {
      curso.listaDeEstudante.push(novoAluno);
    },
  
    /*
      Passo5: Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação.
      Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação e ter menos faltas que faltas máximas. Se tiver a mesma quantidade,
      tem que estar 10% acima da nota de aprovação. 
    */
    alunoAprovado: function(aluno) {
      let mediaAluno = aluno.calcularMedia();
  
      if ( this.calculaFaltaEMediaAluno(mediaAluno, aluno.qt_faltas) || this.calcularMediaAcimaDaAprovacao(aluno.qt_faltas, mediaAluno) ) {
          return true;
      } else {
          return false;
      }
    },
  
    calculaFaltaEMediaAluno: function(mediaAluno, faltas) {
      return mediaAluno >= curso.notaDeAprovacao && faltas < curso.faltaMaxima ? true : false;
    },
  
    calcularMediaAcimaDaAprovacao: function(quantidadeFaltasAluno, mediaAluno) {
      if (quantidadeFaltasAluno == curso.faltaMaxima) {
        let notaDeAprovacaoCalculada = curso.notaDeAprovacao + ((curso.notaDeAprovacao / 100) * 10);
        return mediaAluno > notaDeAprovacaoCalculada ? true : false;
      }
    },
    
    /*  
      Passo6: Crie um método para o objeto curso que percorra a lista de estudantes 
      e retorne um array de booleanos com os resultados se os alunos aprovaram ou não. 
    */
    aprovacaoDeAlunos: function () {
      for (let aluno of this.listaDeEstudante){
        console.log("O " + aluno.nome + " foi aprovado ? " + curso.alunoAprovado(aluno));
      }
    }
  };
  
  // criando os novos alunos para serem adicionados
  let novoAluno6 = new Aluno("Aluno6", 2, [8, 6, 1, 3]);
  let novoAluno7 = new Aluno("Aluno7", 3, [5, 8, 9, 10])
  let novoAluno8 = new Aluno("Aluno8", 1, [10, 10, 10, 9])
  
  let novosAlunos = [novoAluno6, novoAluno7, novoAluno8];
  
  // Teste para adicionar os novos alunos
  for (let aluno of novosAlunos) {
    console.log("")
    curso.adicionarAlunos(aluno);
  }
  
  // Teste para exibir lista com os novos alunos adicionados
  for (let aluno of curso.listaDeEstudante) {
    console.log(aluno.nome);
  }
  
  console.log("")
  
  // Teste para verificar se o aluno foi aprovado
  console.log("O aluno " + aluno4.nome + " foi aprovado ?", curso.alunoAprovado(aluno4));
  console.log("")
  
  // Teste para listar todos os alunos aprovados ou não aprovados
  curso.aprovacaoDeAlunos();