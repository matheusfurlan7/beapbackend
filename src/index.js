import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bem-vindo à API TypeScript!');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});