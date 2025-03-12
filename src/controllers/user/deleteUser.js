import { remove } from "../../models/userModel.js";

export default async function deleteUser(req, res) {

  const { id } = req.params

  const result = await remove(+id)

  if(!result) {
    return res.status(404).json({
      error: "usuario nao encontrado"
    })
  }

  return res.json({
    user: result
  })
}
