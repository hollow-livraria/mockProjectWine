export default function getCompra(req, res) {
  return res.json({
    message: "aqui esta a compra em questão.",
    compra: {
      id: 1,
      userID: 1,
      data: "14/05;1085",
      status: "pendente",
    },
  });
}
