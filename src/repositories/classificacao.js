const database = require('../utils/database');

const pegarJogos = async () => {
	const query = `
		SELECT * FROM jogos;
	`
	const result = await database.query(query);
	
	console.log(result);

	return result.rows;

}

const pegarTimes = async () => {
	const query = `
		SELECT DISTINCT time_casa AS mandante FROM jogos;
	`
	const result = await database.query(query);
	
	console.log(result);

	return result.rows;

}

module.exports = { pegarJogos, pegarTimes }