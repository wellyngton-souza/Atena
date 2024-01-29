require("dotenv").config();
const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

const { getPlayerById } = require("./src/services/players");

const instance = axios.create({
    baseURL: "https://api.brawlstars.com/v1/",
    headers: {
        Authorization: `Bearer ${process.env.brawlstars_token}`
    }
});

const port = 4000;

app.get('/hello', async (req, res) => {
    try {
        const response = await instance.get("/events/rotation");
        console.log(response.data);
        res.json(response.data); // Enviando apenas os dados da resposta como JSON
    } catch (error) {
        console.error('Erro ao chamar a API do Brawl Stars:', error);
        res.status(500).json({ error: 'Erro ao chamar a API do Brawl Stars' });
    }
});

app.get('/players/', async (req, res) => {
    const { playerid } = req.body;

    try {
        const response = await getPlayerById(playerid);
        console.log(response);
        res.json(response);
    } catch (error) {
        console.error('Erro ao chamar a API do Brawl Stars:', error);
        res.status(500).json({ error: 'Erro ao chamar a API do Brawl Stars' });
    }
    /*
    const parsePlayerid = playerid.replace("#", "%23");

    try {
        const response = await instance.get(`/players/${parsePlayerid}`);
        console.log(response.data);
        res.json(response.data); // Enviando apenas os dados da resposta como JSON
    } catch (error) {
        console.error('Erro ao chamar a API do Brawl Stars:', error);
        res.status(500).json({ error: 'Erro ao chamar a API do Brawl Stars' });
    }
    */
});

app.listen(port, () =>{
    console.log("Servidor rodando em " + port);
});