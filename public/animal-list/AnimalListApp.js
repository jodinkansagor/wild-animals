import Component from '../Component.js';
import Header from '../common/Header.js';
import AnimalList from './AnimalList.js';
import { getAnimals } from '../services/animal-api.js';
import Loading from '../common/Loading.js';

class AnimalListApp extends Component {
    onRender(element) {
        const header = new Header({ title: 'List of Animals' });
        element.prepend(header.renderDOM());

        const loading = new Loading({ loading: true });
        element.appendChild(loading.renderDOM());

        const list = new AnimalList({ animals: [] });
        const main = element.querySelector('main');
        main.appendChild(list.renderDOM());

        try {
            getAnimals().then(animals => {
                list.update({ animals });
            });
        }

        catch (err) {
            console.log('Load animals failed', err);
        }

        finally {
            setTimeout(() => {
                loading.update({ loading: false });
            }, 3000);
        } 
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