import { updateName } from "../../models/userModel";

export default async function patchUser(req, res) {

    const {id} = req.params
    const {name} = req.body

    const result = await updateName(+id, name)

    if(!result) {
        return res.status(404).json({
            error: "usuario nao encontrado"
        })
    }

    return res.json({
        user: result
    })
}