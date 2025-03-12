import { create } from "../../models/userModel.js"

export default async function postUser(req, res) {
  const user = req.body
  const result = await create(user)

  if(!result) {
    return res.status(500).json({
      message: "erro ao criar o usuario!"
    })
  }

  delete result.password

  return res.json({
    message: "conta criada com sucesso.",
    user: result
    //   id: 1,
    //   name: "livrariazin",
    //   email: "livros@gmail.com",
    //   senha: "placeholder",
    //   nascimento: "07/07/2004",
    //   endereço: "Rua principal",
    //   cidade: "Goias",
    //   estado: "MG",
    //   cpf: "999.999.999-99",
    //   telefone: "99 9999-9999",
  });
}
