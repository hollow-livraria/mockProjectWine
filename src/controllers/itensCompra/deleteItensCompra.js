export default function deleteItemsCompra(req, res) {
  return res.json({
    message: "Os items foram apagados.",
    items: {
      id: 1,
      idCompra: 4,
      idVinho: 2,
      quantidade: 14,
      preço: "R$ 500,00",
    },
  });
}
