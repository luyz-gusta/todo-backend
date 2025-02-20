const PORT = process.env.PORT || 8000;
const app = require('./app.js')

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
