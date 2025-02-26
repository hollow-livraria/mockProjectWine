export default function postCompra(req, res) {
  return res.json({
    message: "compra criada com sucesso.",
    compra: {
      id: 1,
      userID: 1,
      data: "14/05;1085",
      status: "pendente",
    },
  });
}
