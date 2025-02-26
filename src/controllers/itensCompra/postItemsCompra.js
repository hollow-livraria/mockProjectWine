export default function postItemsCompra(req, res) {
  return res.json({
    message: "items da compra criados com sucesso",
    user: {
      id: 1,
      idCompra: 4,
      idVinho: 2,
      quantidade: 14,
      preço: "R$ 500,00",
    },
  });
}
