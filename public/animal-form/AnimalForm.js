import Component from '../Component.js';
import { addAnimal } from '../services/animal-api.js';

class AnimalForm extends Component {
    onRender(form) {
        form.addEventListener('submit', async event => {
            event.preventDefault();

            const formData = new FormData(form);

            const animal = {
                name: formData.get('name'),
                type: parseInt(formData.get('type-id')),
                image: formData.get('image'),
                weight: parseInt(formData.get('weight')),
                isCarnivore: formData.get('is-carnivore') === 'on'
            };

            try {
                const saved = await addAnimal(animal);
                console.log(saved);

                window.location = 'animal-list.html';
            }

            catch (err) {
                console.log('animal not saved :( sad face', err);
            }
        });
    }

    renderHTML() {
        const types = this.props.types;
        const optionsList = types.map(type => {
            return `<option value="${type.id}">${type.name}</option>`;
        });

        const joinedOptionsList = optionsList.join('');

       
        return /*html*/`
                <form class="cat-form" >
                    <p>
                        <label for="name">Name</label>
                        <input id="name" name="name" required placeholder="Wild Animal">
                </p>
                        <p>
                            <label for="type">Type</label>
                            <select id="type" name="type-id" required>
                                <option disabled selected>Select A Type</option>
                                ${joinedOptionsList}
                            </select>
                        </p>
                        <p>
                            <label for="image">Image Url</label>
                            <input id="image" name="image" required placeholder="http:/wild-animal.png">
                </p>
                            <p>
                                <label for="weight">Average Weight in Pounds</label>
                                <input id="weight"
                                    name="weight"
                                    required
                                    pattern="[0-9]"
                                    placeholder="100"
                                    title="Average Weight">
                </p>
                                
                                    <fieldset for="is-carnivore">
                                        <legend>Is a Carnivore?</legend>
                                        <label class="horizontally-centered">
                                            <input id="is-carnivore" name="is-carnivore" type="checkbox"> Yes
                    </label>
                </fieldset>
                                        <p>
                                            <button>Add This Animal</button>
                                        </p>
            </form>
                                    `;
    }
}

export default AnimalForm;