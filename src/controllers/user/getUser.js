import { getById } from "../../models/userModel.js";

export default async function getUser(req, res) {

  const { id } = req.params

  const result = await getById(+id)

  if(!result) {
    return res.status(404).json({
      error: "usuario nao encontrado"
    })
  }

  return res.json({
    user: result
  })
}
