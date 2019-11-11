import Component from '../Component.js';
import Header from '../common/Header.js';
import Loading from '../common/Loading.js';
import AnimalDetail from './AnimalDetail.js';
import { getAnimal } from '../services/animal-api.js';

class AnimalDetailApp extends Component {

    async onRender(element) {
        const header = new Header();
        element.prepend(header.renderDOM());

        const main = element.querySelector('main');

        const loading = new Loading({ loading: true });
        main.appendChild(loading.renderDOM());

        const searchParams = new URLSearchParams(window.location.search);
        const id = searchParams.get('id');

        if (!id) {
            window.location = 'animal-list.html';
            return;
        } 

        try {
            const animal = await getAnimal(id);
            const animalDetail = new AnimalDetail({ animal });
            main.appendChild(animalDetail.renderDOM());
        }

        catch (err) {
            console.log(err);
        }

        finally {
            setTimeout(() => {
                loading.update({ loading: false });

            }, 10000);
        }
    }

    renderHTML() {
        return /*html*/ `
            <div>
                <main></main>
            </div>
        `;
    }
}

export default AnimalDetailApp;