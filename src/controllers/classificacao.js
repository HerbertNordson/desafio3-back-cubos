const Classificacao = require('../repositories/classificacao');
const { response } = require('../controllers/response');

const classificacao = async (ctx) => {
	const result = await Classificacao.pegarJogos();
	
	return response(ctx, 200, result);
}

module.exports = { classificacao };