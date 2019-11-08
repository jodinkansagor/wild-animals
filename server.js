require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const pg = require('pg');

const Client = pg.Client;
const client = new Client(process.env.DATABASE_URL);
client.connect();

const app = express();
const PORT = process.env.PORT;

app.use(morgan('dev')); 
app.use(cors());
app.use(express.static('public'));

//API routes

app.get('api/wildanimals', async(request, response) => {

    try {
        const result = await client.query(`
            SELECT 
                id,
                name,
                weight,
                image,
                type, 
                carnivore as "carnivore"
            FROM ANIMALS;
        `);

        response.json(result.rows);
    }

    catch (err) {
        response.status(500).json({
            error: err.message || err
        });
    }
});

//start server!
app.listen(PORT, () => {
    console.log('server running on PORT', PORT);
});
