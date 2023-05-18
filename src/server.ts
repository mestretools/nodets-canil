import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';

dotenv.config();

const server = express();

// configuracao do template
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

// configuracao da pasta
server.use(express.static(path.join(__dirname, '../public')));

// configuracao das rota
server.use(mainRoutes);

// configuracao de rota nao encontrada
server.use((req, res) => {
    res.status(404).render('pages/404.mustache');
});

// configuração do server
server.listen(process.env.PORT);