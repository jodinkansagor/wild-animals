import Component from '../Component.js';
import Header from '../common/Header.js';
import AnimalList from './AnimalList.js';
import { getAnimals } from '../services/animal-api.js';

class AnimalListApp extends Component {
    onRender(element) {
        const header = new Header({ title: 'List of Animals' });
        element.prepend(header.renderDOM());

        const list = new AnimalList({ animals: [] });
        const main = element.querySelector('main');
        main.appendChild(list.renderDOM());

        getAnimals().then(animals => {
            list.update({ animals });
        });
    }

    renderHTML() {
        return `
        <div>
            <main></main>
        </div>
        `;
    }
}

export default AnimalListApp;