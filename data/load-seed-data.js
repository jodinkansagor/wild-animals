require('dotenv').config();
const pg = require('pg');
const Client = pg.Client;
// import seed data:
const types = require('./types.js');
const animals = require('./seed-data.js');


run();

async function run() {
    const client = new Client(process.env.DATABASE_URL);

    try {
        await client.connect();
    
        // "Promise all" does a parallel execution of async tasks
        const savedTypes = await Promise.all(
            types.map(async type => {
                const result = await client.query(`
                    INSERT INTO types (name)
                    VALUES ($1)
                    RETURNING *;
                `,
                [type]);
                return result.rows[0];
            })
        );



        await Promise.all(
            // map every item in the array data

            animals.map(animal => {
                const type = savedTypes.find(type => {
                    console.log(type, 'type');
                    console.log(animal.type);
                    return type.name.toLowerCase() === animal.type;
                });

                return client.query(`
                    INSERT INTO animals (name, weight, image, type_id, carnivore)
                    VALUES ($1, $2, $3, $4, $5);
                    `,
                [animal.name, animal.weight, animal.image, type.id, animal.carnivore]);
                  
            })
        );

        console.log('seed data load complete');
    }
    catch (err) {
        console.log(err);
    }
    finally {
        client.end();
    }
    
}