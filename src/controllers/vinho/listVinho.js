export default function listVinho(req, res) {
  return res.json({
    message: "todos os vinhos escolhidos.",
    vinhos: [
      {
        id: 1,
        name: "vinho legal",
        tipo: "tinto suave",
        safra: 1978,
        preço: 250,
        volume: "muito",
        região: "sicilia",
      },
      {
        id: 1,
        name: "vinho legal",
        tipo: "tinto suave",
        safra: 1978,
        preço: 250,
        volume: "muito",
        região: "sicilia",
      },
      {
        id: 1,
        name: "vinho legal",
        tipo: "tinto suave",
        safra: 1978,
        preço: 250,
        volume: "muito",
        região: "sicilia",
      },
    ],
  });
}
