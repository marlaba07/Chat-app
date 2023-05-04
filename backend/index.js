const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios")

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

// Estoy incluyendo una herramienta para mi chat: Chat Engine -> chatengine.io
// plataforma de chat en línea que ofrece una API para que los desarrolladores puedan integrar el chat en sus aplicaciones y sitios web
app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    try {
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            { username: username, secret: username, first_name: username },
            { headers: { "private-key": "32bff379-2159-400d-9e6a-8ce80cc086f9" } }
        )
        return res.status(r.status).json(r.data)
    } catch (e) {
        return res.status(e.response.status).json(e.response.data)
    }
});

app.listen(3001);