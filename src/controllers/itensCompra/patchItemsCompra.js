export default function patchItemsCompra(req, res) {
  return res.json({
    message: "aqui estao os items atualizados",
    items: {
      id: 1,
      idCompra: 4,
      idVinho: 2,
      quantidade: 14,
      preço: "R$ 500,00",
    },
  });
}
