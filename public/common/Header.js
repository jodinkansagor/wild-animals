import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        const title = this.props.title || 'Wild Animals';

        return `
        <header>
                <img class="logo" src="../assets/awesome-logo.png" alt="Awesome Logo">
                <h1>${title}</h1>
                <nav>
                    <a href="./">Home</a>
                    <a href="./animal-list.html">Cats</a>
                    <a href="./animal-form.html">Add a Cat</a>
                </nav>
            </header>
        `;
    }
}