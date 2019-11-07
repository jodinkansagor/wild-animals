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
                    <p></p>
                </main>
            </div>
        `;
    }
}

export default App;