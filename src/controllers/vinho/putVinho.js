export default function putVinho(req, res) {
  return res.json({
    message: "vinho atualizado com sucesso.",
    vinho: {
      id: 1,
      name: "vinho legal",
      tipo: "tinto suave",
      safra: 1978,
      preço: 250,
      volume: "muito",
      região: "sicilia",
    },
  });
}
