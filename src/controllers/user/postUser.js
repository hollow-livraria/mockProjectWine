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
  });
}
