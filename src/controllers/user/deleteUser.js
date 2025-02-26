export default function deleteUser(req, res) {
  return res.json({
    message: "O usuario foi totalmente obliterado.",
    user: {
      name: "livrariazin",
      email: "livros@gmail.com",
      cpf: "999.999.999-99",
      telefone: "99 9999-9999",
    },
  });
}
