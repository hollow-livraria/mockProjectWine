export default function getItemsCompra(req, res) {
  return res.json({
    message: "aqui estão os items da sua compra",
    items: {
      id: 1,
      idCompra: 4,
      idVinho: 2,
      quantidade: 14,
      preço: "R$ 500,00",
    },
  });
}
