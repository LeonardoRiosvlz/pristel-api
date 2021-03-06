const db = require("../models");
const Ath = db.programacion_ath;




exports.findAth = async (req, res) => {

await  Ath.findAll({
    limit: 3000000,
    offset: 0,
    where: {tecnico_id:req.userId}, // conditions
    order: [
      ['id', 'DESC'],
    ],
    attributes:['id',['vencimiento_tecnico', 'end'],['titulo', 'title'],['created_at', 'start'],'status']
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(500).send({
        message: err.message || "Some error accurred while retrieving books."
      });
    });
};
