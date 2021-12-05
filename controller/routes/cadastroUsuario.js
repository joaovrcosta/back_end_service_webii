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
        mensagem: "Usuario Cadastrado com sucesso",
      });
    } catch (error) {
      res.render("Cadastro", {
        title: "Cadastro",
        mensagem: "Erro no cadastro",
      });
    }
  });

  app.get("/cadastro", (req, res) => {
    res.render("Cadastro", { title: "Cadastro", mensagem: null });
  });

  app.get("/delete/usuario/:id", async (req, res, next) => {
    try {
      var id = req.params.id;
      await usuarioBanco.deleteUsuario(id);
      const docs = await usuarioBanco.selectUsuario();
      res.render("Lista", { mensagem: "Usuario excluído com sucesso", docs });
    } catch (err) {
      next(err);
    }
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
