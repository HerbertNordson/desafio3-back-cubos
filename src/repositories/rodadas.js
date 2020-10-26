const database = require('../utils/database');

const pegarRodadas = async (rodada) => {
	const query = `
		SELECT * FROM jogos 
		WHERE 
		rodada = '${rodada}'
		ORDER BY id;
	`;

	const result = await database.query(query);
	
	return result.rows;

}

const atualizarRodadas = async (jogo) => {
	const { id, gols_casa, gols_visitante } = jogo;
	const query = `
	UPDATE jogos 
	SET gols_casa = $1,
	gols_visitante = $2 
	WHERE id = $3;
	`;
	const result = await database.query({
		text: query,
		values: [gols_casa, gols_visitante, id],
	});

	return result.rows.shift();
}

const pegarUmaRodada = async (id) => {
	const query = `SELECT * FROM jogos WHERE id = $1`;
	const result = await database.query({
		text: query,
		values: [id],
	});
	return result.rows;
}

module.exports = { 
	pegarRodadas,
	atualizarRodadas,
	pegarUmaRodada
 }