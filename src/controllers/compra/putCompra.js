export default function putCompra(req, res) {
  return res.json({
    message: "aqui esta a compra atualizada",
    user: {
      id: 1,
      userID: 1,
      data: "14/05;1085",
      status: "pendente",
    },
  });
}
