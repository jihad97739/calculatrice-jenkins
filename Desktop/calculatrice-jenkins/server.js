const app = require('./index');
const port = 3000;

app.listen(port, () => {
    console.log(`Serveur calculatrice démarré sur http://localhost:${port}`);
});