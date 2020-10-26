const Usuarios = require("../repositories/usuarios");
const { response } = require('../controllers/response');

const obterUsuarios = async (ctx) => {
	const result = await Autores.obterAutores();
	return response(ctx, 200, result);
};

const obterUsuario = async (ctx) => {
	const { id = null } = ctx.params;
    if (id) {
        const result = await Usuarios.obterUsuarios(id);
        if (result) {
            return response(ctx, 200, result);
        }
        return response(ctx, 404, { message: 'Usuário não encontrado' });
    }
    return response(ctx, 400, { message: 'Mal formatado' });
};

const obterUsuariosPorEmail = async (ctx) => {
    const { email = null } = ctx.params;
    if (email) {
        const result = await Usuarios.obterUsuarioPorEmail(email);
        if (result) {
            return response(ctx, 200, result);
        }
        return response(ctx, 404, { message: 'Usuário não encontrado' });
    }
    return response(ctx, 400, { message: 'Mal formatado' });
};

module.exports = {
	 obterUsuario,
	 obterUsuariosPorEmail,
	 obterUsuarios
};