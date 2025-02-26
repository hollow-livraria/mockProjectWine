export default function listItemsCompra(req, res) {
  return res.json({
    message: "todos os items listados",
    items: [
      {
        id: 1,
        idCompra: 4,
        idVinho: 2,
        quantidade: 14,
        preço: "R$ 500,00",
      },
      {
        id: 1,
        idCompra: 4,
        idVinho: 2,
        quantidade: 14,
        preço: "R$ 500,00",
      },
      {
        id: 1,
        idCompra: 4,
        idVinho: 2,
        quantidade: 14,
        preço: "R$ 500,00",
      },
    ],
  });
}
