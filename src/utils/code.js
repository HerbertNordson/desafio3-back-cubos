
const obterClassificacao = () => {
	const tabela = [];

const calcularTabela = (nome, pontos, golsFeitos, golsSofridos) => {
  const timeExiste = tabela.find((time) => time.nome === nome);
  if (timeExiste) {

    timeExiste.jogos++,
      (timeExiste.pontos += pontos),
      (timeExiste.vitorias += pontos === 3 ? 1 : 0),
      (timeExiste.derrotas += pontos === 0 ? 1 : 0),
      (timeExiste.empates += pontos === 1 ? 1 : 0),
      (timeExiste.golsFeitos += golsFeitos),
      (timeExiste.golsSofridos += golsSofridos),
      (timeExiste.saldoGols += golsFeitos - golsSofridos);
  } else {

    tabela.push({
      nome,
      jogos: 1,
      pontos,
      vitorias: pontos === 3 ? 1 : 0,
      derrotas: pontos === 0 ? 1 : 0,
      empates: pontos === 1 ? 1 : 0,
      golsFeitos,
      golsSofridos,
      saldoGols: golsFeitos - golsSofridos,
    });
  }
};

const criarTabela = (jogos) => {
  for (let jogo of jogos) {
    if (jogo.gols1 === jogo.gols2) {
      //empate
      calcularTabela(jogo.time1, 1, jogo.gols1, jogo.gols2);
      calcularTabela(jogo.time2, 1, jogo.gols2, jogo.gols1);
    } else if (jogo.gols1 > jogo.gols2) {
      //time1 venceu
      calcularTabela(jogo.time1, 3, jogo.gols1, jogo.gols2);
      calcularTabela(jogo.time2, 0, jogo.gols2, jogo.gols1);
    } else {
      //time2 venceu
      calcularTabela(jogo.time1, 0, jogo.gols1, jogo.gols2);
      calcularTabela(jogo.time2, 3, jogo.gols2, jogo.gols1);
    }
  }
};

const ordenarTabela = () => {
  tabela.sort((a, b) => {
    if (a.pontos > b.pontos) {
      return -1;
    } else if (b.pontos > a.pontos) {
      return 1;
    } else if (a.vitorias > b.vitorias) {
      return -1;
    } else if (b.vitorias > a.vitorias) {
      return 1;
    } else if (a.saldoGols > b.saldoGols) {
      return -1;
    } else if (b.saldoGols > a.saldoGols) {
      return 1;
    } else {
      ordemAlfabetica();
    }
  });
};

const ordemAlfabetica = () => {
  tabela.sort((a, b) => a.nome.localeCompare(b.nome));
};

const ordemEmpates = () => {
  tabela.sort((a, b) => {
    if (a.empates > b.empates) {
      return -1;
    } else if (b.empates > a.empates) {
      return 1;
    } else {
      ordemAlfabetica();
    }
  });
};

const ordemMenosGols = () => {
  tabela.sort((a, b) => {
    if (a.golsFeitos > b.golsFeitos) {
      return 1;
    } else if (b.golsFeitos > a.golsFeitos) {
      return -1;
    } else {
      ordemAlfabetica();
    }
  });
};

const ordemGolsSofridos = () =>
  tabela.sort((a, b) => b.golsSofridos - a.golsSofridos);

const Organizar = (err, data) => {
  const jogosOrg = [];

  const jogos = data.toString().split("\n");

  jogos.forEach((linha) => {
    const infos = linha.split("\t");
    const jogo = {
      time1: infos[0],
      gols1: parseInt(infos[1]),
      time2: infos[4],
      gols2: parseInt(infos[3]),
    };
    jogosOrg.push(jogo);
  });

  criarTabela(jogosOrg);
  ordenarTabela();
  ordemAlfabetica();
  ordemEmpates();
  ordemMenosGols();
  ordemGolsSofridos();
  console.log(tabela);
});

};