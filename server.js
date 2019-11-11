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
app.use(express.json());

//API routes
//get the animals
app.get('/api/wild-animals', async(request, response) => {

    try {
        const result = await client.query(`
            SELECT 
                a.*,
                t.name as type
            FROM animals a
            JOIN types t
            ON a.type_id = t.id;
        `);

        response.json(result.rows);
    }

    catch (err) {
        response.status(500).json({
            error: err.message || err
        });
    }
});

//get one animal
app.get('/api/wild-animals/:id', async(request, response) => {
    const id = request.params.id;
    

    try {
        const result = await client.query(`
            SELECT
                a.*,
                t.name as type
            FROM animals a
            JOIN types t
            on a.type_id = t.id
            where a.id = $1
        `, 
        [id]);

        const animal = result.rows[0];
        if (!animal) {
            response.status(404).json({
                error: 'Animal id ${id} does not exist'
            });
        }   
        else {
            response.json(result.rows[0]);
        }
    }
    catch (err) {
        console.log(err);
        response.status(500).json({
            error: err.message || err
        });
    }
});

//add an animal
app.post('/api/wild-animals', async(request, response) => {
    const animal = request.body;

    try {
        const result = await client.query(`
            INSERT INTO animals (name, weight, image, type_id, carnivore)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *;
        `,
        [animal.name, animal.weight, animal.image, animal.type, animal.carnivore]
        );
        response.json(result.rows[0]);
    }

    catch (err) {
        console.log(err);
        response.status(500).json({
            error: err.message || err
        });
    }
});

//get types
app.get('/api/types', async(request, response) => {
    try {
        const result = await client.query(`
        SELECT *
        FROM types
        ORDER BY name;;    
    `);
        response.json(result.rows);

    }
    catch (err) {
        console.log(err); 
        response.status(500).json({
            error: err.message || err
        });
    }
});

//start server!
app.listen(PORT, () => {
    console.log('server running on PORT', PORT);
});
