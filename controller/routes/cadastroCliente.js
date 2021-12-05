const seguranca = require("../../model/components/seguranca");
const usuarioBanco = require("../../model/repositories/usuarios-bd");
var UsuarioLogin = require("../../model/entities/Usuario");
module.exports = function (app) {
  app.post("/cadastro/usuario/salvar", (req, res) => {
    try {
      usuarioBanco.insertUsuario({
        nome: req.body.nome,
        senha: seguranca.ocultarSenha(req.body.senha),
      });
      res.render("Cadastro", {
        title: "Cadastro",
        mensagem: "Usuário Cadastrado com sucesso",
      });
    } catch (error) {
      res.render("Cadastro", {
        title: "Cadastro",
        mensagem: "Erro no cadastrado",
      });
    }
  });

  /* GET login page. */
  app.get("/cadastro", (req, res) => {
    res.render("Cadastro", { title: "Cadastro", mensagem: null });
  });

  app.get("/lista/usuario", async (req, res, next) => {
    try {
      const docs = await usuarioBanco.selectUsuario();
      res.render("Lista", { mensagem: "Lista de Usuarios", docs });
    } catch (err) {
      next(err);
    }
  });
};
