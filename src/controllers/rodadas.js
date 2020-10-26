const Rodadas = require('../repositories/rodadas');
const { response } = require('../controllers/response');
const { params } = require('../routes');

const rodadas = async (ctx) => {
	const result = await Rodadas.pegarRodadas(ctx.params.rodada);
	
	return response(ctx, 200, result);
}

const atualizarRodada = async (ctx) => {
    const {
        id = null,
        gols_casa = null,
        gols_visitante = null,
    } = ctx.request.body;
    if (id) {
        const result = await Rodadas.pegarUmaRodada(id);
        if (result) {
            const jogoAtualizado = { gols_casa, gols_visitante };
            const jogofinal = await Rodadas.atualizarRodadas(jogoAtualizado);

            return response(ctx, 200, jogofinal);
        }
    }
    return response(ctx, 400, { mensagem: 'Error' });
};

module.exports = { 
	rodadas, 
	atualizarRodada
 };