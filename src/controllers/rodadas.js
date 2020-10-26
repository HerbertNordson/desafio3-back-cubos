const Rodadas = require('../repositories/rodadas');
const { response } = require('../controllers/response');
const { params } = require('../routes');

const rodadas = async (ctx) => {
	const result = await Rodadas.pegarRodadas(ctx.params.rodada);
	
	return response(ctx, 200, result);
}

module.exports = { rodadas };