const brawlStarsApi = require("./axios");

const api = brawlStarsApi();

const getPlayerById = async (playerid) =>{
    const parsePlayerid = playerid.replace("#", "%23");

    try {
        const response = await api.get(`/players/${parsePlayerid}`);
        console.log(response.data);
        return response.data; // Enviando apenas os dados da resposta como JSON
    } catch (error) {
        console.error('Erro ao chamar a API do Brawl Stars:', error);
        return { error: 'Erro ao chamar a API do Brawl Stars' };
    }
};

module.exports = { getPlayerById };