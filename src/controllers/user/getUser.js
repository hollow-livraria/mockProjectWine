export default function getUser(req, res) {
  return res.json({
    message: "aqui esta o usuario em questão.",
    user: {
      id: 1,
      name: "livrariazin",
      email: "livros@gmail.com",
      senha: "placeholder",
      nascimento: "07/07/2004",
      endereço: "Rua principal",
      cidade: "Goias",
      estado: "MG",
      cpf: "999.999.999-99",
      telefone: "99 9999-9999",
    },
  });
}
