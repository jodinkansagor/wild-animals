const URL = '/api';

export async function getAnimals() {  
    const url = `${URL}/animals`;

    const response = await fetch(url);
    const data = await response.json();
    return data;
}