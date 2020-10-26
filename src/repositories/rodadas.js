const database = require('../utils/database');

const pegarRodadas = async (rodada) => {
	const query = `
		SELECT * FROM jogos 
		WHERE 
		rodada = '${rodada}'
		ORDER BY id;
	`;

	const result = await database.query(query);
	
	console.log(result);

	return result.rows;

}

module.exports = { pegarRodadas }