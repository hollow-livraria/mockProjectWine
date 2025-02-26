export default function getVinho(req, res) {
  return res.json({
    message: "aqui esta o vinho escolhido.",
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
