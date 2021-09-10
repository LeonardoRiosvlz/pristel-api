import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express();

// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));
// database
const db = require("./models");
const Role = db.role;
db.sequelize.sync().then(() => {
 //initial(); // Just use it in development, at the first time execution!. Delete it in production
});


app.use('/public',express.static(`${__dirname}/storage/imgs`));
app.use('/api', require('./routes/auth.routes'));
app.use('/api', require('./routes/user.routes'));
app.use('/api', require('./routes/cargo.routes'));
app.use('/api', require('./routes/area.routes'));
app.use('/api', require('./routes/terceros.routes'));
app.use('/api', require('./routes/categoria.routes'));
app.use('/api', require('./routes/subcategoria.routes'));
app.use('/api', require('./routes/entidades.routes'));
app.use('/api', require('./routes/permisos.routes'));
app.use('/api', require('./routes/notificacion.routes'));
app.use('/api', require('./routes/formato.routes'));
app.use('/api', require('./routes/chat.routes'));
app.use('/api', require('./routes/imputaciones.routes'));
app.use('/api', require('./routes/abonos.routes'));
app.use('/api', require('./routes/seguridad.routes'));
app.use('/api', require('./routes/regional.routes'));
app.use('/api', require('./routes/ciudades.routes'));
app.use('/api', require('./routes/trazabilidad_ath.routes'));
app.use('/api', require('./routes/album.routes'));
app.use('/api', require('./routes/gestion_ath.routes'));
app.use('/api', require('./routes/notas.routes'));
app.use('/api', require('./routes/calendario.routes'));
app.use('/api', require('./routes/legalizaciones_ath.routes'));
app.use('/api', require('./routes/sac.routes'));
app.use('/api', require('./routes/sac_ath.routes'));
app.use('/api', require('./routes/cajeros_ath.routes'));
app.use('/api', require('./routes/programacion_ath.routes'));
app.use('/api', require('./routes/cobrosAth.routes'));
app.use('/api', require('./routes/fscAth.routes'));

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('puerto', process.env.PORT || 5000);
const servidor = app.listen(app.get('puerto'), () => {
  console.log('Example app listening on port'+ app.get('puerto'));
});

const io = require('socket.io')(servidor);
global.io = io; //added
io.on('connection', function(socket) {
 
    socket.on('servidor', function(data) {
  
        //io.emit('MESSAGE', data)
        io.to(data.user).emit('cliente', data);
    });
});

module.exports = {

    servidor

}