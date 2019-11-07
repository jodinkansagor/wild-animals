import Component from '../Component.js';
import AnimalItem from '../animal-list/AnimalItem.js';

class AnimalList extends Component {
    onRender(element) {
        const animals = this.props.animals;

        animals.forEach(animal => {
            const props = { animal: animal };
            const animalItem = new AnimalItem(props);
            const animalItemDOM = animalItem.renderDOM();
            element.appandChild(animalItemDOM);
        });
    }

    renderHTML() {
        return `
        <ul class="animals"></ul>
        `;
    }
}


export default AnimalList;