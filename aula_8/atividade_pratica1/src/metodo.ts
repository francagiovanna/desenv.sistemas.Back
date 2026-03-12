  class Produto {
    nome: string;
    preco: number;


    
    constructor(nome: string, preco:number){
        this.nome = nome;
        this.preco = preco;
    }
  }

  class Categoria{
    nome: string;
    desconto: number;
    constructor(nome: string, desconto: number) {
        this.nome = nome;
        this.desconto = desconto;
    }

   calcularPrecoComDesconto(produto: Produto): number {
        const precoComDesconto = produto.preco = (produto.preco * (this.desconto / 100));
        return precoComDesconto;
    }
  }

  const produto1 = new Produto ('Camiseta', 50);
  const categoria1 = new Categoria ('Verao', 10)

  const precoFinal = categoria1.calcularPrecoComDesconto(produto1);

  console.log('Produto: ${produto1.nome}');
  console.log('Preco original: R$${produto1.preco}');
  console.log('Categoria: ${categoria1.nome}');
  console.log('Desconto: ${categoria1.desconto}%');
  console.log('Preco com desconto: R$${precoFinal.toFixed(2)}');