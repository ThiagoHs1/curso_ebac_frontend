// Classe abstrata DispositivoEletronico
class DispositivoEletronico {
  constructor(nome, marca) {
    this.nome = nome;
    this.marca = marca;
    this.ligado = false;
  }

  ligar() {
    if (!this.ligado) {
      this.ligado = true;
      console.log(`${this.nome} está ligado.`);
    } else {
      console.log(`${this.nome} já está ligado.`);
    }
  }

  desligar() {
    if (this.ligado) {
      this.ligado = false;
      console.log(`${this.nome} está desligado.`);
    } else {
      console.log(`${this.nome} já está desligado.`);
    }
  }
}

// Subclasse Celular
class Celular extends DispositivoEletronico {
  constructor(nome, marca, modelo) {
    super(nome, marca);
    this.modelo = modelo;
  }

  fazerChamada(numero) {
    console.log(`${this.nome} (${this.modelo}) está fazendo uma chamada para ${numero}.`);
  }
}

// Subclasse Notebook
class Notebook extends DispositivoEletronico {
  constructor(nome, marca, tamanhoTela) {
    super(nome, marca);
    this.tamanhoTela = tamanhoTela;
  }

  abrirAplicativo(aplicativo) {
    console.log(`${this.nome} está abrindo o aplicativo ${aplicativo}.`);
  }
}

// Instâncias de objetos
const celular = new Celular('iPhone', 'Apple', 'iPhone 13');
const notebook = new Notebook('MacBook', 'Apple', '15 polegadas');
const dispositivoGenerico = new DispositivoEletronico('Dispositivo Genérico', 'Desconhecida');

celular.ligar();
celular.fazerChamada('123-456-7890');

notebook.ligar();
notebook.abrirAplicativo('Chrome');

dispositivoGenerico.ligar();
dispositivoGenerico.desligar();
