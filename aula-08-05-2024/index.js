const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('https://api-umfg-programacao-iv-2024-291d5e9a4ec4.herokuapp.com/v1/signup', (req, res) => {
    const { email, password } = req.body;
    res.json({ success: true, message: 'Usuário registrado com sucesso!' });
});

app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    res.json({ success: true, message: 'Login bem-sucedido!' });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
