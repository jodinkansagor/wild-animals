import Component from '../Component.js';

class AnimalItem extends Component {
    renderHTML() {
        const animal = this.props.animal;
        const isCarnivore = (animal) => {
            if (animal.carnivore === true) {
                return '🥩';
            }
        };



        return `
        <li class="cat-item">
                <div class="info-container">
                    <h2>${animal.name}</h2>
                    <p class="animal-type">${animal.type}</p>
                </div>
                <div class="image-container">
                    <img src="${animal.image}" alt="${animal.name} image">
                </div>
                <p class="year">${isCarnivore(animal)}</p>
            </li>
        `;
    }
}
export default AnimalItem;