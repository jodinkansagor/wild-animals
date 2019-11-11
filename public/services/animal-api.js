const URL = '/api';

export async function getTypes() {
    const url = `${URL}/types`;

    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export async function getAnimals() {  
    const url = `${URL}/wild-animals`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(url);
    return data;
}

export async function getAnimal(id) {
    const url = `${URL}/wild-animals/${id}`;

    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export async function addAnimal(animal) {
    const url = `${URL}/wild-animals`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(animal)
    });
    const data = await response.json();
    return data;
}