import { update } from "../../models/userModel.js"

export default async function putUser(req, res) {
  const { id } = req.params
  const user = req.body

  const result = await update(+id, user)

  if(!result) {
    return res.status(404).json({
      error: "usuario nao encontrado"
    })
  }

  return res.json({
    user: result
  })
}
