const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/paleta.routes');
const connectToDatabase = require('./src/database/database');

const port = 3040;
const app = express();

connectToDatabase();

app.use(express.json());
app.use(cors());
app.use('/paletas', routes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
