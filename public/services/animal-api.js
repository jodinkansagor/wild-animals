const URL = '/api';

export async function getAnimals() {  
    const url = `${URL}/wild-animals`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
}