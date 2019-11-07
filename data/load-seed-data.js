require('dotenv').config();
const pg = require('pg');
const Client = pg.Client;
// import seed data:
const animals = require('./data/seed-data');

run();

async function run() {
    const client = new Client(process.env.DATABASE_URL);

    try {
        await client.connect();
    
        // "Promise all" does a parallel execution of async tasks
        await Promise.all(
            // map every item in the array data
            animals.map(animal => {

                return client.query(`
                    INSERT INTO animals (name, weight, image, type, hasHair)
                    VALUES ($1, $2, $3, $4, $5);
                    `,
                [animal.name, animal.weight, animal.image, animal.type, animal.hasHair]);
                
                
                
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