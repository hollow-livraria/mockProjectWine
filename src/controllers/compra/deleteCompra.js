export default function deleteUser(req, res) {
  return res.json({
    message: "A compra foi deletada com sucesso.",
    compra: {
      id: 1,
      userID: 1,
      data: "14/05;1085",
      status: "pendente",
    },
  });
}
