import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        const title = this.props.title || 'Wild Animals';

        return `
        <header>
                <h1>${title}</h1>
                <nav>
                    <a href="./">Home</a>
                    <a href="./animal-list.html">See The Animals</a>
                    <a href="./animal-form.html">Add an Animal</a>
                </nav>
                <hr>
            </header>
        `;
    }
}
export default Header;

/* <img class="logo" src="../assets/awesome-logo.png" alt="Awesome Logo"></img> */