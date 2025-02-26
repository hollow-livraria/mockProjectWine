export default function listCompras(req, res) {
  return res.json({
    message: "todos as compras listadas",
    compras: [
      {
        id: 1,
        userID: 1,
        data: "14/05;1085",
        status: "pendente",
      },
      {
        id: 1,
        userID: 1,
        data: "14/05;1085",
        status: "pendente",
      },
      {
        id: 1,
        userID: 1,
        data: "14/05;1085",
        status: "pendente",
      },
    ],
  });
}
