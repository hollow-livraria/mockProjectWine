export default function putItemsCompra(req, res) {
  return res.json({
    message: "aqui estao os items atualizados com sucesso",
    user: {
      id: 1,
      idCompra: 4,
      idVinho: 2,
      quantidade: 14,
      preço: "R$ 500,00",
    },
  });
}
