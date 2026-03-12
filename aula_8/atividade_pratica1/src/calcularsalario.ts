class Funcionario {
  nome: string;
  salario: number;

  constructor(nome: string, salario: number) {
    this.nome = nome;
    this.salario = salario;
  }

  calcularSalario(): number {
    return this.salario;
  }
}

class Programador extends Funcionario {
  bonus: number;

  constructor(nome: string, salario: number, bonus: number) {
    super(nome, salario);
    this.bonus = bonus;
  }

  calcularSalario(): number {
    return this.salario + this.bonus;
  }
}

class Designer extends Funcionario {
  horasExtras: number;

  constructor(nome: string, salario: number, horasExtras: number) {
    super(nome, salario);
    this.horasExtras = horasExtras;
  }

  calcularSalario(): number {
    return this.salario + (this.horasExtras * 50);
  }
}

const prog = new Programador('Ana', 5000, 1000);
const design = new Designer('Carlos', 4000, 10);

console.log(`${prog.nome} - Salário: R$${prog.calcularSalario()}`);
// Ana - Salário: R$6000

console.log(`${design.nome} - Salário: R$${design.calcularSalario()}`);
// Carlos - Salário: R$4500