import Component from '../Component.js';
import Header from '../common/Header.js';
import AnimalForm from './AnimalForm.js';
import { getTypes } from '../services/animal-api.js';


class AnimalFormApp extends Component {

    async onRender(element) {
        const header = new Header({ title: 'Add an Animal' });
        element.prepend(header.renderDOM());

        const main = element.querySelector('main');
        const types = await getTypes();
        const animalForm = new AnimalForm({ types });
        main.appendChild(animalForm.renderDOM());
    }

    renderHTML() {
        return /*html*/ `
            <div>
                <main></main>
            </div>
        `;
    }
}

export default AnimalFormApp;