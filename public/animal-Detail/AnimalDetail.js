import Component from '../Component.js';

class AnimalDetail extends Component {

    

    renderHTML() {

        console.log(this.props.animal, 'props');
        
        const animal = this.props.animal;
        const json = JSON.stringify(animal, true, 4);
        return /*html*/ `
            <pre>${json}</pre>
        `;
    }
}

export default AnimalDetail;