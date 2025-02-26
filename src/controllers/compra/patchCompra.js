export default function patchCompra(req, res) {
  return res.json({
    message: "aqui esta a compra atualizada",
    compra: {
      id: 1,
      userID: 1,
      data: "14/05;1085",
      status: "pendente",
    },
  });
}
