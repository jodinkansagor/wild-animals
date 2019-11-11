import Component from '../Component.js';
import Header from '../common/Header.js';

class App extends Component {
    onRender(element) {
        const header = new Header();
        element.prepend(header.renderDOM());
    }

    renderHTML() {
        return `
        <div>
                <main>
                    <img src = "assets/animal-montage.jpg" alt = "animal montage">
                </main>
            </div>
        `;
    }
}

export default App;